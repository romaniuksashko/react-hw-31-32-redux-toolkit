import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer
  }
})

store.subscribe(() => {
  const contacts = store.getState().phonebook.contacts;
  localStorage.setItem("contacts", JSON.stringify(contacts))
})