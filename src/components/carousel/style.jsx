import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
`

export const CategoryTitles = styled.h1`
    margin-bottom: 25px;

`

export const DivMovies = styled.div`
    width: 95%;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    gap: 12px;
    overflow: hidden;
    position: relative;

`

export const DivMovie = styled.div`
    width: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    width: 128px;
    height: 200px;
    transition: 0.3s;
        &.active {
            transform: scale(1.3) translateX(7px);
            z-index: 2
        }
`

export const InfoMovie = styled.div`
    width: 300px;
    display: none;
        &.active {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
`

export const MovieName = styled.h2`
    margin-top: 40px;
`

export const MovieCategory = styled.h3`

`

export const MovieReview = styled.h2`
    width: 120px;
    border: 2px solid var(--secondary-color);
    padding: 5px;
    font-size: 25px;

`

