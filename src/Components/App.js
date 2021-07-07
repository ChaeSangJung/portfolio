import React, { Component } from "react";
import GlobalStyles from "Components/GlobalStyles";

import Header from "Components/Header";
import Footer from "Components/Footer";
import Main from "Components/Main";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
