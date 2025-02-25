import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { ContainerListMovie } from "../components/list-movie"

const ListMovie = () => {
    return (
        <>
            <Header />
            <ContainerListMovie />
            <Footer />
        </>
    )
}

export { ListMovie }