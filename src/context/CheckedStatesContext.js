import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const CheckedStatesContext = createContext([]);

export function CheckedStatesProvider({ children }) {
  const [checkedState, setCheckedState] = useState([]);
  const [checked, setChecked] = useState(false);
  const [searchList, setSearchList] = useState([]);

  useEffect(async () => {
    const apiData = await api.get('/');
    setSearchList(apiData.data);
  }, []);

  const handleCheckbox = (e) => {
    if (checkedState.includes(e.target.value)) {
      const filtered = checkedState.filter((state) => {
        return state !== e.target.value;
      });
      setCheckedState(filtered);
    } else {
      setCheckedState((prevValue) => [...prevValue, e.target.value]);
      setChecked(true);
    }
  };

  let stateFiltered = [];
  const stateMapped = searchList.map((item) => {
    if (
      checkedState.includes(item.location.state) ||
      checkedState.length === 0
    ) {
      // Capitalize first letter of each word to state name.

      const formatedState = item.location.state.split(' ');
      const state = formatedState
        .map((stateName) => {
          return stateName[0].toUpperCase() + stateName.substring(1);
        })
        .join(' ');
      // Capitalize first letter for each word to user name.
      const firstName =
        item.name.first.charAt(0).toUpperCase() + item.name.first.slice(1);
      const lastName =
        item.name.last.charAt(0).toUpperCase() + item.name.last.slice(1);

      stateFiltered.push({
        id: item.id,
        picture: item.picture.thumbnail,
        firstName,
        lastName,
        street: item.location.street,
        city: item.location.city,
        state: item.location.state,
        cep: item.location.postcode,
      });
    }

    return stateFiltered;
  });

  /**
   * Zerar o array stateFiltered if nenhum estado está checked.
   */
  if (checkedState.length === 0) {
    stateFiltered = [];
  }

  // console.log('Valor de stateFiltered: ', stateFiltered);
  // console.log('Valor de checkedState: ', checkedState);

  const statesData = {
    selectedState: [checkedState, setCheckedState],
    selectedStateList: stateFiltered,
    checkedBox: [checked, setChecked],
    handleCheckBoxFunction: handleCheckbox,
  };

  return (
    <CheckedStatesContext.Provider value={statesData}>
      {children}
    </CheckedStatesContext.Provider>
  );
}
