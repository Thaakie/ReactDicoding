import ContactItemImage from "./contactItemImage";
import ContactItemBody from "./contactItemBody";
import DeleteFunction from "./deleteButton";
import ComponentTest from "./test";

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div>
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteFunction id={id} onDelete={onDelete} />
      <ComponentTest>asasasa</ComponentTest>
    </div>
  );
}

export default ContactItem;
