import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
        background-image: linear-gradient(transparent 19px, #003838 20px), 
                          linear-gradient(90deg, transparent 19px, #003838 20px);
        background-size: 20px 20px;
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
    color: var(--white);
`