import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PageTitle = styled.h2`
    background-color: var(--secondary-color);
    padding: 7px 20px;
    margin: 50px 0 20px
`

export const ListMovies = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
` 


export const Movie = styled.div`
    width: 163px;
    background-color: var(--primary-color);
    margin: 20px 35px;
    position: relative;
`

export const MovieCover = styled.img`
    width: 100%;
    height: 256px;
`

export const MovieName = styled.h3`
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-3px)
`

export const LeadMoreButton = styled.a`
    font-size: 25px;
    color: var(--text);
    background-color: var(--secondary-color);
    padding: 10px 20px;
    margin-bottom: 30px;
    transition: 0.3s;
        &:hover {
            transform: scale(1.1)
        }
`