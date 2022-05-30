import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const { createGlobalStyle } = styledComponents as ThemedStyledComponentsModule<{}>;


export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: #f0f0f0;
  }

  .blue {
    color: #0070f3;
  }

  * {
    box-sizing: border-box;
  }

`;