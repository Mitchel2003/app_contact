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
          <Route index> <Index /> </Route>
          <Route path="/agregarContacto"> <AgregarContacto /> </Route>
          <Route path="/contacto/:id"> <DetalleContacto /> </Route>
          <Route path="/contacto/:id/editar"> <EditarContacto /> </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}
