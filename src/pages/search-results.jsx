import { useSearchParams } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ListResults } from "../components/list-results";

const SearchResults = () => {

    const [ nameSearched ] = useSearchParams();
    const query = nameSearched.get("query");

    document.title = `Busca: ${query}`;

    return (
        <>
            <Header />
            <main className="search-result">
                <ListResults query={query}/>
            </main>
            <Footer />
        </>
    )
}

export { SearchResults }