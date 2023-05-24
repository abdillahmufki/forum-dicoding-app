import { delLocalStorage } from '../../../hooks';
import { baseAPISlice } from '../../../utils/api';

const usersAPI = baseAPISlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: ['Users'],
    }),
    getMyProfile: builder.query({
      query: () => `/users/me`,
      providesTags: ['Users', 'Votes'],
    }),
    register: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `/register`,
        method: "POST",
        body: { name, email, password },
      }),
      invalidatesTags: ['Users']
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `/login`,
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ['Users']
    }),
  }),
  overrideExisting: false,
})

export const logout = () => {
  delLocalStorage("tokenUser");
  window.location.reload();
}

export const {
  useGetUsersQuery,
  useGetMyProfileQuery,
  useRegisterMutation,
  useLoginMutation,
} = usersAPI