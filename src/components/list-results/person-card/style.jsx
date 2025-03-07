import styled from "styled-components";
import { MediaSizes } from "../../../style/media-size";

export const List = styled.ul`
    width: 100%;
    min-width: 300px;
    margin:  20px auto;
    padding-left: 20px;
`

export const ListItem = styled.li`
    display: flex;
    padding: 15px 0;
    background-color: var(--primary-color);
    margin-bottom: 10px
`

export const Cover = styled.img`
    width: 80px;
    height: 114px;
    object-fit: cover;
    margin: auto 20px;

`

export const Info = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column
`

export const Name = styled.h3`
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
`

export const Movies = styled.h3`
    text-align: start;
    display: none;
    padding-left: 10px;
    border-left: 2px solid var(--secondary-color);
        @media (min-width: ${MediaSizes.mobile}) {
            display: block
        }
`