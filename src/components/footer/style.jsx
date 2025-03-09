import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const Container = styled.footer`
    width: 100%;
    bottom: 0;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    padding-bottom: 30px;
`

export const Info = styled.p`
    font-family: inter;
    color: var(--text);
    transform: translateY(20px);
    margin-bottom: 10px;
    text-align: center;
        @media (min-width:${MediaSizes.mobile}) {
            font-size: 20px;
        }
`

export const ContainerSocialMedia = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

