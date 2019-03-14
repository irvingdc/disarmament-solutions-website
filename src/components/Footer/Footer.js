import React from "react"
import classes from "./Footer.module.css"
import { logo_light } from "../../images";
import { Link } from "gatsby";

export default ({ lan }) =>{
    return (
        <div className={ classes.container }>
            <div className={ classes.content }>
                <div className={ classes.text }>
                    <p>{
                        lan === "en"
                        ? "Comprehensive disarmament concepts from Sweden."
                        : "Conceptos integrales de desarme de Suecia."
                    }</p>
                    <p>{
                        lan === "en"
                        ? "Contact us "
                        : "Contáctanos "
                    }<Link to="/contact">{
                        lan === "en"
                        ? " here."
                        : " aquí."
                    }</Link></p>
                </div>
                <img src={ logo_light } alt="Logo"/>
            </div>
            <p>© Copyright. Disarmament Solutions AB</p>
        </div>
    )
}
    