import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }
  *{
    &:empty{
    background: transparent;
    cursor: default;
    pointer-events: none;
  }
  &:focus{
    outline: 2px solid black;
    outline-offset: 4px;
  }
}
`

export default GlobalStyles
