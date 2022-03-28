import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './components/Contact';
import Certificate from './components/Certificate';
import Error from './components/Error';
import Header from './components/Header';
import Presentation from './components/Presentation';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Presentation />

                { /* CONFIGURAR RUTAS Y PAGINAS */}
                <Routes>
                    <Route exact path="/" />
                    <Route exact path="/contact" component={Contact} /> 
                    <Route exact path="/certificate" component={Certificate} />
                    
                    <Route exact component={Error} />
                </Routes>

            </BrowserRouter>
        );
    }
}

export default Router;