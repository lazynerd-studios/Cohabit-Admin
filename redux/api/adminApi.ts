/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const adminApi = createApi({
  reducerPath: "admin",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [
    "Admin",
    "AdminDashboardStats",
    "AdminHouseSeekerDashboard",
    "AdminUser",
    "AdminHouseListing",
    "AdminHouseListingDetails",
    "Admins",
    "Roles",
  ],
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => ({
        url: "admin/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Admin"],
    }),
    getAdminPasswordResetLink: builder.mutation({
      query: (data) => ({
        url: "admin/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    adminResetPassword: builder.mutation({
      query: (data) => ({
        url: "admin/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    getDashboardStats: builder.query({
      query: () => `admin/dashboard`,
      providesTags: ["AdminDashboardStats"],
    }),
    getAdminHouseSeekersDashboard: builder.query({
      query: ({ count, page }) =>
        `admin/house-seekers?count=${count}&page=${page}`,
      providesTags: ["AdminHouseSeekerDashboard"],
    }),
    getAdminUser: builder.query({
      query: ({ id }) => `admin/users/${id}`,
      providesTags: ["AdminUser"],
    }),
    getAdminHouseListings: builder.query({
      query: ({ open, verified, rented }) =>
        `admin/listings?open&verified=${verified}&rented=${rented}`,
      providesTags: ["AdminHouseListing"],
    }),
    getAdminHouseListing: builder.query({
      query: ({ id }) => `admin/listings/${id}`,
      providesTags: ["AdminHouseListingDetails"],
    }),
    getAdmins: builder.query({
      query: () => `admin/permissions/users`,
      providesTags: ["Admins"],
    }),
    getRoles: builder.query({
      query: () => `admin/permissions/users`,
      providesTags: ["Roles"],
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "admin/users/add-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Admins"],
    }),
    createRole: builder.mutation({
      query: (data) => ({
        url: "admin/permissions/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Roles"],
    }),
    updateRole: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/permissions/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Roles"],
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetAdminPasswordResetLinkMutation,
  useAdminResetPasswordMutation,
  useGetDashboardStatsQuery,
  useGetAdminHouseSeekersDashboardQuery,
  useGetAdminUserQuery,
  useGetAdminHouseListingsQuery,
  useGetAdminHouseListingQuery,
  useGetAdminsQuery,
  useGetRolesQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useCreateAdminMutation,
} = adminApi;
