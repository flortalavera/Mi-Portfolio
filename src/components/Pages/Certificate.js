import React from 'react';
import NavBar from '../NavBar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../src/assets/css/index.css";

import ApiyServWeb from '../../assets/galeria/API y servicios web.jpg';
import AppsMoviles from '../../assets/galeria/AppsMoviles.jpg';
import EdIT from '../../assets/galeria/EdIT.jpg';
import GitWorkflow from '../../assets/galeria/Git-workflow.png';
import GitHub from '../../assets/galeria/Github.jpg';
import HtmlyCss from '../../assets/galeria/HtmlyCss.jpg';
import Javascript from '../../assets/galeria/Javascript.jpg';
import Python from '../../assets/galeria/Python1.jpg';
import PythonEsencial from '../../assets/galeria/PythonEsencial.jpg';
import Scrum from '../../assets/galeria/Scrum.jpg';
import TransfDigital from '../../assets/galeria/transform-digital.jpg';
import UX from '../../assets/galeria/UX.png';

class Certificate extends React.Component{

    render(){
        return (
            <><NavBar />
            <div>
                <Carousel className='main-slide'>
                <div className='one-slide'>
                    <img
                    src={ ApiyServWeb }
                    alt={ ApiyServWeb }
                    className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ AppsMoviles }
                     alt={ AppsMoviles }
                     className="certificate"
                      />
                </div>
                <div className='one-slide'>
                    <img
                     src={ EdIT }
                     alt={ EdIT }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ GitWorkflow }
                     alt={ GitWorkflow }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ GitHub }
                     alt={ GitHub }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ HtmlyCss }
                     alt={ HtmlyCss }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ Javascript }
                     alt={ Javascript }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ Python }
                     alt={ Python }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ PythonEsencial }
                     alt={ PythonEsencial }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ Scrum }
                     alt={ Scrum }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ TransfDigital }
                     alt={ TransfDigital }
                     className="certificate"
                     />
                </div>
                <div className='one-slide'>
                    <img
                     src={ UX }
                     alt={ UX }
                     className="certificate"
                     />
                </div>
             </Carousel>
            </div>
            <p className="copy2">&copy; Mi Portfolio en React by Flor Talavera </p>
            </>
        );
    }
}

export default Certificate