import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*--------------------components--------------------*/
import DetailsContact from './components/pages/DetailsContact';
import SetContact from './components/pages/SetContact';
import AddContact from './components/pages/AddContact';
import Index from './components/pages/Index';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/agregarContacto" element={<AddContact />} />
          <Route path="/contacto/:id" element={<DetailsContact />} />
          <Route path="/contacto/:id/editar" element={<SetContact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
