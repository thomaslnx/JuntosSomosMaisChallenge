import styled from 'styled-components';

export const List = styled.aside`
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
