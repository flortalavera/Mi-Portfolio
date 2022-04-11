import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Certificate from './components/Pages/Certificate';
import Error from './components/Pages/Error';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                { /* CONFIGURAR RUTAS Y PAGINAS */}
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/certificate" element={<Certificate />} />
                    
                    <Route exact component={<Error />} />
                </Routes>

            </BrowserRouter>
        );
    }
}

export default Router;