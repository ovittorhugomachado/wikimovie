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