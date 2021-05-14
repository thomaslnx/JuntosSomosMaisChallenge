import { Container, Logos, Slogan, SocialNetworks } from './styles';
import brasao from '../../assets/images/footer-brasao.png';
import logo from '../../assets/images/footer-logo.png';
import instagram from '../../assets/images/Instagram.png';
import linkedin from '../../assets/images/LinkedIn.png';
import facebook from '../../assets/images/Facebook.png';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Logos>
          <img className="footer-brasao" src={brasao} alt="footer-brasao" />
          <img className="footer-logo" src={logo} alt="footer-logo" />
        </Logos>
        <Slogan>
          <p>Juntos Somos Mais Fidelização S.A.</p>
        </Slogan>
        <SocialNetworks>
          <span>Siga-nos nas redes sociais:</span>
          <div className="icons">
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
          </div>
        </SocialNetworks>
      </Container>
    </footer>
  );
};

export default Footer;
