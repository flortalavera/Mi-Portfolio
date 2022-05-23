import React from 'react';
import { motion } from 'framer-motion';

import NavBar from '../NavBar';
import Gmail from '../../assets/images/gmail.png';
import Whatsapp from '../../assets/images/whatsapp.png';
import CV from '../../assets/images/cv-pdf.png';

class Contact extends React.Component {

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    sugerenciaRef = React.createRef();

    state = {
        user: {}
    };

    recibirForm = (e) => {
        e.preventDefault();

        var user = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            sugerencia: this.sugerenciaRef.current.value
        }
        
        console.log(user);
    }

    render() {
        
        return (
            <><NavBar />
            <motion.section className='contact'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            >
                <div className='contact-form'>
                    <h2>Tu sugerencia me ayuda a mejorar</h2>
                    <form className='form'>
                        <div className='form-group'>
                            <label id='label-classic'>Nombre</label>
                            <input type='text' name='nombre'></input>
                        </div>

                        <div className='form-group'>
                            <label id='label-classic'>Apellido</label>
                            <input type='text' name='apellido'></input>
                        </div>

                        <div className='form-group'>
                            <label id='label-classic'>Sugerencias</label>
                            <textarea type='text' name='sugerencia'></textarea>
                        </div>
                        <input type='submit' value='Enviar' className='btn' id="btn-contact"></input>
                    </form>
                </div>
                <div className='others-contacts'>
                    <h2>Otros medios de contacto</h2>
                    <div className='my-contact'>
                    <img
                        src={ Gmail }
                        alt={ Gmail }
                        className="icon-contact"
                        /><h4 className="contact-title">Mail</h4>
                    <p>florii.talavera@gmail.com </p>
                    </div>
                    <div className='my-contact'>
                    <img
                        src={ CV }
                        alt={ CV }
                        className="icon-contact"
                        /><h4 className="contact-title">CV</h4>
                    <a href="../assets/CV-Flor-Talavera.pdf" download="CV-Flor-Talavera">Descargar mi CV</a>
                    </div>
                    <div className='my-contact'>
                    <img
                        src={ Whatsapp }
                        alt={ Whatsapp }
                        className="icon-contact"
                        /><h4 className="contact-title">Mi whatsapp</h4>
                    <a id='wsp' href="http://wa.me/541131362662" target="_blank" rel="noopener noreferrer">click acá para enviar msj</a>
                    </div>
                </div>
            </motion.section>
            <p className="copy2">&copy; Mi Portfolio en React by Flor Talavera </p></>
        );
    }
}
export default Contact