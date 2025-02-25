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
    margin: 50px 0 20px;
    text-transform: uppercase;
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
    margin: 20px 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start
`

export const MovieCover = styled.img`
    width: 100%;
    height: 256px;
`

export const MovieName = styled.h3`
    width: 100%;
    min-height: 40px;
    max-height: 75px;
    overflow: hidden;
    margin: auto;
    padding: 10px;
    overflow-wrap: break-word;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    
`

export const MovieScore = styled.span`
    width: 53px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-main);
    border: 3px solid var(--secondary-color);
    border-radius: 50%;
    position: absolute;
    right: -18px;
    top: 217px;
    color: var(--text);
    font-size: 20px;
    font-weight: 900;
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

export const LoadingOrError = styled.h1`
    margin: auto
`