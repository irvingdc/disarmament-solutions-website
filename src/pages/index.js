import React, { Fragment } from "react"
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css"
import Gallery from "../components/Gallery/Gallery";
import Text from "../components/Text/Text";
import classes from "./index.module.css"
import { details } from "../images";

export default () =>(
    <Fragment>
        <Nav lan="en" alt="/es"/>
        <Gallery/>
        <Text 
            title="DISARMAMENT OF CONVENTIONAL ARMS AND AMMUNITION"
            subtitle="BY DISARMAMENT SOLUTIONS"
            double
        >
            <p>
                <b>Disarmament Solutions</b> designs and delivers comprehensive concepts for the disarmament of conventional arms and ammunition. The risks associated with arms and ammunition are multifaceted and relate to safety, security and the environment. These risks must be handled collectively when implementing disarmament projects so as to avoid sub-optimised solutions and unwanted consequences.
            </p>
            <p>
                <b>A unique feature</b> of Disarmament Solutions is that the company has access to all the components needed for a safe, secure and environmentally-friendly disarmament process. We collaborate with a number of companies that have technical expertise within destruction, recycling, lifetime assessment, storage, marking, record-keeping, transport, physical security, safety protection and environmental protection. By combining expertise from all these different fields, we are able to coordinate and deliver a comprehensive disarmament process.
            </p>
        </Text>
        <div className={ classes.details }>
            <div>
                <h3>SAFETY</h3>
                <p>The safety risk is related to the fact that ageing explosives become less stable and may cause unplanned explosions which increases the risk of severe accidents during handling. Unplanned explosions have occurred in 100 countries over the last 35 years.</p>
                <img src={ details } alt="details"/>
            </div>
            <div>
                <h3>SECURITY</h3>
                <p>There are over 1 billion small arms in the world today. The security risk is that weapons and explosives may fall into the wrong hands and be used for antagonistic purposes by terrorists or criminal groups.</p>
                <img src={ details } alt="details"/>
            </div>
            <div>
                <h3>ENVIRONMENT</h3>
                <p>Weapons, ammunition and explosives contain both toxic substances and heavy metals. Destruction by open burning or open detonation will lead to irreversible consequences for air, ground water and soil.</p>
                <img src={ details } alt="details"/>
            </div>
        </div>
        <Footer/>
    </Fragment>
)