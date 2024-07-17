import { API_ENDPOINT } from "../database/server.js";
import { useState, useEffect } from "react";
import ListContacts from "../ListContacts";
import "../styles/Index.css";

export default () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => { loadContacts() }, []);

  const loadContacts = async () => {
    const res = await fetch(API_ENDPOINT);
    const json = await res.json();
    setContacts(json);
  }

  return (
    <>
      <h2> Contacts </h2>
      {contacts.length > 0 ? (
        <section className="contacts">
          <ListContacts contacts={contacts} />
        </section>
      ) : (
        <div className="center">
          <p>Nothing found</p>
        </div>
      )}
    </>
  )
}
