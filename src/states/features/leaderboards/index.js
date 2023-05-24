import { baseAPISlice } from '../../../utils/api';

const leaderboardsAPI = baseAPISlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeaderboards: builder.query({
      query: () => '/leaderboards',
      providesTags: ['Leaderboards'],
      // providesTags: (result = [], error, arg) => [
      //   'Leaderboards',
      //   ...result.map(({ id }) => ({ type: 'Leaderboards', id }))
      // ]
    }),
  }),
  overrideExisting: false,
})
export const {
  useGetLeaderboardsQuery
} = leaderboardsAPI