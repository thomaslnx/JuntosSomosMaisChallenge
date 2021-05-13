import { Container, HeaderContent, Image, SearchField } from './styles';
import logo from '../../assets/images/juntos-logo.png';
import search from '../../assets/images/search-logo.png';

const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <Image>
          <img className="main-logo" src={logo} alt="JuntosSomosMaisLogo" />
        </Image>
        <SearchField>
          <img className="search-logo" src={search} alt="search-logo" />
          <input type="text" placeholder="Buscar aqui" />
          <button type="submit">Botao 1</button>
          <button type="submit">Botao 2</button>
        </SearchField>
      </HeaderContent>
    </Container>
  );
};

export default Header;
