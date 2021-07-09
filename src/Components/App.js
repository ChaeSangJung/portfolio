import React, { Component } from "react";
import Routers from "Components/Routers";
import GlobalStyles from "Components/GlobalStyles";

import "../index.css";

class App extends Component {
  render() {
    return (
      <>
        <Routers />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
