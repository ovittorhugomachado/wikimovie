import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const ContainerMovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PageTitle = styled.h1`
    padding: 7px 20px;
    margin-bottom: 30px;
    display: none;
    @media (min-width: ${MediaSizes.tablet}) {
            display: none;
        }
`

export const TitleInfoMovie = styled.h1`
    font-size: 60px;
    text-shadow: 2px 2px var(--subtitle);
    padding: 7px 20px;
    display: none;
        @media (min-width: ${MediaSizes.tablet}) {
            display: inline-block;
            margin-bottom: 30px; 
        }
`

export const PlayTrailer = styled.a`
    max-width: 290px;
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

export const ContainerSinopse = styled.div`
    margin-top: 20px;
    padding-bottom: 25px;
        @media (min-width: ${MediaSizes.desktopSmall}) {
            padding: 0 50px 25px
        }
`

export const ContainerCrew = styled.div`
    display: flex;
    gap: 10px;
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

export const Title = styled.h2`
    margin-bottom: 20px;
`

export const Text = styled.p`
    color: var(--text);
    font-size: 20px;
    font-family: inter;
    font-weight: 300;
    margin-bottom: 40px;
        &.sinopse {
            text-align: start;
        }
`

export const ContainerActors = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`

export const ShowActors = styled.a`
    display: inline-block;
    font-size: 25px;
    font-weight: 700;
    color: var(--background-main);
    background-color: var(--text);
    padding: 10px 30px;
    transform: translateY(30px);
    transition: 0.2s;
        &:hover {
            transform: scale(1.05) translateY(28px);
        }
`

export const Actor = styled.div`
    margin-top: 20px;
    width: 110px
`

export const Photo = styled.img`
    width: 84px;
    height: 120px;
        &:hover {
            box-shadow: 0 0 0px 2px var(--secondary-color);
        }
`

export const NameActor = styled.h3`
    width: 100%;
    font-weight: 500;
    font-size: 20px
`

export const Charactername = styled.h5`
    color: var(--text);
    font-family: inter;
    font-size: 16px;
    font-weight: 200;
`

export const Loading = styled.img`
    margin: auto;
    width: 350px
`

export const Error = styled.img`
    margin: auto;
    width: 350px
`
