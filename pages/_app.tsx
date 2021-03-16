/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';
import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import store, { RootState } from '../utils/store';
import theme from '../utils/theme';
import '../public/global.sass';

export const SizeContext = React.createContext({
  isMobile: false,
  isDesktop: false,
});

const StyledApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const isDesktop = useMediaQuery(useTheme().breakpoints.up('lg'));

  const mode = useSelector<RootState, boolean>(
    (state) => state.theme.isDarkTheme
  )
    ? 'dark'
    : 'light';

  return (
    <ThemeProvider theme={theme(mode)}>
      <SizeContext.Provider value={{ isMobile, isDesktop }}>
        <CssBaseline />
        <Component {...pageProps} />
      </SizeContext.Provider>
    </ThemeProvider>
  );
};

const App: React.FC<AppProps> = (props: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <StyledApp {...props} />
    </Provider>
  );
};

export default App;
