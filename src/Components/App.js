import React, { Component } from "react";
import Routers from "Components/Routers";
import GlobalStyles from "Components/GlobalStyles";
import { ThemeProvider } from 'styled-components';
import theme from "Components/style/theme"

import "../index.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Routers />
          <GlobalStyles />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
