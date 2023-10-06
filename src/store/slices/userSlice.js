import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userId: "",
  email: "",
  role: "",
  boughtBooks: [],
  cartItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserInfo: (state, action) => {
      console.log(state);
      state.userName = action?.payload?.userId?.userName;
      state.userId = action?.payload?.userId?._id;
      state.email = action?.payload?.email;
      state.role = action?.payload?.role;
    },
    addUserInfo: (state, action) => {
      console.log(state);
      localStorage.setItem("token", action?.payload?.token);
      state.userName = action?.payload?.userId?.userName;
      state.userId = action?.payload?.userId?._id;
      state.email = action?.payload?.email;
      state.role = action?.payload?.role;
    },
    deleteUserInfo: (state, action) => {
      localStorage.removeItem("token");
      state.userName = "";
      state.userId = "";
      state.email = "";
      state.role = "";
    },
  },
});

export const { loadUserInfo, addUserInfo, deleteUserInfo } = userSlice.actions;

export default userSlice.reducer;
