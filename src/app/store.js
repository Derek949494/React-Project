import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';


export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});