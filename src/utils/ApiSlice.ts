import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://devapi.myorthopedicproblem.com/v1",
    prepareHeaders: (headers) => {
      const token = JSON.parse(sessionStorage.getItem("token") || "");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["user"],

  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (values) => ({
        url: "/auth/login",
        method: "POST",
        body: values,
      }),
    }),

    getUser: builder.query({
      query: () => `/patient/`,
      providesTags: ["user"],
    }),

    getAppointments: builder.query({
      query: () => `/schedule/appointment/list?limit=10&sortBy=createdAt&page=1`,
      providesTags: ["user"],
    }),
  }),
});

export const { useAuthMutation, useGetUserQuery, useGetAppointmentsQuery } = ApiSlice;
