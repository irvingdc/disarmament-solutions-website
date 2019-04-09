import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () => (
  <Fragment>
    <Nav
      lan="en"
      alt="/es/que-hacemos/almacenamiento"
      title="Disarmament Solutions | What We Do - Storage"
      canonical="https://www.disarmamentsolutions.com/what-we-do/storage"
      description="The storage module includes different solutions for storing weapons and ammunition in a correct, secure and cost-efficient way. "
    />
    <ServiceSection title="Storage" lan="en">
      The storage module includes different solutions for storing weapons and
      ammunition in a correct, secure and cost-efficient way. The storage
      solution is based on the total risk profile (safety, security and
      environmental risks) associated with the actual material. In addition, the
      storage solutions need to be adapted to the kind of material to be stored,
      its volume, status and condition.
    </ServiceSection>
    <Footer />
  </Fragment>
);
