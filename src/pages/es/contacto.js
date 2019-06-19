import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import Text from "../../components/Text/Text";
import DoublePicture from "../../components/DoublePicture/DoublePicture";
import ContactForm from "../../components/ContactForm/ContactForm";
import classes from "../contact.module.css";
import { background_dark, contact, countries } from "../../images";

export default () => {
  let contactDetails = {
    name: "Nombre",
    organization: "Organización",
    email: "Correo",
    message: "Mensaje",
    submit: "Enviar",
    sending: "Enviando..."
  };
  return (
    <Fragment>
      <Nav
        lan="es"
        alt="/contact"
        title="Disarmament Solutions | Contacto"
        canonical="https://www.disarmamentsolutions.com/es/contacto"
        description="Aquí estamos para responder tus preguntas acerca de conceptos de desarme."
      />
      <DoublePicture img1={background_dark} img2={contact} />
      <Text
        title="CONTACTO"
        subtitle="AQUI ESTAMOS PARA RESPONDER TUS PREGUNTAS ACERCA DE CONCEPTOS DE DESARME"
      />
      <div className={classes.address}>
        <div>
          <h3>
            iOFFICE / <br />
            Disarmament Solutions
          </h3>
          <p>
            via Swedish Net
            <br />
            <br />
            Kungsgatan 60, 1st floor
            <br />
            111 22 Stockholm
            <br />
            SWEDEN
          </p>
        </div>
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.swedishnet.se/es/"
            target="_blank"
          >
            Swedish Net Group
          </a>
          <p>Disarmament Solutions es parte del grupo Swedish Net. </p>
        </div>
      </div>
      <ContactForm contactDetails={contactDetails} />
      <img src={countries} alt="countries" className={classes.countries} />
      <Footer lan="es" />
    </Fragment>
  );
};
