import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export var UserSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    password: null,
    _id: null,
    token: null,
    // user: {}
    first_name: null,
    last_name: null,
    designation: null,
    company_name: null,
    user_dob: null,
    pan_number: null,
    mobile_number: null,
    
  },
  reducers: {
    setUserEmail: (state, action) => {
      console.log("Email set", JSON.stringify(action.payload));
      state.email = action.payload;
    },
    setUserPassword: (state, action) => {
      console.log("Password set", JSON.stringify(action.payload));
      state.password = action.payload;
    },
    setUserId: (state, action) => {
      console.log("Id set", JSON.stringify(action.payload));
      state._id = action.payload;
    },
    setUserToken: (state, action) => {
      console.log("Token set", JSON.stringify(action.payload));
      state.token = action.payload;
    },
    setUserFirstname: (state, action) => {
      console.log("First name set", JSON.stringify(action.payload));
      state.first_name = action.payload;
    },
    setUserLastname: (state, action) => {
      console.log("Last name set", JSON.stringify(action.payload));
      state.last_name = action.payload;
    },
    setUserDesignation: (state, action) => {
      console.log("Designation set", JSON.stringify(action.payload));
      state.designation = action.payload;
    },
    setUserCompanyname: (state, action) => {
      console.log("Company name set", JSON.stringify(action.payload));
      state.company_name = action.payload;
    },
    setUserDob: (state, action) => {
      console.log("Dob set", JSON.stringify(action.payload));
      state.user_dob = action.payload;
    },
    setUserPannumber: (state, action) => {
      console.log("Pan number set", JSON.stringify(action.payload));
      state.pan_number = action.payload;
    },
    setUserMobilenumber: (state, action) => {
      console.log("Mobilenumber set", JSON.stringify(action.payload));
      state.mobile_number = action.payload;
    },

    clear(state) {
      storage.removeItem("persist:root1");
      state = null;
    },
  },
});


export const getUserEmail = (state) => {
  return state.user.email;
};
export const getPassword = (state) => {
  return state.user.password;
};
export const getUserId = (state) => {
  return state.user._id;
};
export const getUserToken= (state) => {
  return state.user.token;
};
export const getUserFirstname = (state) => {
  return state.user.first_name;
};
export const getUserLastname = (state) => {
  return state.user.last_name;
};
export const getUserPannumber = (state) => {
  return state.user.pan_number;
};
export const getUserMobilenumber= (state) => {
  return state.user.mobile_number;
};
export const getUserDob = (state) => {
  return state.user.user_dob;
};
export const getCompanyname = (state) => {
  return state.user.company_name;
};
export const getUserDesignation = (state) => {
  return state.user.designation;
};

export const {
  setUserEmail,
  setUserPassword,
  setUserId,
  setUserToken,
  // setUser,
  setUserFirstname,
  setUserLastname,
  setUserCompanyname,
  setUserDesignation,
  setUserMobilenumber,
  setUserPannumber,
  setUserDob,
  clear
} = UserSlice.actions;

export default UserSlice.reducer;
