import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksArray: [],
  isLoading: false,
  hasError: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const request = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMQHatMC6rYqGvNYfZln/books');
    return request.data;
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const respo = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMQHatMC6rYqGvNYfZln/books', book);
    return respo.data;
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (item_id) => {
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMQHatMC6rYqGvNYfZln/books/${item_id}`);
  } catch (error) {
    return error;
  }
  return null;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksArray = Object.keys(action.payload).map((item_id) => ({
        item_id,
        ...action.payload[item_id][0],
      }));
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [addBook.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [addBook.pending]: (state) => {
      state.isLoading = true;
    },
    [addBook.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeBook.pending]: (state) => {
      state.isLoading = true;
    },
    [removeBook.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeBook.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default booksSlice.reducer;
