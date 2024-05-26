import { tagTypesList } from './../tag-types';


import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
//https://level2-assigment9.vercel.app/
//https://level2-assigment9.vercel.app/api/v1/pats/
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://level2-assigment9.vercel.app/api/v1' }),
  endpoints: () => ({}),
  tagTypes: tagTypesList
})
