import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "../lib/blogsApi/blogsApi";
import { userApi } from "../lib/userApis";
import { authApi } from "../lib/authApis/authApis";
import userSlice from "../lib/redux/userSlice";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      authApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);
