// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const userApi = createApi({
//     reducerPath: 'userApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://forum-api.dicoding.dev/v1',
//     }),
//     tagTypes: ['Users'],
//     endpoints: (builder) => ({
//         getUsers: builder.query({
//             query: () => `/users`,
//             providesTags: ['Users'],
//         }),
//         register: builder.mutation({
//             query: ({ name, email, password }) => ({
//                 url: `/register`,
//                 method: "POST",
//                 body: { name, email, password },
//             }),
//             invalidatesTags: ['Users']
//         }),
//     }),
// });

// export const {
//     useGetUsersQuery,
//     useRegisterMutation,
// } = userApi;