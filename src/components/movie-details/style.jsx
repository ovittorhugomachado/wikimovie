import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 100px 60px;
        @media (min-width: ${MediaSizes.tablet}) {
            flex-direction: row;
            align-items: start;
            margin-top: 80px;
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
    width: 163px;
    height: 256px;
`

export const MovieTime = styled.h3`
`

export const MovieCategory = styled.h4`
    margin-bottom: 20px
`

export const MovieReview = styled.h2`
    width: 168px;
    border: 2px solid var(--secondary-color);
    padding: 5px;
    font-size: 30px;
`

export const ContainerSinopse = styled.div`
    border-bottom: 2px solid rgb(30, 30, 30);
    margin-top: 20px;
    padding-bottom: 25px
`

export const ContainerRow = styled.div`
    display: flex;
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
    gap: 40px
  
`

export const Actor = styled.div`
    margin-top: 20px
`

export const PhotoActor = styled.img`
    width: 134px;
`

export const NameActor = styled.h3`
`
