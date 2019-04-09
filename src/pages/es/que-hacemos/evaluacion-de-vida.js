import React, { Fragment } from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      alt="/what-we-do/lifetime-assessment"
      title="Disarmament Solutions | Que Hacemos - Evaluaciones de vida"
      canonical="https://www.disarmamentsolutions.com/es/que-hacemos/evaluacion-de-vida"
      description="Este módulo incluye diferentes soluciones para determinar el estatus y condición del material que se desarmará."
    />
    <ServiceSection title="Evaluaciones de vida" lan="es">
      Este módulo incluye diferentes soluciones para determinar el estatus y
      condición del material que se desarmará así como los puntos críticos
      necesarios para el diseño de procesos seguros. Para materiales que
      contienen explosivos: la vida restante también es evaluada para determinar
      cuanto tiempo puede permanecer en resguardo sin volverse inestable.
    </ServiceSection>
    <Footer />
  </Fragment>
);
