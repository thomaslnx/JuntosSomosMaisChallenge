import Pagination from '../Pagination';
import StateList from '../StateList';

import {
  Container,
  Header,
  Content,
  Members,
  Member,
  MembersList,
  MembersHeader,
} from './styles';

const UsersSortedByState = ({
  selectedStates,
  currentPage,
  totalPages,
  onPageChanged,
}) => {
  const filteredByStates = selectedStates.length;
  console.log(
    'Valor de selectedStateList dentro do componente UsersSortedByState: ',
    selectedStates
  );
  return (
    <Container>
      <Header>
        <div className="breadcrumb">
          <p>Home &gt; Usuários &gt; Detalhes</p>
        </div>

        <div className="title-content">
          <p>Lista de Membros</p>
        </div>
      </Header>
      <Content>
        <StateList statesInfo={selectedStates} />

        <Members>
          <MembersHeader>
            <p>
              Exibindo {currentPage} de {totalPages} itens
            </p>
            <div className="option">
              <strong>ordenar por:</strong>
              <select name="sort" id="sort-type">
                <option value="name">Nome</option>
                <option value="state">Estado</option>
              </select>
            </div>
          </MembersHeader>
          <MembersList>
            {selectedStates.map((user) => {
              // Capitalize first letter of each word to state name.
              const formatedState = user.state.split(' ');
              const state = formatedState
                .map((stateName) => {
                  return stateName[0].toUpperCase() + stateName.substring(1);
                })
                .join(' ');
              // Capitalize first letter for each word to user name.
              const firstName =
                user.firstName.charAt(0).toUpperCase() +
                user.firstName.slice(1);
              const lastName =
                user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);

              return (
                <Member key={user.id}>
                  <img src={user.picture} alt="avatar-logo" />
                  <p className="user-name">
                    {firstName} {lastName}
                  </p>
                  <p className="address">{user.street}</p>
                  <p className="city">{user.city}</p>
                  <p className="state-postcode">
                    {state} - CEP: {user.cep}
                  </p>
                </Member>
              );
            })}
          </MembersList>

          <Pagination
            totalUsers={filteredByStates}
            pageLimit={9}
            pageNeighbors={1}
            onPageChanged={onPageChanged}
          />
        </Members>
      </Content>
    </Container>
  );
};

export default UsersSortedByState;
