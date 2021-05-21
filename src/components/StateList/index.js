import { useState } from 'react';
import { List } from './styles';

const StateList = ({ statesToShow }) => {
  const [visible, setVisible] = useState(7);

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
      {states.slice(0, visible).map((state) => (
        <>
          <ul className="states">
            <li>
              <input type="checkbox" />
              {state}
            </li>
          </ul>
        </>
      ))}
      <a href="#" onClick={showMoreStates}>
        {visible !== 27 ? 'Ver todos' : 'Ver menos'}
      </a>
    </List>
  );
};

export default StateList;
