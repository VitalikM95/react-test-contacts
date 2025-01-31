import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContact, IContactsApi } from "../utils/ContactApi.types";

type ContactData = {
  resources: IContact[];
};

type TagsData = {
  id: string;
  tags: string[];
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
        params: {
          sort: "created:desc",
        },
      }),
      providesTags: () => ["Contacts"],
    }),
    getContact: build.query<ContactData, string>({
      query: (contactId) => ({
        url: `/contact/${contactId}`,
      }),
      providesTags: () => ["Contacts"],
    }),
    createContact: build.mutation<any, any>({
      query: (createContactData) => ({
        url: "/contact",
        method: "POST",
        body: createContactData,
      }),
      invalidatesTags: ["Contacts"],
    }),
    addTags: build.mutation<any, TagsData>({
      query: (tagsData) => ({
        url: `contacts/${tagsData.id}/tags`,
        method: "PUT",
        body: { tags: tagsData.tags },
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: build.mutation<string, string>({
      query: (contactId) => ({
        url: `/contact/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});
