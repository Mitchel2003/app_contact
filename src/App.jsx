import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*--------------------components--------------------*/
import Navbar from './components/Navbar';
import Index from './components/Index';
import Card from './components/Card';

import AgregarContacto from './components/AgregarContacto';
import DetalleContacto from './components/DetalleContacto';
import EditarContacto from './components/EditarContacto';

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route index element={ <Index /> } />
          <Route path="/agregarContacto" element={<AgregarContacto />} />
          <Route path="/contacto/:id" element={<DetalleContacto />} />
          <Route path="/contacto/:id/editar" element={<EditarContacto />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
