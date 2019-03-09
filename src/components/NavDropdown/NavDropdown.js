import React from "react"
import classes from "./NavDropdown.module.css"
import { Link } from "gatsby";

export default ({ title, options, url }) =>(
    <div className={ classes.container }>
        <Link to={ url } activeClassName={ classes.active }>{ title }</Link>
        <div className={ classes.details }>
            {
                options.map((it, index) => <Link to={ it.url } key={ index }>{ it.title }</Link>)
            }
        </div>
    </div>
)