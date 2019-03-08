import React from "react"
import classes from "./NavDropdown.module.css"
import { Link } from "gatsby";

export default ({ title, options, url }) =>(
    <div className={ classes.container }>
        <Link to={ url }>{ title }</Link>
        <div>
            {
                options.map((it, index) => <Link to={ it.url } key={ index }>{ it.title }</Link>)
            }
        </div>
    </div>
)