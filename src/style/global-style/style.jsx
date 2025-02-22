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
        overflow: auto;
    }

    body {
        min-height: 100vh; 
        width: 100%;
        margin: 0 auto;
        background-color: var(--background-main);
        overflow-y: auto; 
    }

    #root {
        min-height: 100vh;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        text-align: center;
        background-color: var(--background-main);
    }


    h1 {
        font-size: 45px;
        color: var(--text)
    }
    h2 {
        font-size: 35px;
        color: var(--text)
    }
    h3 {
        font-size: 20px;
        color: var(--text)
    }

    a {
        text-decoration: none;
    }

    svg {
        color: var(--secondary-color);
        width: 40px;
        height: 40px;
        transition: 0.3s;
            &:hover {
                transform: scale(1.2);     
            }
        &.arrow-left {
            position: absolute;
            left: -3px;
            top: 100px;
            transform: translateY(-50%);
            cursor: pointer;
            z-index: 5;
                &:hover {
                    transform: translateY(-50%) scale(1.2);     
                }
        }
        &.arrow-right {
            position: absolute;
            right: -3px;
            top: 100px;
            transform: translateY(-50%);
            cursor: pointer;
            z-index: 5;
                &:hover {
                    transform: translateY(-50%) scale(1.2);     
                }
                
        }

    }
`