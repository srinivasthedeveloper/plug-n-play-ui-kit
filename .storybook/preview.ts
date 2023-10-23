import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    // themes: {
    //   light: lightTheme,
    //   dark: darkTheme,
    // },
    // defaultTheme: 'light',
    // Provider: ThemeProvider,
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];