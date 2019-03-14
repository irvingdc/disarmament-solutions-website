import React, { Fragment } from "react"
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import DoublePicture from "../components/DoublePicture/DoublePicture";
import Text from "../components/Text/Text";
import classes from "./who-we-are.module.css"
import "../main.module.css"
import { dark_details, background_dark, field, whoweare1, whoweare2, whoweare3 } from "../images";

export default () =>(
    <Fragment>
        <Nav lan="en" alt="/es/quienes-somos"></Nav>/>
        <DoublePicture img1={ background_dark } img2={ field }/>
        <Text 
            title="ABOUT US"
            subtitle="A SWEDISH INITIATIVE"
            double
        >
            <p>
                <i>“We are living in dangerous times. Protracted conflicts are causing unspeakable human suffering. 
                    Armed groups are proliferating, equipped with a vast array of weapons. 
                    Global military spending and competition in arms are increasing, and the tensions of the Cold War have returned 
                    to a world that has grown more complex. […] 
                    This new reality demands that disarmament and non-proliferation are put at the centre of t
                    he work of the United Nations. This is the backdrop for my agenda for disarmament.”</i>
                <br/>
                <br/>
                    UN Secretary General António Guterres
                <br/>
                24 May 2018
            </p>
            <p>
                <b>Disarmament Solutions</b> designs and delivers comprehensive concepts for the disarmament of conventional 
                arms and ammunition, which means that we ensure that the process of taking arms and ammunition out of service 
                is performed correctly. A unique feature of our concept is that we have access to all the components needed for a safe, 
                secure and environmentally-friendly disarmament process. 
                <br/>
                We collaborate with a number of Swedish companies which, with their broad experience and technical expertise, 
                can contribute to the overall global need for the disarmament of conventional arms and ammunition. 
                Together, we form a hub for a new, strong, Swedish export area with the added value of a humanitarian and 
                security policy approach.
            </p>
        </Text>
        <div className={ classes.triplePicture }>
            <img alt="Who we are" src={ whoweare1 }/>
            <img alt="Who we are" src={ whoweare2 }/>
            <img alt="Who we are" src={ whoweare3 }/>
        </div>
        <p className={ classes.imageLabel }>
            Our concepts are designed to meet the guidelines set out in the UN International Ammunition Technical Guidelines (IATG) and International Small Arms Control Standards (ISACS).
        </p>
        <Text 
            title="WHY?"
            subtitle="OVER 1 BILLION ARMS IN CIRCULATION            "
            double
        >
            <p>
                <b>The wide</b> availability of weapons, ammunition and explosives is a global problem that prevents sustainable development 
                for humans and countries all over the world. The risks are multifaceted, comprising a combination of significant safety, 
                security and long-term environmental threats. The safety risk is related to the fact that ageing explosives become less 
                stable and may cause uncontrolled explosions and increase the risk of severe accidents during handling. The security risk 
                is related to weapons and explosives possibly falling into the wrong hands and being used for antagonistic purposes. 
                Proliferation to actors with links to terrorism, organised crime and drug trafficking is a global security issue. Weapons, 
                ammunition and explosives contain both toxic substances and heavy metals. Destruction by open burning or detonation will 
                lead to irreversible consequences for the surrounding environment.
            </p>
            <p>
                <b>Actions</b> taken for disarmament purposes are usually incomplete, lacking one or more vital component. In addition, 
                the matter is seldom approached from a national perspective and coordination between participating actors is often inadequate. 
                These shortcomings lead to sub-optimised solutions and significant financial consequences. Sweden has world-leading expertise 
                within several key areas related to disarmament but there has been no single actor coordinating this expertise. 
                Now, Disarmament Solutions is that actor.
            </p>
        </Text>
        <div className={ classes.white }>
            <img src={ dark_details } className={ classes.darkDetails } alt="Who we are"/>
        </div>
        <Footer/>
    </Fragment>
)