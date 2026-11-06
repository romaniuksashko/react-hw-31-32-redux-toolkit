import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/contactSlice";

import style from "./Filter.module.css";

function Filter() {
  const filter = useSelector((state) => state.phonebook.filter);

  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Find contact by name"
      value={filter}
      onChange={(event) => {
        dispatch(filterContact(event.target.value));
      }}
      className={style.filter}
    />
  );
}

export default Filter;
