import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
}

body{
    background-color: #292929; 
    margin: 0; 
    padding: 0; 
}

html{
    scroll-behavior:smooth;
}

`

export default GlobalStyle