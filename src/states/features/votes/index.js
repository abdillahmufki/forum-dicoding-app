import { baseAPISlice } from '../../../utils/api';

const votesAPI = baseAPISlice.injectEndpoints({
  endpoints: (builder) => ({
    upVoteThread: builder.mutation({
      query: (threadId) => ({
        url: `/threads/${threadId}/up-vote`,
        method: "POST",
      }),
      invalidatesTags: ['Votes']
    }),
    downVoteThread: builder.mutation({
      query: (threadId) => ({
        url: `/threads/${threadId}/down-vote`,
        method: "POST",
      }),
      invalidatesTags: ['Votes']
    }),
    neutralizeVoteThread: builder.mutation({
      query: (threadId) => ({
        url: `/threads/${threadId}/neutral-vote`,
        method: "POST",
      }),
      invalidatesTags: ['Votes']
    }),
    upVoteComment: builder.mutation({
      query: (threadId, commentId) => ({
        url: `/threads/${threadId}/comments/${commentId}/up-vote`,
        method: "POST",
      }),
      invalidatesTags: ['Votes']
    }),
    downVoteComment: builder.mutation({
      query: (threadId, commentId) => ({
        url: `/threads/${threadId}/comments/${commentId}/down-vote`,
        method: "POST",
      }),
      invalidatesTags: ['Votes']
    }),
    neutralizeVoteComment: builder.mutation({
      query: (threadId, commentId) => ({
        url: `/threads/${threadId}/comments/${commentId}/neutral-vote`,
        method: "POST",
      }),
      invalidatesTags: ['Votes']
    }),
  }),
  overrideExisting: false,
})

export const {
  useUpVoteThreadMutation,
  useDownVoteThreadMutation,
  useNeutralizeVoteThreadMutation,
  useUpVoteCommentMutation,
  useDownVoteCommentMutation,
  useNeutralizeVoteCommentMutation
} = votesAPI