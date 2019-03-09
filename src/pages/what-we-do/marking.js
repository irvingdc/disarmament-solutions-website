import React, { Fragment } from "react"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export default () =>(
    <Fragment>
        <Nav lan="en"/>
            <ServiceSection title="Marking">
            The marking module includes different methods for the marking of material that is to be disarmed. All material needs a marking to enable individual monitoring throughout the disarmament process. Furthermore, some material might need forensic or permanent marking to facilitate tracing.
            </ServiceSection>
        <Footer/>
    </Fragment>
)