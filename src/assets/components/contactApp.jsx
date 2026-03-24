import { getData } from "../data/dataContact";
import ContactList from "./contactList";
import "../../styles/contactApp.css";
import { useState } from "react";

function ContactApp() {
  const [contacts, setContacts] = useState(getData());

  const onDeleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    console.log(newContacts);
  };

  return (
    <div>
      <h1 className="title">Daftar Contact</h1>
      <ContactList contacts={contacts} onDelete={onDeleteHandler} />
    </div>
  );
}

export default ContactApp;
