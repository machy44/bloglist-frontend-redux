import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrlRtk = '/api';

export const blogsApi = createApi({
  reducerPath: 'blogs',
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

  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs',
      providesTags: ['Blogs']
    }),
    getBlogById: builder.query({
      query: (id) => `/${id}`
    }),
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: '/blogs',
        method: 'POST',
        body: newBlog
      }),
      invalidatesTags: ['Blogs', 'Users']
    }),
    incrementLike: builder.mutation({
      query: (blog) => ({
        url: `/blogs/${blog.id}`,
        method: 'PUT',
        body: {
          ...blog,
          likes: blog.likes + 1
        }
      }),
      invalidatesTags: ['Blogs']
    }),
    removeBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Blogs', 'Users']
    }),
    commentBlog: builder.mutation({
      query: ({ id, text }) => ({
        url: `/blogs/${id}/comments`,
        method: 'POST',
        body: {
          text
        }
      }),
      invalidatesTags: ['Blogs']
    }),

    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users']
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`
    })
  })
});

export const {
  endpoints,
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useIncrementLikeMutation,
  useRemoveBlogMutation,
  useCommentBlogMutation,
  useGetUsersQuery,
  useGetUserByIdQuery
} = blogsApi;
