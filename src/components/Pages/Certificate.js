import React from 'react';
import NavBar from '../NavBar';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../src/assets/css/index.css";

import ApiyServWeb from '../../assets/galery/API y servicios web.jpg';
import AppsMoviles from '../../assets/galery/AppsMoviles.jpg';
import EdIT from '../../assets/galery/EdIT.jpg';
import GitWorkflow from '../../assets/galery/Git-workflow.png';
import GitHub from '../../assets/galery/Github.jpg';
import HtmlyCss from '../../assets/galery/HtmlyCss.jpg';
import Javascript from '../../assets/galery/Javascript.jpg';
import Python from '../../assets/galery/Python1.jpg';
import PythonEsencial from '../../assets/galery/PythonEsencial.jpg';
import Scrum from '../../assets/galery/Scrum.jpg';
import TransfDigital from '../../assets/galery/transform-digital.jpg';
import UX from '../../assets/galery/UX.png';

class Certificate extends React.Component{

    render(){
        return (
            <><NavBar />
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            >
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
            </motion.div>
            <p className="copy2">&copy; Mi Portfolio en React by Flor Talavera </p>
            </>
        );
    }
}

export default Certificate