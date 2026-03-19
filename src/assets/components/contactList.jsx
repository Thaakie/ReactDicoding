import ContactItem from "./contactItem";

function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
