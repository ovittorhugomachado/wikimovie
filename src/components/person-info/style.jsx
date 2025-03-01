import styled from "styled-components";

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    margin: 30px auto 10px;

`

export const Text = styled.p`
    font-family: inter;
    font-size: 20px;
    font-weight: 300;
    text-align: start;
    color: var(--text);
    margin-bottom: 30px;
`

export const PlayTrailer = styled.a`
    color: var(--background-main);
    background-color: var(--text);
    padding: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    transition: 0.2s;
        &:hover {
            transform: scale(1.05); 
        }
`

export const Direction = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 10px;
    border-bottom: 2px solid rgb(30, 30, 30);
    padding: 20px 0;
    margin: 30px auto 20px;
`

export const Crew = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center
`

export const ContainerMovies = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

export const Movie = styled.div`

`

export const MovieCover = styled.img`
    width: 114px;
    height: 180px;
`

export const ListItem = styled.li`
    min-height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    text-align: start;
    padding-left: 20px;
    background-color: var(--primary-color);
    color: var(--text);   
`

export const MovieName = styled.h3`
    width: 100%;
    font-weight: 500;
    font-size: 20px
`

export const Year = styled.h4`
    width: 60px;
    padding-right: 10px;
    color: var(--text);
    border-right: 2px solid var(--secondary-color);
`

export const ListAllMovies = styled.ul`
    width: 100%;
    flex-direction: column;
    align-items: start;
    list-style-type: none;
    gap: 10px;
    margin-top: 40px
`

export const Character = styled.h6`
    font-family: inter;
    font-size: 15px;
    font-weight: 100;
    margin-left: 0px;
`