import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import Text from "../../components/Text/Text";
import DoublePicture from "../../components/DoublePicture/DoublePicture";
import ContactForm from "../../components/ContactForm/ContactForm";
import classes from "../contact.module.css"
import { dark_details, contact, countries } from "../../images";

export default () =>{
    let contactDetails={
        name: "Nombre",
        organization: "Organización",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar"
    }
    return (
        <Fragment>
            <Nav lan="es" alt="/contact"/>
            <DoublePicture img1={ dark_details } img2={ contact }/>
            <Text 
                title="CONTACTO"
                subtitle="AQUI ESTAMOS PARA RESPONDER TUS PREGUNTAS ACERCA DE CONCEPTOS DE DESARMAMENTO"
            />
            <div className={ classes.address }>
                <div>
                    <h3>iOFFICE / <br/>Disarmament Solutions</h3>
                    <p>
                        via Swedish Net
                        <br/>
                        <br/>
                        Kungsgatan 60, 1st floor
                        <br/>
                        111 22 Stockholm
                        <br/>
                        SWEDEN
                    </p>
                </div>
            </div>
            <ContactForm contactDetails={ contactDetails }/>
            <img src={ countries } alt="countries" className={ classes.countries }/>
            <Footer/>
        </Fragment>
    )
}