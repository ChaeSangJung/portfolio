import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans CJK KR', 'Open Sans', sans-serif;
        font-weight: 300;
    }
`;

export default globalStyles;
