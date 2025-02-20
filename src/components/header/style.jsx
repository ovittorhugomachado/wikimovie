import styled from "styled-components";

export const DivHeader = styled.header`
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    background-color: var(--primary-color);
        background-image: linear-gradient(transparent 19px, #003838 20px), 
                          linear-gradient(90deg, transparent 19px, #003838 20px);
        background-size: 20px 20px;
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
    color: var(--primary-color);
    background-color: var(--secondary-color);
    white-space: nowrap;
    padding: 5px 15px;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s ease-in-out;
        &:hover {
            background-color:rgb(0, 100, 72)
        }
        &.active {
            background-color: transparent;
            color: var(--yellow);
            border: 2px solid var(--yellow);
        }
`