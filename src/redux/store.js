import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer"],
};

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };
