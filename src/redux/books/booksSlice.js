import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  isLoading: true,
  error: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const request = await axios('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMQHatMC6rYqGvNYfZln/books');
    return request.data;
  } catch (error) {
    console.log(error);
  }
  return null;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload.item_id;
      state.booksArray = state.booksArray.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksArray = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default booksSlice.reducer;

export const { addBook, removeBook } = booksSlice.actions;
