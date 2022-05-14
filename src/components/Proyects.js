import React from "react";
import empleados from '../assets/images/empleados.png';
import presupuesto from '../assets/images/presupuesto.png';
import weather from '../assets/images/weather.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'

class Proyects extends React.Component{

    render(){
        return(
            <section className="projects">
            <div className="container">
                <h2 id="proyectos" className="subtitle">Mis proyectos</h2>
                <div className="projects__grid">
                    <article className="projects__item">
                        <img
                        src={ presupuesto }
                        alt={ presupuesto }
                        className="projects__img"
                        />
                        <div>
                            <a
                            className="projects__hover"
                            href="https://cocky-ride-efe7ac.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >App-Presupuesto-Angular
                            </a>
                            <FontAwesomeIcon icon={faLightbulb}/>
                        </div>
                    </article>

                    <article className="projects__item">
                        <img
                        src={ weather }
                        alt={ weather }
                        className="projects__img"
                        />
                        <div>
                            <a
                            className="projects__hover"
                            href="https://flor-talavera-weather.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            >App Weather JS
                            </a>
                            <FontAwesomeIcon icon={faLightbulb}/>
                        </div>
                    </article>

                    <article className="projects__item">
                        <img
                        src={ empleados }
                        alt={ empleados }
                        className="projects__img"
                        />
                        <div>
                            <a
                            className="projects__hover"
                            href="https://flor-talavera-empleados.netlify.app/list-empleados"
                            target="_blank"
                            rel="noopener noreferrer"
                            >App Empleados-Angular
                            </a>
                            <FontAwesomeIcon icon={faLightbulb}/>
                        </div>
                    </article>
                </div>
            </div>

        </section>
        );
    }
}

export default Proyects;