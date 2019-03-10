import React, { Component } from "react"
import { Link } from "gatsby"
import classes from "./Nav.module.css"
import NavDropdown from "../NavDropdown/NavDropdown"
import { logo_dark, menu, close, uk, spain } from "../../images"

class Nav extends Component {
    
    state = {
        open: false
    }

    urls = {
        en: [
            {
                title: "Home",
                url: "/"
            },
            {
                title: "Who we are",
                url: "/who-we-are",
            },
            {
                title: "What we do",
                url: "/what-we-do",
                options: [
                    {
                        title: "Environmental protection",
                        url: "/what-we-do/environmental-protection"
                    },
                    {
                        title: "Safety protection",
                        url: "/what-we-do/safety-protection"
                    },
                    {
                        title: "Recycling",
                        url: "/what-we-do/recycling"
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
                title: "Contact",
                url: "/contact"
            },
        ],
        es: [
            {
                title: "Inicio",
                url: "/es"
            },
            {
                title: "¿Quiénes somos?",
                url: "/es/quienes-somos",
            },
            {
                title: "¿Que hacemos?",
                url: "/es/que-hacemos",
                options: [
                    {
                        title: "Protección al ambiente",
                        url: "/es/que-hacemos/proteccion-al-ambiente"
                    },
                    {
                        title: "Protección",
                        url: "/es/que-hacemos/proteccion"
                    },
                    {
                        title: "Reciclaje",
                        url: "/es/que-hacemos/reciclaje"
                    },
                    {
                        title: "Seguridad física",
                        url: "/es/que-hacemos/seguridad-fisica"
                    },
                    {
                        title: "Transporte",
                        url: "/es/que-hacemos/transporte"
                    },
                    {
                        title: "Mantenimiento de registros",
                        url: "/es/que-hacemos/mantenimiento-de-registros"
                    },
                    {
                        title: "Marcado",
                        url: "/es/que-hacemos/marcado"
                    },
                    {
                        title: "Almacenamiento",
                        url: "/es/que-hacemos/almacenamiento"
                    },
                    {
                        title: "Evaluación de vida",
                        url: "/es/que-hacemos/evaluacion-de-vida"
                    },
                    {
                        title: "Destrucción",
                        url: "/es/que-hacemos/destrucción"
                    },
                    {
                        title: "Gestión",
                        url: "/es/que-hacemos/gestion"
                    },
                ]
            },
            {
                title: "Contacto",
                url: "/es/contacto"
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
        let alt = this.props.alt || "/"
        return (
            <div className={ [classes.container, (this.state.open ? classes.open : "")].join(" ") }>
                <div className={ classes.content }>
                    <Link to={ lan[0].url } className={ classes.img }>
                        <img src={ logo_dark } alt="Logo" title="Logo" className={ classes.logo }/>
                    </Link>
                    <div className={ classes.menu }>
                        {
                            lan.map((it, index) => it.options 
                                ? <NavDropdown { ...it } key={ index }/> 
                                : <Link activeClassName={ classes.active } to={ it.url } key={ index }>{ it.title }</Link> 
                            )
                        }
                        <Link to={ alt } className={ classes.language }>
                            {
                                <img src={ this.props.lan === "es" ? uk : spain } alt="Flag" className={ classes.flag }/>
                            }
                        </Link>
                    </div>
                    <img src={ close } alt="close" className={ classes.close } onClick={ this.closeMenu }/>
                    <img src={ menu } alt="close" className={ classes.menuButton } onClick={ this.openMenu }/>
                </div>
            </div>
        )
    }
}
export default Nav