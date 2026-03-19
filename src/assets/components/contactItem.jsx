import ContactItemImage from "./contactItemImage";
import ContactItemBody from "./contactItemBody";

function ContactItem({ imageUrl, name, tag }) {
  return (
    <div>
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
}

export default ContactItem;
