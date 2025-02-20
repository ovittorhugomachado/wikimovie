import { Container, Info, ContainerSocialMedia } from "./style";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <Container>
            <ContainerSocialMedia>
                <a href="https://portfolio-vitor-hugo.onrender.com/#" target="_blank">
                    <img src="../asterisco.png" width={40} alt="logo-vitor" />
                </a>
                <a href="https://github.com/ovittorhugomachado" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/vitor-hugo-alves-machado-1621bb156/" target="_blank">
                    <FaLinkedin />
                </a>


            </ContainerSocialMedia>

            <Info>Desenvolvido por Vitor Hugo Machado</Info>
            <Info>ovittorhugomachado@gmail.com</Info>
        </Container>
    )
}

export { Footer }