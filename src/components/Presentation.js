import React from "react";
import Flor from '../assets/images/Flor.png';
import { Link } from "react-router-dom";

const Presentation = () => {

    return (
        <section className="presentation container">
            <img
            src={Flor}
            className="presentation__picture"
            alt={Flor}
            />
            <h2 id="about-me" className="subtitle">
                Mi nombre es Florencia Talavera
            </h2>
            <div className="presentation__copy">
                Soy muy responsable, honesta, respetuosa y organizada. Tengo una excelente comunicación interpersonal,
                sé transmitir mis ideas con claridad y ejecutarlas de manera adecuada.
                Soy capaz de desarrollar varias tareas a la vez de forma eficaz, así como también contabilizar los
                    proyectos
                    bajo estimación de plazos.
                Me encanta cooperar en equipo, pero también poseo una mentalidad enfocada a desarrollar
                el trabajo de forma autónoma.
                Tengo muchísimo entusiasmo por aprender y desarrollar mis habilidades en profundidad
                    dentro del campo de la Programación, realmente encontré en ésta área una motivación
                    para formarme profesionalmente y estar a la altura del mercado.
            </div>
            <Link className="presentation__cta" to="/contact">Contactame ahora</Link>
        </section>
    )
}

export default Presentation