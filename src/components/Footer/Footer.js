import React from "react"
import classes from "./Footer.module.css"
import { logo_light } from "../../images";
import { Link } from "gatsby";

export default () =>{
    return (
        <div className={ classes.container }>
            <div className={ classes.content }>
                <div className={ classes.text }>
                    <p>Comprehensive disarmament concepts from Sweden.</p>
                    <p>Contact us <Link to="/contact">here</Link></p>
                </div>
                <img src={ logo_light } alt="Logo"/>
            </div>
            <p>© Copyright. Disarmament Solutions AB</p>
        </div>
    )
}
    