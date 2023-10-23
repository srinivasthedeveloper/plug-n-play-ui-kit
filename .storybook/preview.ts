import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/global-styles';
import lightTheme from '../src/styles/themes/light-theme';
import darkTheme from '../src/styles/themes/dark-theme';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];