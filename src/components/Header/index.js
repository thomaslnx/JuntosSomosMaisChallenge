import { useState } from 'react';
import { Container, HeaderContent, Image, SearchField } from './styles';
import logo from '../../assets/images/juntos-logo.png';
import searchLogo from '../../assets/images/search-logo.png';
import api from '../../services/api';

const Header = () => {
  const [search, setSearch] = useState('');

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
        if (searchInput === firstName) {
          foundedName = list;
        }
        if (searchInput === lastName) {
          foundedName = list;
        }

        return foundedName;
      })
      .filter((list) => {
        const item = list !== undefined;
        return item;
      });

    console.log('Resultado de finalList: ', newList);
  };

  return (
    <Container>
      <HeaderContent>
        <Image>
          <img className="main-logo" src={logo} alt="JuntosSomosMaisLogo" />
        </Image>
        <SearchField>
          <img className="search-logo" src={searchLogo} alt="search-logo" />
          <input
            type="text"
            placeholder="Buscar aqui"
            value={search}
            onChange={searchUser}
          />
          <button type="submit">Botao 1</button>
          <button type="submit">Botao 2</button>
        </SearchField>
      </HeaderContent>
    </Container>
  );
};

export default Header;
