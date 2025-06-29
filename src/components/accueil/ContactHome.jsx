import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactHome = () => {
    return (
        <section className="section contact">
            <Link to="/contact"><FontAwesomeIcon icon={faPhone} /> Contactez-nous</Link>
            <p>Pour plus d'informations ou pour nous rendre visite, nous sommes à votre écoute ! 😊</p>
        </section>

    )
}


export default ContactHome;