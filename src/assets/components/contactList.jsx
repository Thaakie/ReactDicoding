import ContactItem from "./contactItem";

function ContactList({ contacts, id, onDelete }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} id={id} onDelete={onDelete} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
