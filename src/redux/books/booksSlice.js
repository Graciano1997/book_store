import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArray: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};
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
    },
  },
});

export default booksSlice.reducer;

export const { addBook, removeBook } = booksSlice.actions;
