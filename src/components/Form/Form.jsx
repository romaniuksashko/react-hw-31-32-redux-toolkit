import { addContact } from "../../redux/contactSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "nanoid"

import style from "./Form.module.css"

function Form({setIsForm}) {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!number || !name) {
      alert("Please enter name and number")
      return
    }

    const contact = {
      id: nanoid(),
      name,
      number
    }

    dispatch(addContact(contact))

    setName("")
    setNumber("")
    setIsForm(false);
  }

  const clickOnBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      setIsForm(false);
    }
  }

  return (
    <div className={style.form__backdrop} onClick={clickOnBackdrop}>
      <div className={style.form__background}>
        <h2 className={style.form__title}>Add contact</h2>
        <form onSubmit={handleSubmit} className={style.form}>
          <input
            type="text"
            placeholder="Print name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={style.form__input}
          />
          <input
            type="text"
            placeholder="Print number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            className={style.form__input}
          />
          <button type="submit" className={style.form__button}>
            Add
          </button>
        </form>
      </div>      
    </div>

  );
}

export default Form
