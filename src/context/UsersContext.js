import { createContext, useState } from 'react';
import api from '../services/api';

export const UsersListContext = createContext({});

export function UsersListProvider({ children }) {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const searchUser = async (e) => {
    const searchInput = e.target.value;
    let currentList = [];
    let newList = [];
    setSearch(searchInput);

    currentList = await api.get('/');

    newList = currentList.data
      .map((list) => {
        const firstName = list.name.first;
        const lastName = list.name.last;
        let foundedName;
        if (firstName.includes(searchInput)) {
          foundedName = list;
        }
        if (lastName.includes(searchInput)) {
          foundedName = list;
        }

        return foundedName;
      })
      .filter((list) => {
        const item = list !== undefined;
        return item;
      });

    console.log('Resultado de finalList: ', newList);

    setFilteredUsers(newList);
  };

  const usersData = {
    usersFiltered: [filteredUsers, setFilteredUsers],
    usersSearched: [search, setSearch],
    userSearchFunction: searchUser,
  };

  return (
    <UsersListContext.Provider value={usersData}>
      {children}
    </UsersListContext.Provider>
  );
}
