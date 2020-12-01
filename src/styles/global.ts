import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.backgroundText};
    font: 400 5vh 'Raleway', sans-serif;
  }

  h1.logo {
    font: 400 6vh 'Saira Stencil One', cursive;
  }

  a {
    text-decoration: none;
  }
`
