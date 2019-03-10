import React, { Fragment } from "react"
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css"
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="es" alt="/what-we-do/recycling"/>
            <ServiceSection title="Reciclaje" lan="es">
            Este módulo es una solución para convertir armas de fuego y municiones en partes que pueden ser reutilizadas. Además, el módulo incluye el reciclaje de desechos generados de otros módulos del concepto de desarme. 
            </ServiceSection>
        <Footer/>
    </Fragment>
)