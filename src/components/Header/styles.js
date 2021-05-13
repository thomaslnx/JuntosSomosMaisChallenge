import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96px;
  background: #f5f5f5;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1131px;
`;

export const Image = styled.div`
  .main-logo {
    width: 148px;
    height: 40px;
  }
`;

export const SearchField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 864px;
  height: 50px;

  .search-logo {
    position: relative;
    left: 50px;
  }

  input {
    width: 425px;
    height: 48px;
    border: 1px solid #b0b0b0;
    border-radius: 50px;
    padding-left: 50px;

    &placeholder {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      color: #9b9b9b;
    }
  }

  input:focus {
    outline: none;
  }

  button {
    width: 176px;
    height: 16px;
    background-color: #d8d8d8;
    border: none;
    border-radius: 32px;
  }
`;
