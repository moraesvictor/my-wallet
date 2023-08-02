import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components"; 
import { Layout } from "./components/Layout";

import dark from './Styles/themes/dark'
import { Dashboard } from "./views/Dashboard";
import { List } from "./views/List";
// import light from './Styles/themes/light'

export const App = () => {
    return (
    <ThemeProvider theme={dark} >
      <Layout>
        <List />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
    );
}
