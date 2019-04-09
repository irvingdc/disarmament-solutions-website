import React, { Fragment } from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      alt="/what-we-do/safety-protection"
      title="Disarmament Solutions | Que Hacemos - Protección"
      canonical="https://www.disarmamentsolutions.com/es/que-hacemos/proteccion"
      description="Este módulo incluye productos y servicios requeridos para contrarrestar accidentes."
    />
    <ServiceSection title="Protección" lan="es">
      Este módulo incluye productos y servicios requeridos para contrarrestar
      accidentes, manejar las consecuencias de posibles accidentes y asegurar un
      espacio de trabajo protegido para el personal. La solución total para la
      protección está diseñada tomando como base el perfil de riesgo definido
      para riesgos de protección.
    </ServiceSection>
    <Footer />
  </Fragment>
);
