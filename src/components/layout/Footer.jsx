import { Link } from "react-router-dom";
import "../../styles/main.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Crèche Oursons et Compagnie</p>
      <div className="footer-links">
        <Link to="/mentions-legales" className="footer-link">Mentions légales</Link>
        <Link to="/politique-Confidentialite" className="footer-link">Politique de confidentialité</Link>
        <Link to="/politique-cookies" className="footer-link">Cookies</Link>
      </div>
    </footer>
  );
};

export default Footer;


