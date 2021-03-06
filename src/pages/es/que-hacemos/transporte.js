import React, { Fragment } from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      alt="/what-we-do/transport"
      title="Disarmament Solutions | Que Hacemos - Transporte"
      canonical="https://www.disarmamentsolutions.com/es/que-hacemos/transporte"
      description="Este módulo incluye soluciones de movilidad basadas en el perfil de riesgo total."
    />
    <ServiceSection title="Transporte" lan="es">
      Este módulo incluye soluciones de movilidad basadas en el perfil de riesgo
      total (riesgos de protección, seguridad y ambiente) asociado con el
      material que se transportará. Además, estas soluciones de movilidad son
      adaptadas a los tipos y volúmenes de material a transportar.
    </ServiceSection>
    <Footer />
  </Fragment>
);
