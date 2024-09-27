import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "../userApis";
import { clearCurrentUser } from "../redux/userSlice";

let baseUrl = process.env.REACT_APP_API_BASE_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
        credentials: "include",
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getCurrentUser.initiate());
        } catch (error) {}
      },
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
        credentials: "include",
      }),

      // automatically update user state if get logout user function is sucessful
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(clearCurrentUser());
          localStorage.removeItem("refreshToken");
        } catch (error) {
          // implement a function to send request to new access token endpoint
          // if we get back expired token or error 403 status code
        }
      },
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;
