import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import dark from "./Styles/themes/dark";
import { Routes } from "./routes";
// import light from './Styles/themes/light'

export const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};
