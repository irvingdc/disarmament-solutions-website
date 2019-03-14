import React, { Fragment } from "react"
import { Link } from "gatsby"
import classes from "./ServiceSection.module.css"
import { background_dark } from "../../images";

export default ({ title, children, lan }) =>(
    <Fragment>
        <div 
            className={ classes.banner }
            style={{
                background: `url(${ background_dark }) center center / cover no-repeat` ,
            }}
        >
            <div className={ classes.bannerContainer }>
                <p>{ lan === "en" ? "Module description" : "Descripción del modulo" }</p>
                <h1>{ title }</h1>
            </div>
        </div>
        <div className={ classes.container }>
            <div className={ classes.content }>
                <p>{ children }</p>
                <p>
                    <Link to={ lan==="en" ? "/what-we-do" : "/es/que-hacemos" }>
                        <button>{ lan === "en" ? "BACK" : "ATRÁS" }</button>
                    </Link>
                </p>
            </div>
        </div>
    </Fragment>
)