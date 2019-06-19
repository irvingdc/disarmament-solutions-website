import React, { Fragment } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css";
import Text from "../components/Text/Text";
import DoublePicture from "../components/DoublePicture/DoublePicture";
import ContactForm from "../components/ContactForm/ContactForm";
import classes from "./contact.module.css";
import { background_dark, contact, countries } from "../images";

export default () => {
  let contactDetails = {
    name: "Name",
    organization: "Organization",
    email: "Email",
    message: "Message",
    submit: "Submit",
    sending: "Sending..."
  };
  return (
    <Fragment>
      <Nav
        lan="en"
        alt="/es/contacto"
        title="Disarmament Solutions | Contact"
        canonical="https://www.disarmamentsolutions.com/contact"
        description="We are here to answer your questions about our disarmament concepts."
      />
      <DoublePicture img1={background_dark} img2={contact} />
      <Text
        title="CONTACT"
        subtitle="WE ARE HERE TO ANWSER YOUR QUESTIONS ABOUT OUR DISARMAMENT CONCEPTS"
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
            href="https://www.swedishnet.se/en/"
            target="_blank"
          >
            Swedish Net Group
          </a>
          <p>Disarmament Solutions is a part of the Swedish Net Group. </p>
        </div>
      </div>
      <ContactForm contactDetails={contactDetails} />
      <img src={countries} alt="countries" className={classes.countries} />
      <Footer lan="en" />
    </Fragment>
  );
};
