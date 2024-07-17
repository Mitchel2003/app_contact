import { Link } from "react-router-dom";
import Contact from "./Contact";

export default ({ contacts }) => {
  return (
    <>
      {contacts.map((e) => (
        <Link key={e.id} to={`/contacto/${e.id}`}>
          <Contact {...e} />
        </Link>
      ))}
    </>
  )
}
