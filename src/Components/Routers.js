import React from "react";
import { 
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import Header from "Components/Header";
import Footer from "Components/Footer";
import Main from "Routes/PortFolio";
// import Navi from "Components//Navi";

const Routers = () => {
    return (
        <Router>
            <>
                <Header />
                {/* <Navi /> */}
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </>
        </Router>
    )
}

export default Routers;