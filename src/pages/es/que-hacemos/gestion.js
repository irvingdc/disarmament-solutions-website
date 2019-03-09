import React, { Fragment } from "react"
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css"
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="es" alt="/management"/>
            <ServiceSection title="Gestión" lan="es">
                Este módulo es el principal dentro del concepto de desarme e incluye toda gestión necesaria para el diseño, desarrollo e implementación del concepto. El módulo comienza con la necesidad de un análisis inicial para después formar parte integral del proyecto ya que cada fase se desarrolla de manera conjunta con el socio implementador. A través del proceso, los riesgos de protección, seguridad y ecológicos son tomados en cuenta. 
            </ServiceSection>
        <Footer/>
    </Fragment>
)