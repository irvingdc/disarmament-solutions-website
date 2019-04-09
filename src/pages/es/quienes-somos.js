import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import DoublePicture from "../../components/DoublePicture/DoublePicture";
import Text from "../../components/Text/Text";
import classes from "../who-we-are.module.css";
import "../../main.module.css";
import {
  dark_details,
  background_dark,
  field,
  whoweare1,
  whoweare2,
  whoweare3
} from "../../images";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      alt="/who-we-are"
      title="Disarmament Solutions | Que Hacemos"
      canonical="https://www.disarmamentsolutions.com/es/quienes-somos"
      description="Disarmament Solutions diseña y entrega conceptos comprensivos de desarme de armas de fuego y municiones."
    />
    <DoublePicture img1={background_dark} img2={field} />
    <Text title="ACERCA DE NOSOTROS" subtitle="UNA INICIATIVA SUECA" double>
      <p>
        <i>
          “Estamos viviendo tiempos peligrosos. Los conflictos prolongados están
          causando un sufrimiento humano inexpresable. Los grupos armados están
          proliferando, equipados con una basta colección de armas de fuego. La
          competencia y gasto en armamento militar a nivel mundial está
          incrementando, y las tensiones de la Guerra Fría han regresado a un
          mundo que se ha vuelto mucho más complejo. […] Esta nueva realidad
          exige que el desarme y la no proliferación sean el centro de trabajo
          de las Naciones Unidas. Este es el fondo de mi agenda para el
          desarme.”
        </i>
        <br />
        <br />
        Secretario General de la ONU António Guterres
        <br />
        24 de mayo de 2018
      </p>
      <p>
        <b>Disarmament Solutions</b> diseña y entrega conceptos comprensivos de
        desarme de armas de fuego y municiones, lo que significa que nos
        aseguramos de que el proceso de desarme sea llevado de manera correcta.
        Una característica única de nuestro concepto es que tenemos acceso a
        todos los componentes necesarios para un proceso de desarme seguro,
        comprensible y eficaz.   <br />
        Colaboramos con un número de empresas suecas que, con su amplia
        experiencia y pericia técnica, pueden contribuir a la necesidad global
        de desarme convencional de armas de fuego y municiones. Juntos formamos
        el centro de actividad para una nueva y sólida área de exportación sueca
        con el valor añadido de una política de seguridad con un enfoque
        humanitario.
      </p>
    </Text>
    <div className={classes.triplePicture}>
      <img alt="Who we are" src={whoweare1} />
      <img alt="Who we are" src={whoweare2} />
      <img alt="Who we are" src={whoweare3} />
    </div>
    <p className={classes.imageLabel}>
      Nuestros conceptos son diseñados para cumplir con los puntos establecidos
      por las Directrices Técnicas Internacionales sobre Municiones (IATG por
      sus siglas en inglés) y los Estándares Internacionales para el Control de
      Armas Pequeñas (ISACS).
    </p>
    <Text
      title="¿POR QUÉ?"
      subtitle="MÁS DE UN BILLÓN DE ARMAS DE FUEGO EN CIRCULACIÓN"
      double
    >
      <p>
        <b>La amplia</b> disponibilidad de armas de fuego, municiones y
        explosivos se han vuelto un problema global que previene un desarrollo
        sustentable para el mundo. Los riesgos son multifacéticos, abarcando una
        combinación de amenazas a largo plazo para la protección, seguridad y
        ambiente. El riesgo de seguridad asociado con el hecho de que el
        envejecimiento de explosivos provoca que sean menos estables y causa
        explosiones imprevistas que incrementan el riesgo de accidentes severos
        durante su manejo. Los riesgos de seguridad son que las armas de fuego y
        explosivos pueden caer en manos equivocadas y ser utilizadas para
        propósitos terroristas o criminales. La proliferación de personajes
        vinculados al terrorismo, crimen organizado y tráfico ilegal de drogas
        es un problema de seguridad global. Las armas de fuego, municiones y
        explosivos contienen sustancias tóxicas y metales pesados. La
        destrucción a través de incendio o detonación al aire abierto conlleva
        daños irreversibles al aire, agua y tierra.
      </p>
      <p>
        <b>Las acciones</b> seguidas para el propósito del desarme usualmente
        están incompletas, carentes de uno o más componentes de alta
        importancia. Además, el desarme suele abordarse desde una perspectiva
        nacional, con una coordinación ineficaz entre diversos actores. Estos
        defectos conllevan a soluciones inferiores y consecuencias financieras
        significativas. Suecia es líder mundial en varias áreas claves
        relacionadas con el desarme, sin un actor que coordine esta experiencia.
        Disarmament Solutions es ahora ese actor.
      </p>
    </Text>
    <div className={classes.white}>
      <img
        src={dark_details}
        className={classes.darkDetails}
        alt="Who we are"
      />
    </div>
    <Footer />
  </Fragment>
);
