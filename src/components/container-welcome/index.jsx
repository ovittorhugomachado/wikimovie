import { useEffect } from "react";
import { Logo } from "./logo-welcome";
import { MediaIcons } from "./media-icons";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";


const ContainerWelcome = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/home')
    }, 5000)

    return (
        <Container>
            <Logo />
            <MediaIcons />
        </Container>
    )
}

export { ContainerWelcome }