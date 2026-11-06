import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

import style from "./ContactsItem.module.css";

function ContactsItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <li key={id} className={style.item}>
        <h3 className={style.item__name}>{name}</h3>
        <p className={style.item__number}>{number}</p>
        <button
          onClick={() => dispatch(deleteContact(id))}
          className={style.item__button}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default ContactsItem;
