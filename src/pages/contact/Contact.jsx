import axios from "axios";
import "../../styles/main.scss";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/contacts", form);
      setSuccessMessage("Votre message a bien été envoyé !");
      setErrorMessage("");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setErrorMessage("Erreur lors de l'envoi. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contactez-nous</h1>

      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Nom </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Sujet</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Message </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
