import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../styles/themes';

type PlugNPlayContainerProps = { theme?: typeof lightTheme; children: React.ReactNode }

const PlugNPlayContainer = ({ theme = lightTheme, children }: PlugNPlayContainerProps) => (
  <ThemeProvider theme={theme || lightTheme}>{children}</ThemeProvider>
)

export { PlugNPlayContainer }
