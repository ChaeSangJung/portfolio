import React from "react";
import { withRouter } from "react-router-dom";
const Navi = withRouter(({location : {pathname}}) => {
    return (
        <div>
            {pathname}
        </div>
    )
});

export default Navi;