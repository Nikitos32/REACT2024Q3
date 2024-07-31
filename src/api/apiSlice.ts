import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemListProps } from '../constants/interfaces';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people' }),
  endpoints: (builder) => ({
    getPerson: builder.query<ItemListProps, string>({
      query: (input: string) => `/?search=${input}`,
    }),
    getPage: builder.query<ItemListProps, string>({
      query: (currentPage: string) => `/?page=${currentPage}`,
    }),
  }),
});

export const { useGetPersonQuery, useGetPageQuery } = apiSlice;
