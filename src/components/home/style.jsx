import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;


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