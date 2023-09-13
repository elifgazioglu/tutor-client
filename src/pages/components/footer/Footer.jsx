import "./Footer.scss";
import {
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoFacebook,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img className="logo-img" src="/logo.png" alt="Logo" />
        </div>
        <div className="pages">
          <div className="learn">
            <h3>DAHA FAZLA BİLGİ EDİNİN</h3>
            <a href="/about">Hakkımızda</a>
            <a href="/contact">İletişim</a>
          </div>
          <div className="contact">
            <div className="social">
              <h3>SOSYAL MEDYA</h3>
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
