import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 296px;
  background-color: #3a3a3a;
  padding-top: 32px;
`;

export const Logos = styled.div`
  .img.footer-brasao {
    width: 48px;
    height: 48px;
  }

  img.footer-logo {
    width: 120px;
    height: 48px;
    margin-left: 7px;
  }
`;

export const Slogan = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 24px;
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 14px;
    font-weight: 400;
    margin-top: 24px;
    color: #ffffff;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;
