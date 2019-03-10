import React, { Fragment } from "react"
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css"
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () => (
    <Fragment>
        <Nav lan="es" alt="/what-we-do/environmental-protection"/>
            <ServiceSection title="Protección ambiental" lan="es">
                Este módulo incluye productos y servicios requeridos para asegurar que el concepto de desarme genere el mínimo impacto ambiental. Todas las partes de este módulo cumplen con las leyes y regulaciones aplicables en la materia ambiental. La solución total para la protección ambiental está diseñada tomando como base el perfil de riesgo definido para riesgos ambientales. 
            </ServiceSection>
        <Footer/>
    </Fragment>
)