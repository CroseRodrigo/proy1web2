import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Libros from './components/Libros';
import Autores from './components/Autores';
import Asociados from './components/Asociados';
import SobreNosotros from './components/SobreNosotros';
import Creditos from './components/Creditos';

import Navbar1 from './layouts/Navbar1';
import Footer from './layouts/footer';

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar1 />}>
            <Route index element={<Home />} />
            <Route path='Libros' element={<Libros />} />
            <Route path='Autores' element={<Autores />} /> w
            <Route path='Asociados' element={<Asociados />} /> 
            <Route path='SobreNosotros' element={<SobreNosotros />} /> 
            <Route path='Creditos' element={<Creditos />} />

            <Route path='*' element={<Navigate replace to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}


export default App;