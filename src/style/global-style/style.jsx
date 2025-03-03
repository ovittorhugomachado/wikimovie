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


    h1 {
        font-size: 45px;
        color: var(--text);
        background-color: var(--secondary-color);
        padding: 7px 20px;
        margin-bottom: 30px; 
            &.profile-card {
                @media(min-width: ${MediaSizes.tablet}) {
                    display: none  ;  
                }
            }
            &.person-info {
                    display: none;  
                @media(min-width: ${MediaSizes.tablet}) {
                    display: block;  
                }
            }
        
    }

    h2 {
        font-size: 45px;
        color: var(--text);
        margin: 30px auto 10px;
            &.button-menu {
                display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: var(--text);
        background-color: var(--background-button);
        white-space: nowrap;
        padding: 5px 15px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        margin: 0;
        transition: 0.3s ease-in-out;
            &:hover {
                background-color:var(--secondary-color);
                color: var(--primary-color);
            }
            &.active {
                color: var(--text);
                background-color: var(--secondary-color);
                &:hover {
                    color: var(--text)
                }
            }
        @media (min-width: ${MediaSizes.mobile}) {
                            font-size: 25px;
                        }
                    }
    }

    h3 {
        color: var(--text);
        font-size: 25px;
        font-weight: 500;
            &.movie-year {
                width: 55px;
                display: inline;
                margin: 0;
                padding-right: 10px;
                border-right: 2px solid var(--secondary-color);

            }
        
    }

    h4 {
        font-size: 25px;
        color: var(--subtitle)
    }

    h5 {
        font-size: 25px;
        color: var(--text);
            &.subtitle {
                color: var(--subtitle);
                border-top: 2px solid var(--subtitle);
            }
        
    }

    p {
        font-family: inter;
        font-size: 16px;
        
        font-weight: 300;
        text-align: start;
        color: var(--text);
            &.biography {
                margin: 10px 0 30px;
                font-size: 20px;
            }
    }

    img {
            &.profile-card {
                width: 213px;
                height: 320px;
                margin-bottom: 15px;
            }
            &.cover-small {
                    width: 114px;
                    height: 180px;
            }
            &.logo {
                width: 105px;
                    @media (min-width: ${MediaSizes.tablet}) {
                        width: 135px;
                }
                    @media (min-width: ${MediaSizes.desktopSmall}) {
                        width: 165px;
                }
            }
    }

    a {
        text-decoration: none;
        cursor: pointer;
            &.movie {
                width: 100%;
                    &:hover {
                         box-shadow: 0 0 5px var(--secondary-color);
                    }
            }

    nav {
        width: 100%;
    top: 160px;
    opacity: 0;
    transform: translateY(40px);
    visibility: hidden; 
    transition: opacity 0.3s ease, visibility 0.3s ease;
        &.menuActive {
            opacity: 1;
            visibility: visible;
            transform: translateY(-5px)
        }
        @media (min-width: ${MediaSizes.desktopSmall}) {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
        }

    }
    
    button {
        border: none;
        display: inline-block;
        font-size: 25px;
        font-weight: 700;
        color: var(--background-main);
        background-color: var(--text);
        cursor: pointer;
        padding: 10px 30px;
        transform: translateY(30px);
        transition: 0.2s;
            &:hover {
                transform: scale(1.05) translateY(28px);
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
                color: var (--background-main);
                transform: scale(1); 
            }
        }
    }

    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        padding: 0 10px;
            &.container-list-movies {
                    width: 100%;
                    flex-direction: column;
                    align-items: start;
                    list-style-type: none;
                    gap: 10px;
                    margin-top: 40px
            }
            
    }

    li {
        display: inline-block;
        flex-grow: 1;
        width: auto;
        min-height: 50px;
            &.list-movies {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 30px;
                text-align: start;
                padding: 10px 0px 10px 20px;
                background-color: var(--primary-color);
                color: var(--text);
            };
            &.list-item-menu {
                    display: inline-block;
                    flex-grow: 1;
                    list-style-type: none
            }
    }

    
`