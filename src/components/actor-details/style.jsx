import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const Main = styled.main`
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px 20px 60px;
        @media (min-width: ${MediaSizes.mobile}) {
            margin: 50px 40px 60px;
        }
        @media (min-width: ${MediaSizes.tablet}) {
            flex-direction: row;
            align-items: start;
            margin-top: 50px;
        }
        @media (min-width: ${MediaSizes.desktopSmall}) {
            margin: 50px 60px 60px;
        }
        @media (min-width: ${MediaSizes.desktopLarge}) {
            margin: 50px 120px 60px;
        }
`


export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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


export const Loading = styled.img`
    width: 350px;
    margin: auto;
`

export const Error = styled.img`
    width: 350px;
    margin: auto; 
`