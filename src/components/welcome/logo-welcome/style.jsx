import styled from "styled-components";

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: -25px;
    height: 200px;
    width: 300px;
    animation: scale 4s ease-in-out forwards;
    transform: scale(0.5);
    @keyframes scale {
    0% {
    top: -400px;
    transform: scale(1.5);
    }
    50%
    100% {
    transform: scale(0.5);
    }
    
 

`


export const ImagePopcorn = styled.img`
    width: 125px;
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    line-height: 70px;
    transform: translateY(65px)
`

export const Title = styled.h1`
    color: var(--white);
    text-align: start;
    font-size: 75px
`

