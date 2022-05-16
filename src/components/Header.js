import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header className="hero">
            <div className="container">
                <nav id="inicio" className="nav-header">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "nav__items nav__items--cta")} >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "nav__items nav__items--cta")} >
                        Contacto
                    </NavLink>
                    <NavLink
                        to="/certificate"
                        className={({ isActive }) => (isActive ? "active" : "nav__items nav__items--cta")} >
                        Mis Certificados
                    </NavLink>
                </nav>
                <section className="hero__container">
                    <div className="hero__texts">
                        <h1 className="hero__title">
                            Hola! Soy Florencia Talavera
                        </h1>
                        <h1 className="hero__title">[Front-End Developer]</h1>
                        <h2 className="hero__subtitle">
                            Transformando ideas a realidades
                        </h2>
                    </div>
                </section>
            </div>
            <div className="hero__wave"><svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
            </svg>
            </div>
        </header>
    )
}

export default Header;