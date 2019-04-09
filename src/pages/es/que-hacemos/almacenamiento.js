import React, { Fragment } from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";
import ServiceSection from "../../../components/ServiceSection/ServiceSection";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      alt="/what-we-do/storage"
      title="Disarmament Solutions | Que Hacemos - Almacenamiento"
      canonical="https://www.disarmamentsolutions.com/es/que-hacemos/almacenamiento"
      description="Este módulo incluye diferentes soluciones para almacenar armas de fuego y municiones de manera segura, eficiente y rentable."
    />
    <ServiceSection title="Almacenamiento" lan="es">
      Este módulo incluye diferentes soluciones para almacenar armas de fuego y
      municiones de manera segura, eficiente y rentable. El almacenamiento está
      basado en un perfil de riesgo total (riesgos de protección, seguridad y
      ambiente) asociado el material que se esté utilizando. Además, es
      necesario adaptar las soluciones de almacenamiento al tipo de material
      almacenado, su volumen, estatus y condición.
    </ServiceSection>
    <Footer />
  </Fragment>
);
