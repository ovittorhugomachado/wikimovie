import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const PageTitle = styled.h1`
    padding: 7px 20px;
    margin-bottom: 30px;
    display: none;
    @media (min-width: ${MediaSizes.tablet}) {
            display: none;
        }
`

export const TitleInfoMovie = styled.h1`
    padding: 7px 20px;
    display: none;
        @media (min-width: ${MediaSizes.tablet}) {
            display: inline-block;
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
    margin: 0 auto 20px;
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

export const Title = styled.h2`
    margin-bottom: 20px;
`

export const Year = styled.h2`
    display: none;
    font-size: 25px;
    color: var(--subtitle);
        @media (min-width: ${MediaSizes.desktopSmall}) {
            display: block;
        }
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

export const ContainerPersons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
`

export const Person = styled.div`
    margin-top: 20px;
    width: 110px;
`

export const Photo = styled.img`
    width: 84px;
    height: 120px;
    margin: auto;
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
