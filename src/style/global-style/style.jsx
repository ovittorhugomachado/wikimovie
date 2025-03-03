import { createGlobalStyle } from "styled-components";
import { MediaSizes } from "../media-size";

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

    main {
        &.details {
            max-width: 1400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 50px 20px 60px;
                @media (min-width: ${MediaSizes.mobile}) {
                    margin: 50px 40px 60px;
                }
                @media (min-width: ${MediaSizes.tablet}) {
                    flex-direction: row;
                    align-items: start;
                    margin-top: 50px;
                }
                @media (min-width: ${MediaSizes.desktopSmall}) {
                    margin: 50px 60px 60px;
                }
                @media (min-width: ${MediaSizes.desktopLarge}) {
                    margin: 50px 120px 60px;
                }
        }
    }   

    h1 {
        font-size: 45px;
        color: var(--text);
        background-color: var(--secondary-color);
        padding: 7px 20px;
        margin-bottom: 30px;
    }

    h2 {
        font-size: 45px;
        color: var(--text);
    }

    h3 {
        color: var(--text);
        font-size: 25px;
        font-weight: 500;
    }

    h4 {
        font-size: 25px;
        color: var(--subtitle)
    }

    h5 {
        font-size: 25px;
        color: var(--text);

    }

    p {
        font-family: inter;
        font-size: 16px;
        font-weight: 300;
        text-align: start;
        color: var(--text);
    }

    img {
            &.loading {
                width: 350px;
                margin: auto;
            }
            &.error {
                width: 350px;
                margin: auto;
            }
    }

    a {
        text-decoration: none;
        cursor: pointer;
            &.movie {
                    width: 110px; 
                    margin-top: 20px;
            }
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
                    
                    color: var(--secondary-color)    
                }
        }
        &.youtube {
            width: 80px;
            color: var(--background-main);
            &:hover {
                color: var(--background-main);
                transform: scale(1); 
            }
        }
    }
`