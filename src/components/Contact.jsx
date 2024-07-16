import './styles/Contact.css';
export default ({ name, phone }) => {
    return (
        <article className="contact">
            <h2>{name}</h2>
            <p>Telefono: {phone}</p>
        </article>
    )
}
