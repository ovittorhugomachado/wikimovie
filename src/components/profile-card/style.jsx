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
            width: 190px;
        }
`

export const PageTitle = styled.h1`
    margin-bottom: 20px;
    @media(min-width: ${MediaSizes.tablet}) {
                    display: none  ;  
                }
`

export const Image = styled.img`
    width: 213px;
    height: 320px;
    margin-bottom: 15px;
`

export const Info1 = styled.h5`
`
export const Info2 = styled.h5`
    color: var(--subtitle);
    border-top: 2px solid var(--subtitle);
`

export const Info3 = styled.h3`
    font-size: 35px;
    font-weight: 600;
    width: 110%;
    color: var(--text);
    border: 2px solid var(--secondary-color);
    padding: 5px 20px;
    margin-top: 20px;
    max-width: 290px;
`