import { Container } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";

const ContainerHome = () => {
    return (
        <>
            <Container>
                <Header />
                <Footer />
            </Container>
        </>
    )
}

export { ContainerHome }