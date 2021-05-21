import styled from 'styled-components';

export const List = styled.aside`
  width: 272px;
  min-height: 374px;
  height: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 24px 27px;
  margin-right: 16px;

  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }

  a {
    font-weight: 400;
    font-size: 16px;
    color: #222d39;
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
