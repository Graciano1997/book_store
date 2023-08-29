import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import caregoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: caregoriesReducer,
  },
});

export default store;
