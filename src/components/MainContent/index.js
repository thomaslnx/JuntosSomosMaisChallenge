import { useState, useEffect, useContext } from 'react';
import { UsersListContext } from '../../context/UsersContext';
import api from '../../services/api';
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

export const MainContent = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  const { usersFiltered, usersSearched } = useContext(UsersListContext);
  const [filteredUsers, _] = usersFiltered;
  const [search] = usersSearched;

  useEffect(async () => {
    const apiData = await api.get('/');
    setAllUsers(apiData.data);
  }, []);

  function onPageChanged(data) {
    const { atualPage, pagesTotal, pageLimit } = data;

    const offset = (atualPage - 1) * pageLimit;
    const atualUsers = allUsers.slice(offset, offset + pageLimit);

    setCurrentPage(atualPage);
    setCurrentUsers(atualUsers);
    setTotalPages(pagesTotal);
  }

  const numberOfUsers = allUsers.length;
  if (numberOfUsers === 0) return null;

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
        <StateList statesInfo={allUsers} />

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
            {filteredUsers.length !== 0
              ? filteredUsers.map((user) => {
                  // Capitalize first letter of each word to state name.
                  const formatedState = user.location.state.split(' ');
                  const state = formatedState
                    .map((stateName) => {
                      return (
                        stateName[0].toUpperCase() + stateName.substring(1)
                      );
                    })
                    .join(' ');
                  // Capitalize first letter for each word to user name.
                  const firstName =
                    user.name.first.charAt(0).toUpperCase() +
                    user.name.first.slice(1);
                  const lastName =
                    user.name.last.charAt(0).toUpperCase() +
                    user.name.last.slice(1);

                  console.log(
                    'Valor de search dentro de mainContent: ',
                    search
                  );

                  return (
                    <Member key={user.id}>
                      <img src={user.picture.thumbnail} alt="avatar-logo" />
                      <p className="user-name">
                        {firstName} {lastName}
                      </p>
                      <p className="address">{user.location.street}</p>
                      <p className="city">{user.location.city}</p>
                      <p className="state-postcode">
                        {state} - CEP: {user.location.postcode}
                      </p>
                    </Member>
                  );
                })
              : currentUsers.map((user) => {
                  // Capitalize first letter of each word to state name.
                  const formatedState = user.location.state.split(' ');
                  const state = formatedState
                    .map((stateName) => {
                      return (
                        stateName[0].toUpperCase() + stateName.substring(1)
                      );
                    })
                    .join(' ');
                  // Capitalize first letter for each word to user name.
                  const firstName =
                    user.name.first.charAt(0).toUpperCase() +
                    user.name.first.slice(1);
                  const lastName =
                    user.name.last.charAt(0).toUpperCase() +
                    user.name.last.slice(1);

                  return (
                    <Member key={user.id}>
                      <img src={user.picture.thumbnail} alt="avatar-logo" />
                      <p className="user-name">
                        {firstName} {lastName}
                      </p>
                      <p className="address">{user.location.street}</p>
                      <p className="city">{user.location.city}</p>
                      <p className="state-postcode">
                        {state} - CEP: {user.location.postcode}
                      </p>
                    </Member>
                  );
                })}
          </MembersList>

          <Pagination
            totalUsers={numberOfUsers}
            pageLimit={9}
            pageNeighbors={1}
            onPageChanged={onPageChanged}
          />
        </Members>
      </Content>
    </Container>
  );
};

export default MainContent;
