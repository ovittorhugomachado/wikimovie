import styled from "styled-components";

export const ContainerIconsLeft = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    left: 100px
`

export const Pause = styled.img`
    width: 50px;
    animation: floatPause 10s ease-in-out forwards;
    
    @keyframes floatPause {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const Stop = styled.img`
    width: 50px;
    animation: floatStop 10s ease-in-out forwards;
    
    @keyframes floatStop {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const Rec = styled.img`
    width: 50px;
    animation: floatRec 10s ease-in-out forwards;
    
    @keyframes floatRec {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const YellowPlay = styled.img`
    width: 50px;
    animation: floatYellowPlay 10s ease-in-out forwards;
    
    @keyframes floatYellowPlay {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const CoralPlay = styled.img`
    width: 50px;
    animation: floatCoralPlay 10s ease-in-out forwards;
    
    @keyframes floatCoralPlay {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const GreenPlay = styled.img`
    width: 50px;
    animation: floatGreenPlay 10s ease-in-out forwards;
    
    @keyframes floatGreenPlay {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5000px);
    }
`

export const ContainerIconsRight = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    position: absolute;
    transform: rotate(180deg);
    top: 20px;
    right: 100px;
`