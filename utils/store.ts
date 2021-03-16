import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeSlice from '../features/theme/themeSlice';

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Promiseを返すようにする
// https://react-redux.js.org/using-react-redux/static-typing#typing-the-usedispatch-hook
export type AppDispatch = typeof store.dispatch;

export default store;
