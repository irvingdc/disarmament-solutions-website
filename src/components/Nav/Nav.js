import React, { Component } from "react"
import { Link } from "gatsby"
import classes from "./Nav.module.css"
import NavDropdown from "../NavDropdown/NavDropdown"
import { logo_dark, menu, close } from "../../images"

class Nav extends Component {
    
    state = {
        open: false
    }

    urls = {
        en: [
            {
                title: "HOME",
                url: "/"
            },
            {
                title: "WHO WE ARE",
                url: "who-we-are",
                options: [
                    {
                        title: "Protective Security and Planning",
                        url: "/services/protective-security-and-planning"
                    },
                    {
                        title: "Electricity and Security Enginering",
                        url: "/services/electricity-and-security-engineering"
                    },
                    {
                        title: "Project Functions",
                        url: "/services/project-functions"
                    },
                    {
                        title: "Service and Maintenance",
                        url: "/services/service-and-maintenance"
                    },
                ]
            },
            {
                title: "WHAT WE DO",
                url: "what-we-do"
            },
            {
                title: "CONTACT",
                url: "/contact"
            },
        ]
    }

    openMenu = () => {
        this.setState({open: true})
    }

    closeMenu = () => {
        this.setState({open: false})
    }

    render(){
        let lan = this.urls[this.props.lan]
        return (
            <div className={ [classes.container, (this.state.open ? classes.open : "")].join(" ") }>
                <Link to="/" className={ classes.img }>
                    <img src={ logo_dark } alt="Logo" title="Logo" className={ classes.logo }/>
                </Link>
                <div className={ classes.menu }>
                    {
                        lan.map((it, index) => it.options 
                            ? <NavDropdown { ...it } key={ index }/> 
                            : <Link activeClassName={ classes.active } to={ it.url } key={ index }>{ it.title }</Link> 
                        )
                    }
                </div>
                <img src={ close } alt="close" className={ classes.close } onClick={ this.closeMenu }/>
                <img src={ menu } alt="close" className={ classes.menuButton } onClick={ this.openMenu }/>
            </div>
        )
    }
}
export default Nav