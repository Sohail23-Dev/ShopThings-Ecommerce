import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carts from "../features/cartSlice";
import filter from "../features/filterSlice";
export const rootReducer = combineReducers({
 cart: carts,
 filter,
});
const persistConfig = {
 key: "root",
 storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: false, // redux-persist uses non-serializable values
  }),
});
const persistor = persistStore(store);
export { store, persistor };
export default store;