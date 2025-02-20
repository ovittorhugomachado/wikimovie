import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: big shoulders display, sans-serif;
        letter-spacing: 1px;
        transition: background-color 0.3s ease, border-color 0.5s ease, box-shadow 0.5s ease; /* Suaviza mudanças em bordas e sombras */
        --primary-color: #012929;
        --secondary-color: #00C892;
        --yellow: #FFC610;
        --coral: #FF9D42;  
        --white: #FFFFFF;
        --error-color: hsl(354, 84%, 57%);
    }


    body {
        height: 100vh;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }

    #root {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        text-align: center;
        background-color: var(--primary-color);
        background-image: linear-gradient(transparent 19px, #003838 20px), 
                          linear-gradient(90deg, transparent 19px, #003838 20px);
        background-size: 20px 20px;
    }

    h1 {
        font-size: 50px;
        color: var(--yellow)
    }

    a {
        text-decoration: none;
    }
`