import React from "react";
import navbar from "../assets/images/navbar.jpg";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="navbar">
        <img
        src={navbar}
        className="navbar-icon"
        alt={navbar}>
        </img>
        <nav className="other-nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active2" : "nav__items__gral")} >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active2" : "nav__items__gral")} >
                        Contacto
                    </NavLink>
                    <NavLink
                        to="/certificate"
                        className={({ isActive }) => (isActive ? "active2" : "nav__items__gral")} >
                        Mis Certificados
                    </NavLink>
        </nav>
        </div>
    )
}

export default NavBar