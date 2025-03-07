import styled from "styled-components";
import { MediaSizes } from "../../../style/media-size";

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    padding: 15px;
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
    margin-right: 10px;
`

export const Info = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column
`

export const Name = styled.h3`
    font-size: 30px;
    text-align: center;
        @media(min-width: ${MediaSizes.mobile}) {
            text-align: start;
        }
`


export const Year = styled.h3`
    font-size: 20px;
    color: var(--subtitle);
    text-align: center;
        @media(min-width: ${MediaSizes.mobile}) {
            text-align: start;
        }
`

export const Sinopse = styled.p`
    display: none;
        @media (min-width: ${MediaSizes.mobile}) {
            display: block;
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical;
            overflow: hidden; 
            text-overflow: ellipsis; 
            margin: 0;
            padding-right: 40px;
            line-height: 1.4;
        }
`