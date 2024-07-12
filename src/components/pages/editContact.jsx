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
        <>
            <h2> Editar contacto </h2>
            <div className="center">
                <form className="form" onSubmit={onSubmit}>
                    <label>
                        <p> Name </p>
                        <input type="text" name="name" onChange={onChangeInput} value={contact.name} />
                    </label>

                    <label>
                        <p> Phone </p>
                        <input type="text" name="phone" onChange={onChangeInput} value={contact.phone} />
                    </label>

                    <div className="center">
                        <button className="button primary"> Editar contact </button>
                    </div>
                </form>
            </div>
        </>
    );
};
