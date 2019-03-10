import React, { Fragment } from "react"
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css"
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="es" alt="/what-we-do/record-keeping"/>
            <ServiceSection title="Mantenimiento de registros" lan="es">
            Este módulo consiste en un sistema de TI asociado con una base de datos que habilita el monitoreo de todo el material durante el proceso de desarme – desde el registro inicial hasta que todos los componentes sean finalmente destruidos o reciclados. El soporte para el registro, embargos, inventario, control de bienes, trasporte, etc., es proporcionado con base en necesidades específicas. 
            </ServiceSection>
        <Footer/>
    </Fragment>
)