import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1136px;
  margin-top: 24px;
  font-family: 'Roboto', sans-serif;

  .breadcrumb {
    font-size: 12px;
  }

  .title-content {
    margin: 24px 0 40px 0;
    font-size: 32px;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1136px;
`;

export const StateList = styled.aside`
  width: 272px;
  height: 474px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 24px 27px;
  margin-right: 16px;

  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }

  ul {
    list-style: none;
    margin-top: 14px;
    padding: 0;

    li {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;

      input {
        margin-right: 8px;
      }
    }
  }
`;

export const Members = styled.section`
  width: 100vw;
`;

export const Pagination = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  max-width: 848px;
  height: 60px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;

  p {
    font-size: 16px;
    font-weight: 400;
  }

  .option strong {
    font-size: 14px;
    margin-right: 8px;
  }

  select {
    border: none;
    width: 68px;
    font-weight: 400;
    font-size: 14px;
  }
`;
