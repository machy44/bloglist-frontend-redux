import { api } from '../../api';

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users']
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`
    })
  })
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
