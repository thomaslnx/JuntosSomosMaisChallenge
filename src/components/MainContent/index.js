import { Container, Header } from './styles';

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
    </Container>
  );
};

export default MainContent;
