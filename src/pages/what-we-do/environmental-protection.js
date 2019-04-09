import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () => (
  <Fragment>
    <Nav
      lan="en"
      alt="/es/que-hacemos/proteccion-al-ambiente"
      title="Disarmament Solutions | What We Do - Environmental Protection"
      canonical="https://www.disarmamentsolutions.com/what-we-do/environmental-protection/"
      description="The environmental protection module includes the products and services required to ensure that the disarmament concept generates minimal impact on the environment."
    />
    <ServiceSection title="Environmental protection" lan="en">
      The environmental protection module includes the products and services
      required to ensure that the disarmament concept generates minimal impact
      on the environment. All parts of the environmental protection module
      fulfil applicable laws and regulations. The total solution for
      environmental protection is designed on the basis of the defined risk
      profile regarding environmental risks.
    </ServiceSection>
    <Footer />
  </Fragment>
);
