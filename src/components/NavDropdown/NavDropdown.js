import React, { Component } from "react"
import classes from "./NavDropdown.module.css"
import { Link } from "gatsby";

export default class NavDropdown extends Component{

    state = {
        open: false
    }

    render(){
        let { title, options, url } = this.props
        return (
            <div className={ classes.container }>
                <Link to={ url } activeClassName={ classes.active } className={ classes.sub }>
                    { title }
                    <span className={ classes.drop }></span>
                </Link>
                <div className={ classes.details }>
                    {
                        options.map((it, index) => <Link to={ it.url } key={ index } activeClassName={ classes.active }>{ it.title }</Link>)
                    }
                </div>
            </div>
        )
    }
}