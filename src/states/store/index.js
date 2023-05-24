import { configureStore } from '@reduxjs/toolkit';
import { baseAPISlice } from '../../utils/api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';


const store = configureStore({
    reducer: {
        [baseAPISlice.reducerPath]: baseAPISlice.reducer,
    },
    // devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseAPISlice.middleware),

})

export default store;

setupListeners(store.dispatch);