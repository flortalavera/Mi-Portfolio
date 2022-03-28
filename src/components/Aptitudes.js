import React from "react";
import study from '../assets/images/study.png'

const Aptitudes = () => {

        return (

            <section className="about container">
            <figure className="about__picture">
                <img
                src={study}
                alt={study}
                aling="left"
                className="about__picture"
                />
            </figure>
            <div className="about__text">
                <h2 id="#skills" className="subtitle">Otras aptitudes</h2>
                <p className="about__paragraph">
                    Actualmente estoy tomando clases particulares de inglés en 
                     <a
                    href="http://ukidiomas.com.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    > @ukingles
                    </a> .
                    Mi nivel actual es Pre-Intermediate.
                    Sé lo importante de éste idioma tanto en el ámbito laboral, como para fortalecer la autoconfianza,
                    desarrollo y desempeño.</p>
                <p class="about__paragraph">
                    También estoy incorporando otras tecnologías como: MySQL, MongoDB, React y Sass.
                </p>
              </div>

           </section>
        )
    }


export default Aptitudes;