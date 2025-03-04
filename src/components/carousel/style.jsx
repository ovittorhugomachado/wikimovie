import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
`

export const ButtonLeft = styled.button`
    height: 220px;
    width: 40px;
    border: none;
    background-color: var(--background-main);
    position: absolute;
    left: 0px;
    z-index: 2;
    transition: 0.3s;
    display: flex
    justify-content: start;
    align-items: center;
`
export const ButtonRight = styled.button`
    height: 220px;
    width: 40px;
    border: none;
    background-color: var(--background-main);
    position: absolute;
    right: 0px;
    z-index: 2;
    transition: 0.3s;
    display: flex
    justify-content: start;
    align-items: center;
`

export const CategoryTitles = styled.h1`
    border-bottom: 2px solid var(--secondary-color);
    padding: 0 20px;
    margin: 0 30px 25px
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
        transition: 0.3s;
        &.active {
            transform: scale(1.28) translateX(-47%);
            z-index: 2;
            opacity: 1;
        }
`
export const Image = styled.img`
    width: 128px;
    height: 200px;
    transition: 0.3s;
    opacity: 0.3;
        &:hover {
            box-shadow: 0 0 0px 2px var(--secondary-color);
        }
        &.active {
            transform: scale(1.28);
            z-index: 2;
            opacity: 1;
                &:hover {
                    box-shadow: 0 0 0px 2px var(--secondary-color);
                }
        }
`

export const InfoMovie = styled.div`
    width: 270px;
    display: none;
    margin-bottom: 50px;
        &.active {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @media (min-width: ${MediaSizes.mobile}) {
        width: 390px;
        }
        @media (min-width: ${MediaSizes.tablet}) {
        width: 650px;
        }
        @media (min-width: ${MediaSizes.desktopSmall}) {
        width: 750px;
        }
`

export const MovieName = styled.h2`
    margin-top: 40px;
`

export const Year = styled.h3`
    color: var(--subtitle)
`

export const MovieReview = styled.h2`
    width: 168px;
    border: 2px solid var(--text);
    padding: 5px;
    font-size: 25px;
`

