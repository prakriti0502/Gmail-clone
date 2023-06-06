import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    }
  },
});

export const { selectMail } =
  mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;