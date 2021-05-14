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
  max-width: 894px;
  height: 60px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin-bottom: 16px;

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

export const MembersList = styled.section`
  width: 100%;
  max-width: 894px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  margin-bottom: 156px;
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 285px;
  height: 310px;
  border: 1px solid #e5e5e5;

  img {
    width: 97px;
    height: 97px;
    border: none;
    border-radius: 50%;
    margin-top: 35px;
  }

  .user-name {
    font-size: 20px;
    font-weight: 700;
    margin-top: 12px;
  }

  .address {
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
  }

  .city {
    font-size: 12px;
    font-weight: 400;
    margin-top: 12px;
  }

  .state-postcode {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const PageIndex = styled.div``;
