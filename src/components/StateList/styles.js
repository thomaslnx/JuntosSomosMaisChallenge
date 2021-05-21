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
