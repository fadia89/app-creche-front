
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Crèche Oursons et Compagnie</p>
            <div className="mt-2 space-x-4">
                <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
                <Link to="/politique-Confidentialite" className="hover:underline">Politique de confidentialite</Link>
                <Link to="/politique-cookies" className="hover:underline">Cookies</Link>
            </div>
        </footer>
    );
};

export default Footer;

