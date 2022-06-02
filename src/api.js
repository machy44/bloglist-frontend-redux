import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrlRtk = '/api';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlRtk }),
  endpoints: () => ({})
});
