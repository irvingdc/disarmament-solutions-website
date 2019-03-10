import React, { Fragment } from "react"
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css"
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="es" alt="/what-we-do/physical-security"/>
            <ServiceSection title="Seguridad física" lan="es">
            Este módulo incluye todo tipo de forma de seguridad física requerida para mantener diversos niveles de seguridad durante el proceso de desarme. La solución de seguridad total está diseñada tomando como base el perfil de riesgo definido para riesgos de seguridad física.
            </ServiceSection>
        <Footer/>
    </Fragment>
)