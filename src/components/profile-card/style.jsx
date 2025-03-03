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
    @media(min-width: ${MediaSizes.tablet}) {
                    display: none  ;  
                }
`

export const Image = styled.img`
    width: 213px;
    height: 320px;
    margin-bottom: 15px;
`

export const Birthday = styled.h5`
`
export const City = styled.h5`
    color: var(--subtitle);
    border-top: 2px solid var(--subtitle);
`