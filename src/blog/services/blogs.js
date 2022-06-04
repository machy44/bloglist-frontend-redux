import { api } from '../../api';

export const blogsApi = api.injectEndpoints({
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
  useCommentBlogMutation
} = blogsApi;
