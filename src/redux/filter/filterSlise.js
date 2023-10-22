import { createSlice } from '@reduxjs/toolkit';
const initialFilters = { filter: '' };
const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
