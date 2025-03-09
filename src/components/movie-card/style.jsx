import styled from "styled-components";

export const Movie = styled.div`
    width: 163px;
    height: 336px;
    background-color: var(--primary-color);
    margin: 20px 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
        &:hover {
            box-shadow: 0 0 0px 2px var(--secondary-color);
        }
`

export const MovieCover = styled.img`
    width: 100%;
    height: 256px;
`

export const MovieName = styled.h3`
    width: 100%;
    min-height: 40px;
    max-height: 75px;
    overflow: hidden;
    margin: auto;
    padding: 10px;
    overflow-wrap: break-word;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`

export const MovieScore = styled.span`
    width: 53px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-main);
    border: 3px solid var(--secondary-color);
    border-radius: 50%;
    position: absolute;
    right: -18px;
    top: 217px;
    color: var(--text);
    font-size: 20px;
    font-weight: 900;
`