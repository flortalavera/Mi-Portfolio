import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AnimatedRoutes } from './components/AnimatedRoutes';


class Router extends Component {

    render() {
        return (

            <BrowserRouter>
                <AnimatedRoutes/>
            </BrowserRouter>

        );
    }
}

export default Router;