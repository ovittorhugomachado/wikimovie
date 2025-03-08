import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ListResults } from "../components/list-results";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
    const [ nameSearched ] = useSearchParams();
    const query = nameSearched.get("query");

    return (
        <>
            <Header />
            <main className="search-result">
                <ListResults
                    query={query}
                />
            </main>
            <Footer />
        </>

    )
}

export { SearchResults }