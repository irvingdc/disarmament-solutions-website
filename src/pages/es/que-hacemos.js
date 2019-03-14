import React, { Fragment } from "react"
import { Link } from "gatsby"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Text from "../../components/Text/Text";
import DoublePicture from "../../components/DoublePicture/DoublePicture";
import classes from "../what-we-do.module.css"
import { background_dark, whatwedo, alloptions_es } from "../../images";
import "../../main.module.css"

export default () =>{
    let urls = [
        "/es/que-hacemos/gestion",
        "/es/que-hacemos/destruccion",
        "/es/que-hacemos/reciclaje",
        "/es/que-hacemos/evaluacion-de-vida",
        "/es/que-hacemos/almacenamiento",
        "/es/que-hacemos/marcado",
        "/es/que-hacemos/mantenimiento-de-registros",
        "/es/que-hacemos/transporte",
        "/es/que-hacemos/seguridad-fisica",
        "/es/que-hacemos/proteccion",
        "/es/que-hacemos/proteccion-al-ambiente",
    ]
    return(
        <Fragment>
            <Nav lan="es" alt="/what-we-do"/>
            <DoublePicture img1={ background_dark } img2={ whatwedo }/>
            <Text 
                title="EL CONCEPTO DE DESARME"
                subtitle="PARA LA FASE FINAL DEL CICLO DE VIDA"
                double
            >
                <p>
                    <b>El proceso de desarme</b> es aquel en el que las armas de fuego y municiones son desmanteladas. Este proceso incluye una serie de pasos que van desde la recolección, transportación y almacenamiento hasta la destrucción y reciclaje. El desarme es la fase final del ciclo de vida de las armas de fuego y municiones, y es precedido por las fases de planeación, procuración y gestión de reservas.
                </p>
                <p>
                    <b>Disarmament Solutions</b> provee de un concepto comprensivo para el manejo total del proceso de desarme. Esto significa que tenemos los productos y servicios para cada uno de los pasos del proceso hasta el grado de poder concluir con la desmantelación de las armas de fuego y municiones. Nuestro concepto de desarme siempre refleja una firme atención en la gestión del riesgo, el cual asegura un proceso protegido, inequívoco y ecológico – de inicio a fin. 
                </p>
            </Text>
            <p className={ classes.grayTextTop }>
                Tenemos un valor añadido en nuestro concepto de desarme gracias a que varios de nuestros componentes pueden ser aplicados durante el ciclo de vida de las armas de fuego y municiones.
                <br/>
                <br/>
                Nuestro concepto de desarme está basado en <strong>11 modulos:</strong>
            </p>
            <div className={ classes.options }>
                <div>
                    <img src={ alloptions_es } alt="Services"/>
                    {
                        urls.map((url, index) => <Link to={ url } key={ index }/>)
                    }
                </div>
            </div>
            <Text
                title="CONSULTORÍA PROFESIONAL Y LIDER MUNDIAL EN TECNOLOGÍA"
                subtitle="SIEMPRE DISEÑADO Y ENTREGADO CON UN ENFOQUE BASADO EN RIESGO"
                styleSpan={{ marginBottom: "0px" }}
                styleH={{ maxWidth: "unset" }}
            />
            <p className={ classes.whiteText }>
            Cada módulo de nuestro concepto desarme cuenta con productos y servicios que están basados en tres ejes de riesgo: protección, seguridad y ambiente. 
            </p>
            <div className={ classes.styledText }>
                <h3>Por ejemplo, nuestro proveedor entrega:</h3>
                <ul>
                    <li>- nstalaciones móviles de destrucción con consideraciones de seguridad y protección ambiental de primera clase.  </li>
                    <li>- Líneas de desmantelación para el reciclaje de armas de fuego y municiones. </li>
                    <li>- Sistemas personalizados y protegidos de mantenimiento de registros.</li>
                    <li>- Sistemas indelebles de marcado. </li>
                    <li>- Gestión de riesgo para proyectos de desarme futuros o en curso. </li>
                    <li>- Soluciones de almacenamiento y transporte de alta seguridad. </li>
                    <li>- Entrenamiento de evaluación de vida para municiones obsoletas. </li>
                </ul>
            </div>
            <p className={ classes.grayTextBottom}>
                Procesos, métodos, rutinas, documentación, educación y entrenamientos personalizados son entregados en cada producto y servicio.
            </p>
            <div className={ classes.finalText }>
                <Text 
                    title="ESCENARIOS"
                    subtitle="DONDE DIFERENTES CONCEPTOS DE DESARME SON NECESARIOS"
                    styleChildren={{ maxWidth: "500px" }}
                >  
                    <p>
                        <strong>EMBARGOS.</strong> Cuando armas individuales y volúmenes pequeños son embargados, encontrados o entregados a la policía, aduana, empresa de seguridad o cualquier otra agencia gubernamental. 
                        <br/>
                        <br/>
                        <strong>PROCESO DDR.</strong> Cuando varias armas de fuego y municiones diferentes son embargadas en conjunción con acciones mayores contra grupos armados. 
                        <br/>
                        <br/>
                        <strong>DESMILITARIZACIÓN.</strong> Después a una decision regional o nacional de disponer de un sistema completo de armas de fuego o un lote amplio de municiones. 
                    </p>
                </Text>
            </div>
            <Footer/>
        </Fragment>
    )
}