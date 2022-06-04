import { configureStore } from '@reduxjs/toolkit';
import { logsMdl } from './middlewares/log';
import { api } from './api';
import { blogMdl } from './blog/blogMiddleware';
import { notificationMdl } from './notification/redux/notificationMiddleware';
import { loginReducer } from './login/redux';
import notificationReducer from './notification/redux/notificationSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    notifications: notificationReducer,
    auth: loginReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([...logsMdl, ...notificationMdl, ...blogMdl])
      .concat(api.middleware)
});
