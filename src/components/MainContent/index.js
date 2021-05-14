import {
  Container,
  Header,
  Content,
  StateList,
  Members,
  Pagination,
} from './styles';

export const MainContent = () => {
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
        <StateList>
          <span className="title">Por Estado</span>
          <ul className="states">
            <li>
              <input type="checkbox" /> São Paulo
            </li>
            <li>
              <input type="checkbox" /> Rio de Janeiro
            </li>
            <li>
              <input type="checkbox" />
              Minas Gerais
            </li>
            <li>
              <input type="checkbox" />
              Espírito Santo
            </li>
            <li>
              <input type="checkbox" />
              Bahia
            </li>
          </ul>
        </StateList>

        <Members>
          <Pagination>
            <p>Exibindo 9 de 25 itens</p>
            <div className="option">
              <strong>ordenar por:</strong>
              <select name="sort" id="sort-type">
                <option value="name">Nome</option>
                <option value="state">Estado</option>
              </select>
            </div>
          </Pagination>
        </Members>
      </Content>
    </Container>
  );
};

export default MainContent;
