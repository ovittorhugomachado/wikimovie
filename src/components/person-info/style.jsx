import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const PageTitle = styled.h1`
    display: none;
        @media(min-width: ${MediaSizes.tablet}) {
            display: inline-block;  
        }
`

export const Title = styled.h2`
    margin: 30px auto;
`

export const TextBiography = styled.p`
    font-size: 20px;
    margin-bottom: 70px
`

export const Text = styled.p`
`

export const ContainerMovies = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

export const MovieCover = styled.img`
    width: 114px;
    height: 180px;
        &:hover {
            box-shadow: 0 0 0px 2px var(--secondary-color);
        }
`

export const MovieName = styled.h3`
`

export const MovieYear = styled.h3`
    padding-right: 10px;
    border-right: 2px solid var(--secondary-color)
`


export const ListItem = styled.li`
    min-height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    text-align: start;
    padding: 10px 0px 10px 20px;
    background-color: var(--primary-color);
    color: var(--text);
    margin-bottom: 7px;
        &:hover {
            box-shadow: 0 0 0px 2px var(--secondary-color);
        }
`

export const List = styled.ul`
    width: 100%;
    flex-direction: column;
    align-items: start;
    list-style-type: none;
    gap: 10px;
    margin-top: 30px;
`