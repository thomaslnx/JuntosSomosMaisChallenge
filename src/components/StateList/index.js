import { useState, useEffect, useContext } from 'react';
import { CheckedStatesContext } from '../../context/CheckedStatesContext';
import { List } from './styles';

const StateList = ({ statesInfo }) => {
  const [visible, setVisible] = useState(7);
  const [_, setStatesList] = useState(statesInfo);
  const { handleCheckBoxFunction } = useContext(CheckedStatesContext);

  // Code added for select state from checkbox option
  useEffect(() => {
    const statesSelected = statesInfo.map((user) => {
      return user;
    });
    setStatesList(statesSelected);
  }, []);

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
              <li key={state}>
                <input
                  type="checkbox"
                  value={lowerState}
                  onClick={handleCheckBoxFunction}
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
