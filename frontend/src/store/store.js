import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

import { userApi } from './apis/userApi';
import { taskApi } from './apis/taskApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(taskApi.middleware),
});
