import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/AddContact.css';

export default () => {
    const navigate = useNavigate();
    const [ contact, setContact ] = useState({ name: '', phone: ''});

    const onChangeInput = (e) => { setContact({ ...contact, [e.target.name] : e.target.value }) }
    const onSubmit = (e) => {
        e.preventDefault();
        if(!contact.name || !contact.phone) return
        postContact(contact);
    }
    const postContact = async (contact) => {
        await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(contact)
        });
        navigate("/");
    }
    return (
        <>
            <h2> Agregar contacto </h2>
            <div className="center">
                <form className="form" onSubmit={onSubmit}>
                    <label>
                        <p>Name</p>
                        <input type="text" name="name" onChange={onChangeInput} /> 
                    </label>
                    <label>
                        <p>Phone</p>
                        <input type="text" name="phone" onChange={onChangeInput} />                        
                    </label>
                    <div className="center">
                        <button className="button primary"> Crear </button>
                    </div>
                </form>
            </div>
        </>
    )
}
