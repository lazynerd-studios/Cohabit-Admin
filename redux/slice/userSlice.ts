import { createSlice } from "@reduxjs/toolkit";

interface IState {
  user: Record<string, any>;
  token: string;
}

const initialState: IState = {
  user: {},
  token: "",
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    SET_TOKEN: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    CLEAR_USER: (state) => {
      return {
        ...state,
        user: {},
      };
    },
    CLEAR_TOKEN: (state) => {
      return {
        ...state,
        token: "",
      };
    },
  },
});

export default userSlice.reducer;
export const { SET_USER, CLEAR_USER, SET_TOKEN, CLEAR_TOKEN } =
  userSlice.actions;
