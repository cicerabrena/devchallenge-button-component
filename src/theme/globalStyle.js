import { createGlobalStyle } from 'styled-components';

import '@fontsource/noto-sans-jp';

const GlobalSytle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Noto Sans JP";
    font-weight: 500;
  }
`;

export default GlobalSytle;
