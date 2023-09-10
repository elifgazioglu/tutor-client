import "./Footer.scss";
import { BiLogoTwitter, BiLogoLinkedin, BiLogoInstagramAlt, BiLogoFacebook} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">arpa.</div>
        <div className="pages">
          <div className="learn">
            <h3>DAHA FAZLA BİLGİ EDİNİN</h3>
            <span>Hakkımızda</span>
            <span>Neden arpa?</span>
            <span>İletişim</span>
          </div>
          <div className="contact">
            <div className="social">
              <h3>İLETİŞİM</h3>
              <div className="icons">
                <a href="" target="" rel="">
                  <BiLogoTwitter className="socials" />
                </a>
                <a href="" target="" rel="">
                  <BiLogoLinkedin className="socials" />
                </a>
                <a href="" target="" rel="">
                  <BiLogoInstagramAlt className="socials" />
                </a>
                <a href="" target="" rel="">
                  <BiLogoFacebook className="socials" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
