import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });

// export default store;

const contactsConfig = {
  key: "contacts",
  storage,
};
const filtersConfig = {
  key: "filters",
  storage,
};
const persistedContactsReducer = persistReducer(
  contactsConfig,
  contactsReducer
);
const persistedFiltersReducer = persistReducer(filtersConfig, filtersReducer);
const rootReducer = {
  contacts: persistedContactsReducer,
  filters: persistedFiltersReducer,
};

export const store = configureStore({
  reducer: rootReducer,

  //FROM https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
