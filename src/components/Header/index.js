import { useContext } from 'react';
import { UsersListContext } from '../../context/UsersContext';
import { Container, HeaderContent, Image, SearchField } from './styles';
import logo from '../../assets/images/juntos-logo.png';
import searchLogo from '../../assets/images/search-logo.png';

const Header = () => {
  const { usersSearched, userSearchFunction } = useContext(UsersListContext);
  const [search] = usersSearched;

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
            onChange={userSearchFunction}
          />
          <button type="submit">Botao 1</button>
          <button type="submit">Botao 2</button>
        </SearchField>
      </HeaderContent>
    </Container>
  );
};

export default Header;
