import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const Store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default Store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
