import React from 'react';

class Contact extends React.Component {

    render() {
        
        return (
            <form className='mid-form'>
                <div className='form-group'>
                    <label for='nombre'>Nombre</label>
                    <input type='text' name='nombre'></input>
                </div>

                <div className='form-group'>
                    <label for='apellido'>Apellido</label>
                    <input type='text' name='apellido'></input>
                </div>

                <div className='form-group'>
                    <label for='sugerencia'>Sugerencias</label>
                    <textarea type='text' name='sugerencia'></textarea>
                </div>

                <div className='clearfix'></div>

                <input type='submit' value='Enviar' className='btn btn-success'></input>

            </form>
        );
    }
}

export default Contact