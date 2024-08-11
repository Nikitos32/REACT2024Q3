import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemListProps } from '../app/constants/interfaces';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people' }),
  endpoints: (builder) => ({
    getPerson: builder.query<ItemListProps, string>({
      query: (input: string) => `/?search=${input}`,
    }),
    getPage: builder.query<ItemListProps, number>({
      query: (currentPage: number) => `/?page=${currentPage}`,
    }),
  }),
});

export const { useGetPersonQuery, useGetPageQuery } = apiSlice;
