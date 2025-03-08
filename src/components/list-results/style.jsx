import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 285px;
`

export const TitlePage = styled.h5`
    font-family: inter;
    font-size: 23px;
    font-weight: 200;
    margin-top: 12px;
`

export const TitleBold = styled.span`
    font-family: inter;
    font-size: 23px;
    font-weight: 700
`

export const FilterContainer = styled.div`
    width: 100%; 
    max-width: 400px;
    height: 85px;  
    display: flex; 
    gap: 10px;
    margin: 10px auto;
`

export const Filter = styled.div`
    flex: 1;
    border: 2px solid var(--text);
    padding: 5px 10px;
    margin: 10px auto;
    cursor: pointer;
        &:hover {
            background-color: var(--secondary-color);
        }
        &.active {
            background-color: var(--secondary-color);
            border: none;
        }
        @media(min-width: ${MediaSizes.desktopSmall}) {
            display: block;
        }
        &.show {
            display: block;
        }
`

export const FilterItemTitle = styled.h3`
    font-weight: 600
`

export const FilterItemSubtitle = styled.p`
    text-align: center;
    font-family: inter;
    font-weight: 200
`

export const List = styled.ul`
    width: 100%;
    margin:  20px auto;
        @media(min-width: ${MediaSizes.desktopSmall}) {
            padding-left: 20px;
        }
`

