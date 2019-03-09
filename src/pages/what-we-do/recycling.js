import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en" alt="/es/reciclaje"/>
            <ServiceSection title="Recycling" lan="en">
            The recycling module can be a separate solution for turning weapons and ammunition to parts that can be recycled. In addition, the module includes the recycling of the waste generated from other modules of the disarmament concept.
            </ServiceSection>
        <Footer/>
    </Fragment>
)