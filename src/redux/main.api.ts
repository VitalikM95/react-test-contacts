import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContact, IContactsApi } from "../types";

type ContactType = {
  resources: IContact[];
};

export const mainApi = createApi({
  reducerPath: "main/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn");
      headers.set("Key", "Bearer MY_API_KEY");
      headers.set("Origin", "http://localhost:5173");
      headers.set("x-requested-with", "XMLHttpRequest");
      return headers;
    },
  }),
  tagTypes: ["Contacts", "Tags"],
  endpoints: (build) => ({
    getAllContacts: build.query<IContactsApi, void>({
      query: () => ({
        url: "/contacts",
      }),
      providesTags: () => ["Contacts"],
    }),
    getContact: build.query<ContactType, string>({
      query: (contactId) => ({
        url: `/contact/${contactId}`,
      }),
      providesTags: () => ["Contacts"],
    }),
  }),
});
