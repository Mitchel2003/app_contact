import { Link } from 'react-router-dom';
import Contact from './Contact';

export default ({ contacts }) => {
    return (
        <section className="contact">
          { contacts.map(e => (
              <Link to={`/contact/${e.id}`}>
                <Contact key={e.id} {...e} />
              </Link>
            )) }
        </section>
    )    
}
