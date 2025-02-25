import { Header } from "../header"
import { Footer } from "../footer"
import { Container, Main, PageTitle } from "./style"

const ContainerDetails = () => {

    return (
        <Container>
        <Main>
            <Header />
            <PageTitle>Acompanhante Perfeita</PageTitle>
            <Footer />
        </Main>
        </Container>


    )
}

export { ContainerDetails }