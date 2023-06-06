import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export const allMailSlice = createSlice({
  name: "allMail",
  initialState: {
    emails: null,
    error: null,
    loading: false,
    showAllEmails: true
  },
  reducers: {
    fetchMail: (state, action) => {
      state.emails = action.payload;
    },
    fetchMailStart: (state) => {
        state.error = null;
      },
      fetchMailSuccess: (state, action) => {
        state.emails = action.payload;
      },
      fetchMailFailure: (state, action) => {
        state.error = action.payload;
      },
      filterEmails: (state, action) => {
        const tag = action.payload;
        console.log("tag is ", tag);
        if (tag === "all") {
          state.showAllEmails = true;
        } else {
          state.emails = state.emails.map((email) => {
            if (email.tag === tag) {
              return { ...email, visible: true };
            } else {
              return { ...email, visible: false };
            }
          });
          state.showAllEmails = false;
        }
      },
    },
});

export const { fetchMail, fetchMailStart, fetchMailFailure, fetchMailSuccess, filterEmails } =
allMailSlice.actions;


export const fetchMailData = () => async (dispatch) => {
    dispatch(fetchMailStart());
  
    try {
      const response = await fetchData();
      dispatch(fetchMailSuccess(response));
    } catch (error) {
      dispatch(fetchMailFailure(error.message));
    }
};

export const selectAllMails = (state) => {
  if (state.allMail.showAllEmails) {
    return state.allMail.emails;
  } else {
    return state.allMail.emails.filter((email) => email.visible);
  }
};


export default allMailSlice.reducer;