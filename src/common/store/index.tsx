import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./counter/slice";
import rootSaga from "./saga";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({ counter });

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware: any) => [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
];

const Store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default Store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
