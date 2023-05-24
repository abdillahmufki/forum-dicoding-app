import { baseAPISlice } from '../../../utils/api';

const commentsAPI = baseAPISlice.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: ({ threadId, comment }) => ({
        url: `/threads/${threadId}/comments`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ['Comments']
    }),
  }),
  overrideExisting: false,
})
export const {
  useAddCommentMutation
} = commentsAPI