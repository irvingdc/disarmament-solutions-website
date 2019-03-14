import React, { Fragment } from "react"
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css"
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="es" alt="/what-we-do/destruction"/>
            <ServiceSection title="Destrucción" lan="es">
                Este módulo incluye diferentes soluciones para la destrucción de armas de fuego y municiones, tanto estacionarias como móviles. Todas las soluciones son diseñadas para minimizar el impacto negativo en el ambiente y desechar los riesgos inaceptables del personal involucrado. 
            </ServiceSection>
        <Footer/>
    </Fragment>
)