import React, { Fragment } from "react"
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Text from "../components/Text/Text";
import DoublePicture from "../components/DoublePicture/DoublePicture";
import classes from "./what-we-do.module.css"
import { dark_details, whatwedo } from "../images";
import "../main.module.css"

export default () =>(
    <Fragment>
        <Nav lan="en"/>
        <DoublePicture img1={ dark_details } img2={ whatwedo }/>
        <Text 
            title="THE DISARMAMENT CONCEPT"
            subtitle="FOR THE FINAL LIFE CYCLE PHASE"
            double
        >
            <p>
                <b>Disarmament</b> is a process whereby weapons and ammunition are taken out of service. The process includes a number of steps from collection, transportation and storage to destruction and recycling. Disarmament is the final phase of the life cycle of weapons and ammunition and is preceded by the phases of planning, procurement and stockpile management.
            </p>
            <p>
                <b>Disarmament Solutions</b> provides a comprehensive concept for the handling of the entire disarmament process. This means we have products and services for each step of the process right up to the point when the weapons and ammunition are finally taken out of service. Our disarmament concept always reflects a strong focus on risk management which ensures a secure, safe and environmentally-friendly process – from start to end.
            </p>
        </Text>
        <p className={ classes.grayTextTop }>
            There is an added value in our concept for disarmament since several components can be applied throughout the life cycle of the weapons and ammunition.
            <br/>
            <br/>
            Our disarmament concept is based on <strong>11 modules:</strong>
        </p>
        <div className={ classes.options }>

        </div>
        <Text
            title="PROFESSIONAL CONSULTANCY & WORLDLEADING TECHNOLOGY"
            subtitle="ALWAYS DESIGNED AND DELIVERED WITH A RISK-BASED APPROACH "
            styleSpan={{ marginBottom: "0px" }}
            styleH={{ maxWidth: "unset" }}
        />
        <p className={ classes.whiteText }>
            Each module in our disarmament concept is made up of products and services that are based on three dimensions of risks: safety, security and environmental.
        </p>
        <Footer/>
    </Fragment>
)