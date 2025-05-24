import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filters.name);

  const filteredContacts = filterName
    ? contacts.filter((x) =>
        x.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : contacts;

  return (
    <div className={styles.container}>
      <h2>Contacts</h2>

      {filteredContacts.length === 0 ? (
        <p className={styles.emptyMessage}>No contacts found.</p>
      ) : (
        filteredContacts.map((c) => <Contact key={c.id} contact={c} />)
      )}
    </div>
  );
}

export default ContactList;
