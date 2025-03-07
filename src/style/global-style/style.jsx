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
        &.home {
            margin-top: 50px;
            width: 100%;

        }
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
        &.list {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 40px auto;
        }
        &.search-result {
            width: 100%;
            max-width: 1400px;
            flex-grow: 1;
            padding: 20px
        }
    }   

    div {
        &.list {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 0 10px 40px;
        }
        &.container-buttons {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 0 40px 20px;
                @media (min-width: ${MediaSizes.tablet}) {
                    flex-direction: row;
        }
    }

    h1 {
        font-size: 50px;
        color: var(--text);
        -webkit-text-stroke: 1px black;
        text-stroke: 1px black;
        text-shadow: 2px 2px var(--secondary-color);

    }

    h2 {
        font-size: 35px;
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
        font-size: 20px;
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
        &.button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 270px;
            font-size: 25px;
            font-weight: 700;
            color: var(--background-main);
            background-color: var(--text);
            padding: 10px 20px 10px 40px;
            transition: 0.2s;
                &:hover {
                    transform: scale(1.05)
                }
            &.previous-page {
                padding: 10px 40px 10px 20px;
            }
        }
    }
    
    svg {
        color: var(--primary-color);
        width: 40px;
        height: 40px;
        transition: 0.3s;
            &:hover {
                transform: scale(1.2);     
            }
        &.button-search {
            color: var(--primary-color);
            background-color: var(--text);
            height: 100%;
            border: 2px solid var(--text);
            width: 60px;
            cursor: pointer;
            transform: scale(1);
                &:hover {
                    background-color: var(--secondary-color);
                    border: 2px solid var(--secondary-color); 
                }
        }
        &.disable {
            opacity: 0.2;
                &:hover {
                    transform: scale(1);
                    cursor: auto;
                }
        }
        &.arrow-left {
            cursor: pointer;
            color: var(--secondary-color);

        }
        &.arrow-right {
            cursor: pointer;
            color: var(--secondary-color);
        }
        &.button {
            color: var(--background-main);
        }
        &.social-media {
            color: var(--text);
        }
        &.youtube {
            width: 80px;
            color: var(--background-main);
            &:hover {
                color: var(--background-main);
                transform: scale(1); 
            }
        }
        &.filter-arrow {
            width: 30px;
            font-size: 25px;
            color: var(--text);
            cursor: pointer;
            transition: 0.7s;
            transform: translateY(10px);
                @media(min-width: ${MediaSizes.desktopSmall}) {
                    display: none;
                }
                &:hover {
                    color: var(--secondary-color);
                }
                &.active {
                    transform: rotate(180deg) translateY(-9px);
                }
        }
    }
`

