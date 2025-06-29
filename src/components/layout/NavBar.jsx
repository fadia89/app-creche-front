import { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../context/authContext";
import "../../styles/main.scss";

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="dropdown" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-toggle"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, i) => (
            <li key={i}>
              <Link
                to={item.link}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>

  );
};

const NavBar = () => {
  const { handleLogout, isAuthenticated, userRole } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="main-nav">
      <div className="nav-content">
        <img src={logo} alt="Logo crèche" />
        {/* Burger button visible only on mobile */}
        <button
          className="toggle-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul
          className={`main-menu ${menuOpen ? "menu-open" : "menu-close"}`}
          onClick={() => setMenuOpen(false)}
        >
          <DropdownMenu
            title="Accueil"
            items={[
              { label: "Ourson & Compagnie", link: "/ourson" },
              { label: "Micro-crèche Les Petits Oursons", link: "/petit-ourson" },
            ]}
          />
          <li className="menu-mobile">
            <Link to="/ourson">Ourson & Compagnie</Link>
            <Link to="/petit-ourson">Micro-crèche Les Petits Oursons</Link>
          </li>
          <li>
            <Link
              to="/a-propos"
            >
              À propos
            </Link>
          </li>
          <DropdownMenu
            title="Nos services"
            items={[
              { label: "Approche Pédagogique", link: "/approche-pedagogique" },
              { label: "Sommeil", link: "/sommeil" },
              { label: "Adaptation", link: "/adaptation" },
              { label: "Alimentation", link: "/alimentation" },
            ]}
          />

          <li className="menu-mobile">
            <Link to="/approche-pedagogique">Approche Pédagogique</Link>
            <Link to="/sommeil">Sommeil</Link>
            <Link to="/adaptation">Adaptation</Link>
            <Link to="/alimentation">Alimentation</Link>
          </li>

          <li>
            <Link to="/pourquoi-une-creche">
              Pourquoi une crèche ?
            </Link>
          </li>

          {!isAuthenticated ? (
            <>
              <li>
                <Link to="/register">
                  S'inscrire
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Espace Parent
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile">
                  Profil
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>
                  Déconnexion
                </button>
              </li>
            </>
          )}

          {isAuthenticated && userRole === "admin" && (
            <li>
              <Link to="/admin">
                Dashboard Admin
              </Link>
            </li>
          )}

          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
