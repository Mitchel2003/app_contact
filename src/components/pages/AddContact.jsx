import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/AddContact.css';

export default () => {
    const navigate = useNavigate();
    const [ contact, setContact ] = useState({});

    const onChangeInput = (e) => { setContact({ ...contact, [e.target.name] : e.target.value }) }
    const onSubmit = (e) => {
        e.preventDefault();
        if(!contact.name || !contact.phone) return
        postContact(contact);
    }
    const postContact = async (contact) => {
        await fetch(...Api, {
            method: "POST",
            body: JSON.stringify(contact)
        }); navigate("/");
    }
    return (
        
    )
}
