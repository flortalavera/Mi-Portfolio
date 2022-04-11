import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import FooterElement from './Atoms/FooterElement';

export default function Footer(){
    return(
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
                        <FooterElement link={"https://www.linkedin.com/in/flor-talavera/"} Icon={()=><FontAwesomeIcon icon={faLinkedin} className="footer__icon"/>}/>
                        <FooterElement link={"https://github.com/flortalavera"} Icon={()=><FontAwesomeIcon icon={faGithub} className="footer__icon"/>}/>
                        <FooterElement link={"http://wa.me/541131362662"} Icon={()=><FontAwesomeIcon icon={faWhatsapp} className="footer__icon"/>}/>
                    </div>
                </section>
                <p className="copy">&copy; Mi Portfolio en React by Flor Talavera </p>
            </div>
        </footer>
    );
}