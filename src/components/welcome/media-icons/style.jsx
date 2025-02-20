import styled from "styled-components";
import { MediaSizes } from "../../../style/media-size";

export const ContainerIconsRight = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    position: absolute;
    transform: rotate(90deg);
    top: -60px;
        @media (min-width: ${MediaSizes.tablet}) {
            transform: rotate(180deg);
            right: 10%;
            top: 45px
        }
        @media (min-width: ${MediaSizes.desktopLarge}) {
            transform: rotate(180deg);
            right: 15%;
            top: 45px
        }
`

export const Pause = styled.img`
    width: 35px;
    animation: floatPause 10s ease-in-out forwards;
    animation-delay: 0.8s;
    @keyframes floatPause {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }   
`

export const Stop = styled.img`
    width: 35px;
    animation: floatStop 9s ease-in-out forwards;
    animation-delay: 0.8s;
    @keyframes floatStop {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const Rec = styled.img`
    width: 35px;
    animation: floatRec 8s ease-in-out forwards;
    animation-delay: 0.8s;
    @keyframes floatRec {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }       
`

export const YellowPlay = styled.img`
    width: 35px;
    animation: floatYellowPlay 7s ease-in-out forwards;
    animation-delay: 0.8s;
    @keyframes floatYellowPlay {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const CoralPlay = styled.img`
    width: 35px;
    animation: floatCoralPlay 6s ease-in-out forwards;
    animation-delay: 0.8s;
    @keyframes floatCoralPlay {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const GreenPlay = styled.img`
    width: 35px;
    animation: floatGreenPlay 5s ease-in-out forwards;
    animation-delay: 0.8s;
    @keyframes floatGreenPlay {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const ContainerIconsLeft = styled.div`
    display: flex;
    flex-direction: column-reverse;
    transform: rotate(270deg);
    gap: 10px;
    position: absolute;
    bottom: -60px;
        @media (min-width: ${MediaSizes.tablet}) {
            transform: rotate(0deg);
            left: 10%;
            bottom: 45px
        };
        @media (min-width: ${MediaSizes.desktopLarge}) {
            transform: rotate(0deg);
            left: 15%;
            bottom: 45px
        }
`