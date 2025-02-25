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
        --secondary-color: #005AF2;
        --background-main: #141414;
        --background-button: #222121;
        --name-movie: #ffffff;
        --subtitle:rgb(68, 68, 68);
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
        flex-direction: column;
        justify-content:space-between;
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
        font-size: 25px;
        color: var(--text)
    }

    h4 {
        font-size: 25px;
        color: var(--subtitle)
    }

    a {
        text-decoration: none;
        cursor: pointer;
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
            cursor: pointer;
        }
        &.arrow-right {
            cursor: pointer;
        }
        &.button {
            color: var(--text);
        }
        &.social-media {
            color: var(--text);
                &:hover {
                    transform: scale(1); 
                    color: var(--secondary-color)    
                }
        }
    }
`