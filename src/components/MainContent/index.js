import { useState, useEffect } from 'react';
import api from '../../services/api';
import {
  Container,
  Header,
  Content,
  StateList,
  Members,
  Member,
  MembersList,
  Pagination,
  PageIndex,
} from './styles';

import avatar from '../../assets/images/avatar.png';

export const MainContent = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const apiData = await api.get('/');
    setUsers(apiData.data);
  }, []);

  console.log('Valor contido no estado users: ', users);
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
          <MembersList>
            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <Member>
              <img src={avatar} alt="avatar-logo" />
              <p className="user-name">Joselino Alves</p>
              <p className="endereco">Rua Espírito Santo, 2096</p>
              <p className="cidade">São Jose de Ribamar</p>
              <p className="estado-cep">Paraná - CEP 96895</p>
            </Member>

            <PageIndex />
          </MembersList>
        </Members>
      </Content>
    </Container>
  );
};

export default MainContent;
