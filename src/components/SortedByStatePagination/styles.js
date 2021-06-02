import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  height: 40px;
  width: 350px;
  margin-bottom: 80px;
  align-items: space-between;
  align-items: center;

  .left-button,
  .right-button {
    cursor: pointer;
    border: none;
    width: 32px;
    height: 32px;
    margin: auto;
    border-radius: 50%;
    background-color: #4a4a4a;
    text-align: center;
  }

  .left-button:disabled,
  .right-button:disabled {
    background-color: #9b9b9b;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    width: 100%;
    align-text: center;

    .page-item {
      display: inline;
      margin: 0 12px;
      padding-bottom: 8px;

      .page-link {
        font-size: 16px;
        height: 40px;
        color: #9b9b9b;
        text-decoration: none;
      }
    }

    .page-item.active {
      margin: 0;
      border-bottom: 3px solid #9b9b9b;
      border-radius: 3px;
      padding: 0 16px 5px;
    }

    .page-item.active a {
      font-weight: 700;
    }
  }
`;
