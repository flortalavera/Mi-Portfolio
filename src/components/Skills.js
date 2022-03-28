import React from "react";
import angular from '../assets/images/skills/angular.png';
import css from '../assets/images/skills/css.png';
import git from '../assets/images/skills/git.png';
import github from '../assets/images/skills/github.png';
import html from '../assets/images/skills/html.png';
import js from '../assets/images/skills/js.png';
import python from '../assets/images/skills/python.png';
import typescrip from '../assets/images/skills/typescript.png';

const Skills = () => {

        return (
            <section className="about container">
                <div className="about__text">
                    <h2 id="skills" className="subtitle">Mis Skills</h2>
                        <div className="lista_skills">
                            <ol>Javascript</ol>
                            <ol>Html</ol>
                            <ol>Css/Sass</ol>
                            <ol>Angular</ol>
                            <ol>Typescript</ol>
                            <ol>Git</ol>
                            <ol>GitHub</ol>
                            <ol>Python</ol>
                            
                        </div>
                </div>

                <div className="about__skills">
                    <img
                        src={js}
                        alt={js}
                        className="about__img"
                    />
                    <img
                        src={git}
                        alt={git}
                        className="about__img"
                    />
                    <img
                        src={angular}
                        alt={angular}
                        className="about__img"
                    />
                    <img
                        src={css}
                        alt={css}
                        className="about__img"
                    />
                    <img
                        src={html}
                        alt={html}
                        className="about__img"
                    />
                    <img
                        src={github}
                        alt={github}
                        className="about__img"
                    />
                    <img
                        src={python}
                        alt={python}
                        className="about__img"
                    />
                    <img
                        src={typescrip}
                        alt={typescrip}
                        className="about__img"
                    />
                </div>
            </section>

        )

    }


export default Skills