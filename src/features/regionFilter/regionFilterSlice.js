import { createSlice } from '@reduxjs/toolkit';

const regionFilterSlice = createSlice({
  name: "regionFilter",
  initialState: '',
  reducers: {
    setRegionFilter: (state, action) => {
      return action.payload;
    }
  }
})

export const selectRegionFilter = (state) => state.regionFilter;
export const { setRegionFilter } = regionFilterSlice.actions;
export default regionFilterSlice.reducer;

