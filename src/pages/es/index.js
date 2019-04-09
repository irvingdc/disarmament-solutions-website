import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import Gallery from "../../components/Gallery/Gallery";
import Text from "../../components/Text/Text";
import classes from "../index.module.css";
import { details_es } from "../../images";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      alt="/"
      title="Disarmament Solutions | Inicio"
      canonical="https://www.disarmamentsolutions.com/es"
      description="Desarme de armas y municiones convencionales por disarmament solutions."
    />
    <Gallery lan="es" />
    <Text
      title="DESARME DE ARMAS Y MUNICIONES CONVENCIONALES"
      subtitle="POR DISARMAMENT SOLUTIONS"
      double
    >
      <p>
        <b>Disarmament Solutions</b> diseña y entrega conceptos comprensivos de
        desarme de armas de fuego y municiones convencionales. Los riesgos
        asociados a las armas de fuego y municiones son multifacéticos y se
        relacionan con la seguridad y el ambiente. Estos riesgos deben ser
        manejados colectiva e íntegramente cuando se implementa un proyecto de
        desarme para poder evitar soluciones inferiores con resultados
        inesperados.
      </p>
      <p>
        <b>Una característica única</b> de Disarmament Solutions es que la
        compañía tiene acceso a todos los componentes necesarios para un proceso
        de desarme seguro y ecológico. Colaboramos con compañías que cuentan con
        pericia técnica en destrucción, reciclaje, evaluaciones de vida,
        almacenamiento, marcado, mantenimiento de registros, transporte,
        seguridad física, protección y protección al medio ambiente. Al combinar
        esta experiencia de todos estos campos de especialidad, somos capaces de
        coordinar y entregar un proceso de desarme comprensible y eficaz.
      </p>
    </Text>
    <div className={classes.details}>
      <div>
        <h3>PROTECCIÓN</h3>
        <p>
          El riesgo de seguridad asociado con el hecho de que el envejecimiento
          de explosivos provoca que sean menos estables y causa explosiones
          imprevistas que incrementan el riesgo de accidentes severos durante su
          manejo. Las explosiones imprevistas han ocurrido en alrededor de 100
          países durante los últimos 35 años.
        </p>
        <img src={details_es} alt="details" />
      </div>
      <div>
        <h3>SEGURIDAD</h3>
        <p>
          Existen más de un billón de armas de fuego. Los riesgos de seguridad
          son que las armas de fuego y explosivos pueden caer en manos
          equivocadas y ser utilizadas para propósitos terroristas o criminales.
        </p>
        <img src={details_es} alt="details" />
      </div>
      <div>
        <h3>ENTORNO</h3>
        <p>
          Las armas de fuego, municiones y explosivos contienen sustancias
          tóxicas y metales pesados. La destrucción a través de incendio o
          detonación al aire abierto conlleva daños irreversibles al aire, agua
          y tierra.
        </p>
        <img src={details_es} alt="details" />
      </div>
    </div>
    <Footer />
  </Fragment>
);
