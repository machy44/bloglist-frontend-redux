import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrlRtk = '/api';

export const api = createApi({
  reducerPath: 'blogs-app',
  tagTypes: ['Blogs', 'Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlRtk,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: () => ({})
});
