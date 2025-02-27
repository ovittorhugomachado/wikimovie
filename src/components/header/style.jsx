import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const DivHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-bottom: 10px;
    top: 0;
    background-color: var(--primary-color);
    @media (min-width: ${MediaSizes.desktopSmall}) {
        padding-bottom: 30px;
    }
    &.headerSmall {
            height: 110px;
                @media (min-width: ${MediaSizes.tablet}) {
                    height: 150px;
                }
                @media (min-width: ${MediaSizes.desktopSmall}) {
                    height: 290px;
                }       
                @media (min-width: 1441px) {
                    height: 240px;
                }       
    }
`

export const DivLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px 0;
        @media (min-width: ${MediaSizes.tablet}) {
                    padding-top: 30px;  
                }
        @media (min-width: ${MediaSizes.desktopSmall}) {
                    flex-direction: column;  
                }
`

export const Logo = styled.img`

    width: 105px;
        @media (min-width: ${MediaSizes.tablet}) {
            width: 135px;
        }
        @media (min-width: ${MediaSizes.desktopSmall}) {
            width: 165px;
        }
`

export const Nav = styled.nav`
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

`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 0 10px;
`

export const Li = styled.li`
    display: inline-block;
    flex-grow: 1;
`

export const Button = styled.div`
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
`


export const HamburgerContainer = styled.div`
    width: 30px;
    height: 24px;
    cursor: pointer;
    transform: translateY(60%);
    margin-right: 20px;
        &:hover span:not(.active),
        &:hover span::before,
        &:hover span::after {
            background-color: var(--secondary-color);
        }   
        @media (min-width: ${MediaSizes.tablet}) {
                    transform: translateY(70%);
                }
        @media (min-width: ${MediaSizes.desktopSmall}) {
                    display: none;
        }
    `;

export const HamburgerSpan = styled.span`
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--text);
    position: absolute;
    transition: all 0.5s ease;
        &::before,
        &::after {
            content: '';
            width: 100%;
            height: 3px;
            background-color: var(--text);
            position: absolute;
            transition: all 0.5s ease;
        }
        &::before {
            top: -8px;
            left: 0;
        }
        &::after {
            top: 8px;
            left: 0;
        }
        &.active {
            background: transparent;
        }

        &.active::before {
            transform: rotate(45deg);
            top: 0;
        }

        &.active::after {
            transform: rotate(-45deg);
            top: 0;
        }

`;

