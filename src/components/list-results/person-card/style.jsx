import styled from "styled-components";
import { MediaSizes } from "../../../style/media-size";

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    padding: 15px;
    padding: 15px 0;
    background-color: var(--primary-color);
    margin-bottom: 10px;
    cursor: pointer;
        &:hover {
            box-shadow: 0 0 0px 2px var(--secondary-color);
        }
        @media(min-width: ${MediaSizes.mobile}) {
            justify-content: start;
            flex-direction: row;
            max-height: 195px;
        }
`

export const Cover = styled.img`
    width: 80px;
    height: 114px;
    object-fit: cover;
    margin: auto 15px;
`

export const Info = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column
`

export const Name = styled.h3`
    font-size: 30px;
    text-align: start;
`

export const JobAndMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
        @media (min-width: ${MediaSizes.mobile}) {
            flex-direction: row;
            margin-top: 10px
        }
`

export const Job = styled.h3`
    color: var(--subtitle);
    text-align: start;
`

export const Movies = styled.h3`
    font-family: inter;
    font-size: 15px;
    font-weight: 200;
    text-align: start;
    display: none;
    padding-left: 10px;
    border-left: 2px solid var(--secondary-color);
        @media (min-width: ${MediaSizes.mobile}) {
            display: block
        }
`