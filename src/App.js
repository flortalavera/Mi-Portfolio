//importo los estilos
import './assets/css/estilos.css';
import './assets/css/normalize.css';

//importo los componentes
import Aptitudes from './components/Aptitudes';
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Router from './Router';

function App() {
  return (
    <body>
      <Router/>
      <Skills/>
      <Aptitudes/>
      <Proyects/>
      <Footer/>
    </body>
    
  );
}

export default App;
