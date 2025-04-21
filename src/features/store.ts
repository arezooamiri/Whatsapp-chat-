import { configureStore } from "@reduxjs/toolkit";
import activeSectionReducer from "./sideSection";

// Define the store
const store = configureStore({
  reducer: {
    activeSection: activeSectionReducer,
  },
});

// Export the store and types for use in your app
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
