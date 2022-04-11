import React from 'react';
import Header from '../Header';
import Presentation from '../Presentation';
import Aptitudes from '../Aptitudes';
import Footer from '../Footer';
import Proyects from '../Proyects';
import Skills from '../Skills';

function Home() {
    return (
      <body>
        <Header />
        <Presentation />
        <Skills/>
        <Aptitudes/>
        <Proyects/>
        <Footer/>
      </body>
    );
  }

export default Home
