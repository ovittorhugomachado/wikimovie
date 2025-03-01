import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const Main = styled.main`
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 20px 60px;
        @media (min-width: ${MediaSizes.mobile}) {
            margin: 50px 40px 60px;
        }
        @media (min-width: ${MediaSizes.tablet}) {
            flex-direction: row;
            align-items: start;
            margin-top: 80px;
        }
        @media (min-width: ${MediaSizes.desktopSmall}) {
            margin: 50px 60px 60px;
        }
        @media (min-width: ${MediaSizes.desktopLarge}) {
            margin: 50px 120px 60px;
        }
`

export const PageTitle = styled.h2`
    padding: 7px 20px;
    margin-bottom: 30px; 
    background-color: var(--secondary-color);
`

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerLeft = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
        @media (min-width: ${MediaSizes.tablet}) {
            margin-right: 80px;
        }
`

export const PhotoActor = styled.img`
    width: 213px;
    height: 320px;
    margin-bottom: 15px;
`

export const Birth = styled.h3`
    border-bottom: 2px solid var(--subtitle);
`
export const PlaceOfBirth = styled.h3`
`

export const Title = styled.h1`
    margin: 30px 0 10px;
`

export const Text = styled.p`
    font-family: inter;
    font-size: 20px;
    font-weight: 300;
    text-align: start;
    color: var(--text);
    margin-bottom: 30px;
`

export const ContainerMovies = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

export const Movie = styled.div`
    width: 110px; 
    margin-top: 20px;
`

export const MovieCover = styled.img`
    width: 114px;
    height: 180px;
`

export const MovieName = styled.h3`
    width: 100%;
    font-size: 25px
    font-weight: 500;
`

export const ListAllMovies = styled.ul`
    width: 100%;
    flex-direction: column;
    align-items: start;
    list-style-type: none;
`

export const ListItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    text-align: start;
    margin: 5px auto;
    padding: 5px 20px;
    background-color: var(--primary-color);
    color: var(--text);   
`

export const Year = styled.h4`
    width: 60px;
    padding-right: 10px;
    color: var(--text);
    border-right: 2px solid var(--secondary-color);
`

export const Character = styled.h6`
    font-family: inter;
    font-size: 15px;
    font-weight: 100;
    margin-left: 0px;
`

export const ButtonFilmography = styled.button`
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
`

export const Loading = styled.img`
    width: 350px;
    margin: auto;
`

export const Error = styled.img`
    width: 350px
    margin: auto; 
`