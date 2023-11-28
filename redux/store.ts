import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { adminApi } from "./api/adminApi";
import userSlice from "./slice/userSlice";
import dashboardSlice from "./slice/dashboardSlice";

const rootReducer = combineReducers({
  userData: userSlice,
  dashboard: dashboardSlice,
  [adminApi.reducerPath]: adminApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData", "dashboard"], // Whitelist the reducers you want to persist
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([adminApi.middleware]),
});
const persistor = persistStore(store);
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { persistor, store };
