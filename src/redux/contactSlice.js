import { createSlice } from "@reduxjs/toolkit";

let contacts = [{
  "name": "Alex",
  "number": "+123456789"
}]

const savedContacts = window.localStorage.getItem("contacts")

if (savedContacts) {
  contacts = JSON.parse(savedContacts)
}

const initialState = {
  contacts: contacts,
  filter: ""
}

const phonebookSlice = createSlice({
  name: "phonebook",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload)
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => action.payload !== contact.id)
    }, 
    filterContact: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const { addContact, deleteContact, filterContact } = phonebookSlice.actions
export default phonebookSlice.reducer