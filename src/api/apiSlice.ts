import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/https://swapi.dev/api/people' }),
  endpoints: (builder) => ({
    getPerson: builder.query({
      query: (input) => `/?search=${input}`,
    }),
    getPage: builder.query({
      query: (currentPage) => `/?page=${currentPage}`,
    }),
  }),
});

export const { useGetPersonQuery, useGetPageQuery } = apiSlice;
