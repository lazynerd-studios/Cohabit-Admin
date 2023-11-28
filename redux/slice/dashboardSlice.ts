import { createSlice } from "@reduxjs/toolkit";

interface IState {
  dashboardData: Record<string, any>;
}

const initialState: IState = {
  dashboardData: {},
};

const userSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    SET_DASHBOARD: (state, action) => {
      return {
        ...state,
        dashboardData: action.payload,
      };
    },
    CLEAR_DASHBOARD: (state) => {
      return {
        ...state,
        dashboardData: {},
      };
    },
  },
});

export default userSlice.reducer;
export const { SET_DASHBOARD, CLEAR_DASHBOARD } = userSlice.actions;
