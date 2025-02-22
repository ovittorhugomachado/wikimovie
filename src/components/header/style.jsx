import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const DivHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-bottom: 60px;
    position: absolute;
    top: 0;
    background-color: var(--primary-color);
        &.headerSmall {
            height: 180px;
                @media (min-width: ${MediaSizes.tablet}) {
                    height: 200px;
                }
        }
`

export const Logo = styled.img`
    margin-top: 20px;
    width: 145px;
        @media (min-width: ${MediaSizes.tablet}) {
            width: 175px;
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
            opacity: 1; /* Torna o elemento visível */
            visibility: visible; /* Mostra o elemento */
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

export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--text);
    background-color: var(--background-button);
    white-space: nowrap;
    padding: 5px 15px;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s ease-in-out;
        &:hover {
            background-color:var(--secondary-color);
            color: var(--primary-color);
        }
        &.active {
            color: var(--secondary-color);
            border: 2px solid var(--secondary-color);
            &:hover {
                color: var(--primary-color)
            }
        }
`


export const HamburgerContainer = styled.div`
    width: 30px;
    height: 24px;
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(130px);
        &:hover span:not(.active),
        &:hover span::before,
        &:hover span::after {
            background-color: var(--secondary-color);
        }   
        @media (min-width: ${MediaSizes.tablet}) {
                    transform: translateY(150px);
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

