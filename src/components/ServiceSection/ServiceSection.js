import React, { Fragment } from "react"
import { Link } from "gatsby"
import classes from "./ServiceSection.module.css"
import { background_dark } from "../../images";

export default ({ title, children }) =>(
    <Fragment>
        <div 
            className={ classes.banner }
            style={{
                background: `url(${ background_dark }) center center / cover no-repeat` ,
            }}
        >
            <div className={ classes.bannerContainer }>
                <p>Module Description</p>
                <h1>{ title }</h1>
            </div>
        </div>
        <div className={ classes.container }>
            <div className={ classes.content }>
                <p>{ children }</p>
                <p>
                    <Link to="/what-we-do">
                        <button>BACK</button>
                    </Link>
                </p>
            </div>
        </div>
    </Fragment>
)