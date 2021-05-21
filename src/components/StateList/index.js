import { useState, useEffect } from 'react';
import { List, Member } from './styles';

const StateList = ({ statesInfo }) => {
  const [visible, setVisible] = useState(7);
  const [statesList, setStatesList] = useState(statesInfo);
  const [statesFiltered, setStateFiltered] = useState([]);

  // code for search by checkbox
  const [checkedState, setCheckedState] = useState([]);
  const [searchList, setSearchList] = useState(statesList);
  const [checked, setChecked] = useState(false);

  // Code added for select state from checkbox option
  useEffect(() => {
    const statesSelected = statesInfo.map((user) => {
      // return user.location.state;
      return user;
    });
    setStatesList(statesSelected);
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

  // console.log('Valor de checkedState fora de stateMapped: ', checkedState); // It's working

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

  console.log('Valor de stateFiltered: ', stateFiltered);
  console.log('Valor de checkedState: ', checkedState);

  const states = [
    'Rondônia',
    'Acre',
    'Amazonas',
    'Roraima',
    'Pará',
    'Amapá',
    'Tocantins',
    'Maranhão',
    'Piauí',
    'Ceará',
    'Rio Grande do Norte',
    'Paraíba',
    'Pernambuco',
    'Alagoas',
    'Sergipe',
    'Bahia',
    'Minas Gerais',
    'Espírito Santo',
    'Rio de Janeiro',
    'São Paulo',
    'Paraná',
    'Santa Catarina',
    'Rio Grande do Sul',
    'Mato Grosso do Sul',
    'Mato Grosso',
    'Goiás',
    'Distrito Federal',
  ];

  const showMoreStates = (e) => {
    e.preventDefault();
    if (visible === 7) {
      setVisible((vis) => vis + 20);
    } else {
      setVisible((vis) => vis - 20);
    }
  };

  return (
    <List>
      <span className="title">Por Estado</span>
      {states.slice(0, visible).map((state) => {
        const lowerState = state.toLowerCase();
        return (
          <>
            <ul className="states">
              <li>
                <input
                  type="checkbox"
                  value={lowerState}
                  onClick={handleCheckbox}
                />
                {state}
              </li>
            </ul>
          </>
        );
      })}
      <a href="#" onClick={showMoreStates}>
        {visible !== 27 ? 'Ver todos' : 'Ver menos'}
      </a>
    </List>
  );
};

export default StateList;
