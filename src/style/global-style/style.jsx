import { createGlobalStyle } from "styled-components";
import { MediaSizes } from "../media-size";

export const Style = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: big shoulders display, sans-serif;
        letter-spacing: 1px;
        transition: background-color 0.3s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        --primary-color: #0C0C0C;
        --secondary-color: #005AF2;
        --background-main: #141414;
        --background-button: #222121;
        --name-movie: #ffffff;
        --subtitle:rgb(158, 158, 158);
        --text: #ffffff;
    }

    html {
        width: 100%;
        overflow: auto;
    }

    body {
        width: 100%;
        min-height: 100vh; 
        margin: 0 auto;
        background-color: var(--background-main);
        overflow-y: auto; 
    }

    #root {
        width: 100%;
        min-height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        text-align: center;
        background-color: var(--background-main);
    }

    main {
        width: 100%;
        max-width: 1400px;
        padding: 20px;
        &.home {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 1800px;
            padding: 50px 0
        }
        &.details {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
                @media (min-width: ${MediaSizes.tablet}) {
                    flex-direction: row;
                    align-items: start;
                    padding: 20px 50px;
                }
        }
        &.list {
            max-width: 1600px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        &.search-result {
            max-width: 1400px;
            flex-grow: 1;
        }
    }   

    div {
        &.list {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
    }

    h1 {
        font-size: 50px;
        color: var(--text);
        -webkit-text-stroke: 1px black;
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
        font-size: 20px;
        color: var(--subtitle)
    }

    h5 {
        font-size: 18px;
        color: var(--text);
    }

    p {
        font-family: inter;
        font-size: 16px;
        font-weight: 300;
        text-align: start;
        color: var(--text);
    }

    b {
        font-family: inter;
        margin: 0 10px;
    }

    img {
            &.error {
                width: 230px;
                margin: auto;
            }
    }

    button {
        border: none;
        font-size: 25px;
        font-weight: 800;
        background-color: var(--text);
        transition: 0.3s;
        padding: 10px 20px;
        cursor: pointer;
        margin: 20px 0;
            &:hover {
                transform: scale(1.05);
            }
    }

    a {
        text-decoration: none;
        cursor: pointer;
            &.movie {
                    width: 110px; 
                    margin-top: 20px;
            }
        &.crew {
            margin-left: 0;
            margin-right: 0;
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
        &.icon-input-search {
            width: 20px;
            height: 20px;
            color: var(--text);
            margin-left: 7px;
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

