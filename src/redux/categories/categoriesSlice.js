import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesArray: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkstatus: (state) => {
      if (state.status === '') return 'Under construction';
      return null;
    },
  },
});

export default categoriesSlice.reducer;
