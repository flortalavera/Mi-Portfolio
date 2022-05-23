import React from 'react';
import { motion } from 'framer-motion';

import Header from '../Header';
import Presentation from '../Presentation';
import Aptitudes from '../Aptitudes';
import Footer from '../Footer';
import Proyects from '../Proyects';
import Skills from '../Skills';

function Home() {
    return (
      <motion.body
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      >
        <Header />
        <Presentation />
        <Skills/>
        <Aptitudes/>
        <Proyects/>
        <Footer/>
      </motion.body>
    );
  }

export default Home
