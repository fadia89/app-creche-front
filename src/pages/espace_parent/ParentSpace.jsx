import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext.jsx";
import '../../styles/main.scss';

const ParentSpace = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connexion
    handleLogin(e, email, password);
    // Vider les champs
    setEmail("");
    setPassword("");
  };

  return (
    <div className="parent-container">
      <div className="form-wrapper">
        <h2 className="form-title">Connexion</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <span onClick={() => setShowPassword((prev) => !prev)} className="toggle-password">
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button type="submit" className="submit-btn">Je me connecte</button>
        </form>

        <p className="register-link">
          Pas encore de compte ? <a href="/register">Inscrivez-vous</a>
        </p>
      </div>
    </div>
  );
};

export default ParentSpace;
