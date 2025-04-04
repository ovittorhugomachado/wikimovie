import {
    Container,
    Info,
    ContainerSocialMedia
} from "./style";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <Container>
            <Info>Desenvolvido por Vitor Hugo Machado</Info>
            <ContainerSocialMedia>
                <a href="https://www.linkedin.com/in/vitor-hugo-machado-1621bb156/" target="_blank">
                    <FaLinkedin className="social-media" />
                </a>
                <a href="https://github.com/ovittorhugomachado" target="_blank">
                    <FaGithubSquare className="social-media" />
                </a>
                <a href="https://wa.me/+5551980560089" target="_blank">
                    <FaWhatsappSquare className="social-media" />
                </a>
            </ContainerSocialMedia>
            <Info>Dados fornecidos por The Movie Database (TMDB)</Info>
            <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank">
                <img src="/tmdb-logo.png" width={100} alt="" />
            </a>
        </Container>
    )
}

export { Footer }