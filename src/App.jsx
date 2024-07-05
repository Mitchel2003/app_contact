import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*--------------------components--------------------*/
import Navbar from './components/Navbar';

import Index from './components/pages/Index';
import AgregarContacto from './components/pages/AgregarContacto';
import DetalleContacto from './components/pages/DetalleContacto';
import EditarContacto from './components/pages/EditarContacto';

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
