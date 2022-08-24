import { createGlobalStyle } from "styled-components";
import PopMed from "../fonts/Poppins-Medium.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "Poppins-Light";
    src: url("../fonts/Poppins-Light.ttf");
    }
    @font-face {
    font-family: "Poppins-Regular";
    src: url("../fonts/Poppins-Regular.ttf");
    }
    @font-face {
    font-family: "Poppins-Medium";
    src: url(${PopMed});
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #FFFFFF;
    }
    p{
        font-size:20px;
        
    }
   
`;

export default GlobalStyle;
