import { useSelector } from "react-redux";
import ContactsItem from "../ContactsItem/ContactsItem";

import style from "./ContactsList.module.css";

function ContactsList() {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const filter = useSelector((state) => state.phonebook.filter);

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <>
      <p className={style.count}>Contacts count: {contacts.length}</p>
      <ul className={style.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsItem key={number} id={id} name={name} number={number}/>
        ))}
      </ul>    
    </>

  );
}

export default ContactsList;
