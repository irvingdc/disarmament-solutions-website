import React from "react"
import classes from "./Text.module.css"

export default ({ title, subtitle, children, double, styleSpan, styleH }) =>(
    <div className={ classes.container }>
        <h2 style={ styleH }>{ title }</h2>
        <p>{ subtitle }</p>
        <span className={ classes.line } style={ styleSpan }></span>
        <div className={ [classes.content, (double ? classes.double : "")].join(" ") }>
            { children }
        </div>
    </div>
)