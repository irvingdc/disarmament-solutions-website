import React, { Fragment } from "react"
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css"
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="es" alt="/marking"/>
            <ServiceSection title="Marcado" lan="es">
                Este módulo incluye diferentes métodos para el marcado del material que se desarmará. Todos los materiales necesitan un marcado para habilitar un monitoreo individual durante el proceso de desarme. Además, algunos tipos de material necesitan un marcado forense o permanente (especial) para facilitar su rastreo. 
            </ServiceSection>
        <Footer/>
    </Fragment>
)