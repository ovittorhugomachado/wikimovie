import styled from "styled-components";

export const DivHeader = styled.header`
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    background-color: var(--primary-color);
        @media ()
`

export const Logo = styled.img`
    transform: translateY(20px);
    width: 175px;
`

export const Nav = styled.nav`
    width: 100%;
    position: absolute;
    top: 160px;
`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const Li = styled.li`
    display: inline-block;
`

export const Button= styled.a`
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
        }
`