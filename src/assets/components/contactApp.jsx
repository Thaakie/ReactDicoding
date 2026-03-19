import { getData } from "../data/dataContact";
import ContactList from "./contactList";
import "../../styles/contactApp.css";

function ContactApp() {
  const contacts = getData();

  return (
    <div>
      <h1 className="title">Daftar Contact</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
