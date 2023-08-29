import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booksArray: [],
}
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksArray = state.booksArray.filter((book) => book.id !== bookId);
    }
  }
})

export default booksSlice.reducer;

export const { addBook, removeBook } = booksSlice.actions;