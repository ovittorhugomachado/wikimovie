import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const ContainerProfile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
        @media (min-width: ${MediaSizes.tablet}) {
            margin:  30px 80px 0 0;
        }
`

export const Name = styled.h1`
    padding: 7px 20px;
    margin-bottom: 30px; 
    background-color: var(--secondary-color);
        @media(min-width: ${MediaSizes.tablet}) {
            display: none    
        }
`

export const Cover = styled.img`
    width: 213px;
    height: 320px;
    margin-bottom: 15px;
`

export const Info1 = styled.h3`
    border-bottom: 2px solid var(--subtitle);
`
export const Info2 = styled.h3`
    color: var(--subtitle)
`

export const Info3 = styled.h3`
`