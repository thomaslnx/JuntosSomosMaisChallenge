import { List } from './styles';

const StateList = ({ statesToShow }) => {
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

  console.log('Valor de states to show: ', statesToShow);

  return (
    <List>
      <span className="title">Por Estado</span>
      {states.map((state) => (
        <>
          <ul className="states">
            <li>
              <input type="checkbox" />
              {state}
            </li>
          </ul>
        </>
      ))}
    </List>
  );
};

export default StateList;
