import { AnimatePresence } from "framer-motion";
import { useLocation, Route, Routes } from 'react-router-dom';
import React from 'react'

import Error from './Pages/Error';

const Home = React.lazy(() => import ('./Pages/Home'));
const Contact = React.lazy(() => import ('./Pages/Contact'));
const Certificate = React.lazy(() => import ('./Pages/Certificate'));

export const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence>
        { /* CONFIGURAR RUTAS Y PAGINAS */}
                <Routes location={location} key={location.pathname}>
                    <Route
                    path="/"
                    element={<React.Suspense fallback='Loading...'>
                    <Home />
                </React.Suspense>}/>

                    <Route
                    path="/contact"
                    element={<React.Suspense fallback='Loading..'>
                    <Contact />
                    </React.Suspense>} />

                    <Route
                    path="/certificate"
                    element={<React.Suspense fallback='Loading..'>
                    <Certificate />
                    </React.Suspense>} />

                    <Route exact component={<Error />} />
                </Routes>
    </AnimatePresence>
  )
}
