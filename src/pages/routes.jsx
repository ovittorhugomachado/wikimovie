import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { ListMovies } from "./list";
import { MovieDetails } from "./Movie-details";
import { PersonDetails } from "./person-details";
import { SearchResults } from "./search-results";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:genre/:id" element={<ListMovies />}/>
                <Route path="/details/movie/:id" element={<MovieDetails />}/>
                <Route path="/details/person/:id" element={<PersonDetails />}/>
                <Route path="/list" element={<SearchResults />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }