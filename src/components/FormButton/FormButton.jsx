import style from "./FormButton.module.css";

function FormButton({ setIsForm }) {
  return (
      <button className={style.button} onClick={() => setIsForm(true)}>
        Add contact
      </button>
  );
}

export default FormButton;
