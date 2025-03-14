import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "contacts",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const selectNameFilter = (state) => state.filter.name;
