import styled from "styled-components";
import { MediaSizes } from "../../style/media-size";

export const Container = styled.footer`
    width: 100%;
    height: 230px;
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    padding-bottom: 10px;
`

export const ContainerSocialMedia = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const Info = styled.h5`
    font-size: 20px;
    color: var(--text);
    transform: translateY(16px);
        @media (max-width:${MediaSizes.mobile}) {
            font-size: 16px;
        }
`