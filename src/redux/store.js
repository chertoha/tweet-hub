import { configureStore } from "@reduxjs/toolkit";
// import {
//   //   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import { usersApi, usersApiPersistedReducer } from "./users/usersApi";
import { usersApi } from "./users/usersApi";

export const store = configureStore({
  reducer: {
    // [usersApi.reducerPath]: usersApiPersistedReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  //   middleware(getDefaultMiddleware) {
  //     return getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }).concat(usersApi.middleware);
  //   },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

// export const persistor = persistStore(store);
