import { API_ENDPOINT } from '../database/server.js'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact';

import '../styles/DetailsContact.css'

export default () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({});

    useEffect(() => { loadContact() }, []);

    const loadContact = async () => {
        const res = await fetch(API_ENDPOINT + id);
        if (!res.ok) return navigate("/");
        const json = await res.json();
        setContact(json);
    };
    const deleteContact = async () => {
        const req = await fetch(API_ENDPOINT + id, { method: "DELETE" });
        navigate("/");
    };

    return (
        <>
            <h2> Detalles contacto - {id} </h2>
            <Contact {...contact} />
            <div className="actions">
                <button className="button danger" onClick={deleteContact}> Eliminar contacto </button>
                <Link to={`/contact/${id}/edit`}>
                    <button className="button warning"> Editar contacto </button>
                </Link>
            </div>
        </>
    )
}
