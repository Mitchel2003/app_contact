import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ contact, setContact ] = useState({ name: "", phone: ""});

    useEffect(() => { loadContact() }, []);

    const loadContact = async () => {
        const res = await fetch(API_URL + id);
        if(!res.ok) return navigate("/");
        const json = res.json();
        setContact(json);
    };
    const onChangeInput = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(!contact.name || !contact.phone) return
        editContact(contact);
    };
    const editContact = async (data) => {
        const req = await fetch(API_URL + id, {
            method: "PUT",
            body: JSON.stringify(data)
        });
        navigate("/");
    };

    return (
        
    );
};
