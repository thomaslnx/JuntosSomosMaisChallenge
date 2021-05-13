import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
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

// export const Content = styled.div`
//   width: 100%;
//   max-width: 1136px;
// `;
