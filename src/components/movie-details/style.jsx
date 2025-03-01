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
    background-color: var(--secondary-color);
    padding: 7px 20px;
    margin-bottom: 30px; 
    @media (min-width: ${MediaSizes.tablet}) {
            display: none;
        }
`

export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const TitleInfoMovie = styled.h2`
    background-color: var(--secondary-color);
    padding: 7px 20px;
    display: none;
        @media (min-width: ${MediaSizes.tablet}) {
            display: inline-block;
            margin-bottom: 30px; 
        }
`

export const ContainerMovie = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
        @media (min-width: ${MediaSizes.tablet}) {
            margin-right: 80px;
        }
`

export const MovieCover = styled.img`
    width: 213px;
    height: 320px;
    margin-bottom: 15px;
`

export const MovieTime = styled.h3`
`

export const ContainerCategory = styled.div`
    margin-bottom: 20px;
`

export const Genre = styled.h4`
    display: inline-block;
    padding: 0 5px;
    text-align: start;
`

export const MovieReview = styled.h2`
    width: 213px;
    border: 2px solid var(--secondary-color);
    padding: 5px;
    font-size: 30px;
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

export const ContainerTrailer = styled.div`
`

export const ContainerSinopse = styled.div`
    margin-top: 20px;
    padding-bottom: 25px;
        @media (min-width: ${MediaSizes.desktopSmall}) {
            padding: 0 50px 25px
        }
`

export const ContainerRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 100px;
    border-bottom: 2px solid rgb(30, 30, 30);
    padding: 20px 0;
    margin-bottom: 20px;
`

export const Director = styled.div`

`

export const Title = styled.h1`
    font-size: 35px;
    margin-bottom: 10px;
`

export const Text = styled.p`
    color: var(--text);
    font-size: 20px;
    font-family: inter;
    font-weight: 300;
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
    color: var(--text);
    background-color: var(--primary-color);
    padding: 10px 30px;
    transform: translateY(30px);
    transition: 0.2s;
        &:hover {
            color: var(--secondary-color)
        }
`

export const Actor = styled.div`
    margin-top: 20px;
    width: 110px
`

export const PhotoActor = styled.img`
    width: 84px;
    height: 120px;
`

export const NameActor = styled.h3`
    width: 100%
`

export const Charactername = styled.h5`
    color: var(--text);
    font-family: inter;
    font-size: 20px;
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
