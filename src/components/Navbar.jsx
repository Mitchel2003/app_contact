import { Link } from 'react-router-dom';
import './styles/Navbar.css';

export default () => {
    return (
        <nav className="navigation">
            <Link to="/"> App contactos </Link>
            <Link to="/agregarContacto">
                <button className="button primary"> Agregar contacto </button>
            </Link>
        </nav>
    )
}
