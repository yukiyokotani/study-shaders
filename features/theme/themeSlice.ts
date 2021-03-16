import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkTheme: process.browser
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return { isDarkTheme: !state.isDarkTheme };
    },
  },
});

export default themeSlice;
