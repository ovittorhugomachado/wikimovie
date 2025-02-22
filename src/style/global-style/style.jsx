import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: big shoulders display, sans-serif;
        letter-spacing: 1px;
        transition: background-color 0.3s ease, border-color 0.5s ease, box-shadow 0.5s ease; /* Suaviza mudanças em bordas e sombras */
        --primary-color: #0C0C0C;
        --secondary-color: #10E7C5;
        --background-main: #141414;
        --background-button: #222121;
        --name-movie: #ffffff;
        --subtitle: #868686;
        --text: #ffffff;
    }

    html {
        width: 100%;
        overflow: hidden;
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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        text-align: center;
        background-color: var(--white);
    }

    h1 {
        font-size: 50px;
        color: var(--yellow)
    }

    a {
        text-decoration: none;
    }

    svg {
        color: var(--secondary-color);
        width: 40px;
        height: 40px;
    }
`