import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ListResults } from "../components/list-results";

const SearchResults = () => {

    return (
        <>
            <Header />
            <main>
                <ListResults />
            </main>
            <Footer />
        </>

    )
}

export { SearchResults }