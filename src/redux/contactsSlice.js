import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload: contact }) => {
      state.items.unshift(contact);
    },
    deleteContact(state, { payload: id }) {
      state.items = state.items.filter((x) => x.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
