import { baseAPISlice } from '../../../utils/api';

const apiWithTag = baseAPISlice.enhanceEndpoints({ addTagTypes: ['Threads'] })

// const threadsAPI = baseAPISlice.injectEndpoints({
const threadsAPI = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getThreads: builder.query({
      query: () => '/threads',
      providesTags: ['Threads', 'Votes'],
    }),
    getThread: builder.query({
      query: (id) => `/threads/${id}`,
      providesTags: ['Threads', 'Comments'],
    }),
    addThread: builder.mutation({
      query: ({ title, body, category }) => ({
        url: `/threads`,
        method: "POST",
        body: { title, body, category },
        // headers: {
        //   "content-type": "multipart/form-data"
        // },
      }),
      invalidatesTags: ['Threads']
    }),
  }),
  overrideExisting: true,
})

export const {
  useGetThreadsQuery,
  useGetThreadQuery,
  useAddThreadMutation
} = threadsAPI