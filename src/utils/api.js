import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseAPISlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://forum-api.dicoding.dev/v1',
        prepareHeaders: (headers) => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItWW40d3lHWHVnUHZEUU81ViIsImlhdCI6MTY4MzYxMDM5Mn0.xyrwGR4DKPqzYc76UG0H_Hghel0UDbm9qZxmAPKRFck";
            // const token = localStorage.getItem("tokenUser");
            // const token = "";
            headers.set('Content-Type', 'application/json');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers;
        },
    }),
    tagTypes: ['Users', 'Threads', 'Votes', 'Comments', 'Leaderboards'],
    endpoints: (builder) => ({}),
})