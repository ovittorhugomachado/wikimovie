import styled from "styled-components";

export const Container = styled.div`
    display: flex
`

export const TitlePage = styled.h2`
    font-weight: 200;
    font-size: 40px
`

export const TitleBold = styled.span`
    font-weight: 700
`

export const FilterContainer = styled.div`
    margin: 40px auto
`

export const Filter = styled.div`
    border: 2px solid var(--text);
    padding: 5px 10px;
    margin: 10px auto;
    display: none;
        &.show {
            display: block;
        }
`

export const Title = styled.h2`
`

export const FilterItemTitle = styled.h3`
    font-size: 30px;
    font-weight: 600
`

export const FilterItemSubtitle = styled.h5`
    font-family: inter;
    font-weight: 200
`

export const List = styled.ul`
`

export const ListItem = styled.li`
`

