import "./Footer.css";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <span>Created by: Patryk Siemieniec</span>
      <div className="links">
        <a target="_blank" href="https://github.com/PatrykSiemieniec">
          <AiOutlineGithub style={{ fontSize: "30px" }} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/patryksiemieniec99"
        >
          <AiOutlineLinkedin style={{ fontSize: "2rem" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
