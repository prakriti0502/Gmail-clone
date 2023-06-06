import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../reducers/emailReducer";
import allMailReducer from "../reducers/allMailsReducer";

const store = configureStore({
  reducer: {
    mail: mailReducer,
    allMail: allMailReducer
  },
});

export default store;