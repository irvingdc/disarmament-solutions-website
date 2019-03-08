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
            },
            {
                title: "WHAT WE DO",
                url: "what-we-do",
                options: [
                    {
                        title: "Environmental protection",
                        url: "/pages/environmenta-protection"
                    },
                    {
                        title: "Safety protection",
                        url: "/what-we-do/safety-protection"
                    },
                    {
                        title: "Physical security",
                        url: "/what-we-do/physical-security"
                    },
                    {
                        title: "Transport",
                        url: "/what-we-do/transport"
                    },
                    {
                        title: "Record-keeping",
                        url: "/what-we-do/record-keeping"
                    },
                    {
                        title: "Marking",
                        url: "/what-we-do/marking"
                    },
                    {
                        title: "Storage",
                        url: "/what-we-do/storage"
                    },
                    {
                        title: "Lifetime assessment",
                        url: "/what-we-do/lifetime-assessment"
                    },
                    {
                        title: "Destruction",
                        url: "/what-we-do/destruction"
                    },
                    {
                        title: "Management",
                        url: "/what-we-do/management"
                    },
                ]
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
                <div className={ classes.content }>
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
            </div>
        )
    }
}
export default Nav