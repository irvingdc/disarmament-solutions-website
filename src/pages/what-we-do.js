import React, { Fragment } from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Text from "../components/Text/Text";
import DoublePicture from "../components/DoublePicture/DoublePicture";
import classes from "./what-we-do.module.css"
import { dark_details, whatwedo, alloptions } from "../images";
import "../main.module.css"

export default () =>{
    let urls = [
        "/what-we-do/management",
        "/what-we-do/destruction",
        "/what-we-do/recycling",
        "/what-we-do/lifetime-assessment",
        "/what-we-do/storage",
        "/what-we-do/marking",
        "/what-we-do/record-keeping",
        "/what-we-do/transport",
        "/what-we-do/physical-security",
        "/what-we-do/safety-protection",
        "/pages/environmental-protection",
    ]
    return(
        <Fragment>
            <Nav lan="en" alt="/es/que-hacemos"/>
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
                <div>
                    <img src={ alloptions } alt="Services"/>
                    {
                        urls.map((url, index) => <Link to={ url } key={ index }/>)
                    }
                </div>
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
            <div className={ classes.styledText }>
                <h3>For example, our associated suppliers deliver:</h3>
                <ul>
                    <li>- Mobile destruction facilities with first-rate safety and environmental considerations</li>
                    <li>- Disassembly lines for the recycling of arms and ammunition</li>
                    <li>- Customised and secure record-keeping systems</li>
                    <li>- Indelible marking systems</li>
                    <li>- Risk management for upcoming or ongoing disarmament projects</li>
                    <li>- High-security transport and storage solutions</li>
                    <li>- Lifetime assessment training for obsolete ammunition</li>
                </ul>
            </div>
            <p className={ classes.grayTextBottom}>
                Customised processes, methods, routines, documentation, education and training are delivered with each product and service.
            </p>
            <div className={ classes.finalText }>
                <Text 
                    title="SCENARIOS"
                    subtitle="WHERE DIFFERENT DISARMAMENT CONCEPTS ARE NECESSARY"
                    styleChildren={{ maxWidth: "500px" }}
                >  
                    <p>
                        <strong>SEIZURES.</strong> When single weapons and smaller volumes of ammunition are seized, found or handed over to the police, customs, a security company or other law enforcement agency.
                        <br/>
                        <br/>
                        <strong>DDR PROCESSES.</strong> When several different weapons and ammunition are seized in conjunction with larger actions against armed groups.
                        <br/>
                        <br/>
                        <strong>DEMILITARISATION.</strong> After a national or regional decision to dispose of a complete weapon system or large batch of ammunition.
                    </p>
                </Text>
            </div>
            <Footer/>
        </Fragment>
    )
}