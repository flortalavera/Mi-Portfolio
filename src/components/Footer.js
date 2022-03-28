import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{

    render(){
        return (
                
                <footer class="footer">
            <div class="container footer__grid">
            <nav class="nav nav--footer">
                <a class="nav__items nav__items--footer" href="#inicio">Inicio</a>
                <a class="nav__items nav__items--footer" href="#sobreMi">Sobre mi</a>
                <a class="nav__items nav__items--footer" href="#skills">Mis skills</a>
                <a class="nav__items nav__items--footer" href="#proyectos">Proyectos</a>
            </nav>

            <section className="footer__contact">
                <h3 className="footer__title">Contactame</h3>
                <div className="footer__icons">
                    <span className="footer__container-icons">
                        <a 
                        className="icons"
                        href="https://www.linkedin.com/in/florencia-talavera-1ba78a22a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><FontAwesomeIcon icon={faLinkedin} className="footer__icon"/>
                        </a>
                    </span>
                    <span className="footer__container-icons">
                        <a 
                        className="icons" 
                        href="https://github.com/flortalavera?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><FontAwesomeIcon icon={faGithub} className="footer__icon"/>
                        </a>
                    </span>
                    <span className="footer__container-icons">
                        <a className="icons"
                        href="http://wa.me/541131362662"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><FontAwesomeIcon icon={faWhatsapp} className="footer__icon"/>
                        </a>
                    </span>
                </div>
            </section>
            <p className="copy">&copy; Mi Portfolio en React by Flor Talavera </p>
        </div>
    </footer>
        );
    }
}

export default Footer;