import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en" alt="/es/que-hacemos/seguridad-fisica"/>
            <ServiceSection title="Physical security" lan="en">
            The physical security module includes all forms of physical security required to maintain a certain security level during the entire disarmament process. The total security solution is designed on the basis of the defined risk profile regarding security risks.
            </ServiceSection>
        <Footer/>
    </Fragment>
)