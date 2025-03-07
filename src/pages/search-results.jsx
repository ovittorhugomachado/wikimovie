import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ListResults } from "../components/list-results";

const SearchResults = () => {
    

    return (
        <>
            <Header />
            <main className="search-result">
                <ListResults
                    query={'Jack Quaid'}
                />
            </main>
            <Footer />
        </>

    )
}

export { SearchResults }