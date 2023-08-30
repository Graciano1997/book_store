import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksArray: [],
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
    addBook: async (state, action) => {
      try {
        const request = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMQHatMC6rYqGvNYfZln/books', action.payload);
        return request.data;
      } catch (error) {
        console.error(error);
      }
      return null;
    },
    removeBook: async (state, action) => {
      console.log('from removeBook', action.payload);
      try {
        const request = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMQHatMC6rYqGvNYfZln/books/${action.payload}`);
        return request.data;
      } catch (error) {
        console.error(error);
      }
      return null;
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      const booksData = action.payload;
      const books = Object.keys(booksData).map((item_id) => ({
        item_id,
        ...booksData[item_id][0],
      }));
      state.booksArray = books;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default booksSlice.reducer;

export const { addBook, removeBook } = booksSlice.actions;
