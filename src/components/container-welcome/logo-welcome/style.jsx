import styled from "styled-components";

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 200px;
    width: 600px;
    animation: scale 2s ease-in-out forwards;
    animation-delay: 2.5s;
    @keyframes scale {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.5) translateY(-600px);
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

