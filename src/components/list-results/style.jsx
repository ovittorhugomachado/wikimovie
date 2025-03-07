import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 285px;
        @media(min-width: ${MediaSizes.desktopSmall}) {
            flex-direction: row;
        }
`

export const TitlePage = styled.h2`
    font-weight: 200;
    margin-top: 20px;
`

export const TitleBold = styled.span`
    font-weight: 700
`

export const FilterContainer = styled.div`
    margin: 10px auto;
    width: 270px;
`

export const Filter = styled.div`
    border: 2px solid var(--text);
    padding: 5px 10px;
    margin: 10px auto;
    display: none;
        @media(min-width: ${MediaSizes.desktopSmall}) {
            display: block;
        }
        &.show {
            display: block;
        }
`

export const Title = styled.h3`
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
    min-width: 300px;
    width: 100%;
    margin:  20px auto;
        @media(min-width: ${MediaSizes.desktopSmall}) {
            padding-left: 80px
        }
`

export const ListItem = styled.li`
    display: flex;
    padding: 15px 0;
`

export const Cover = styled.img`
    width: 80px;
    height: 114px;
    object-fit: cover;
    margin-left: 10px;
    margin-right: 15px;
`

export const Info = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column
`

export const ItemName = styled.h3`
    text-align: start;
`

export const JobAndMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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

