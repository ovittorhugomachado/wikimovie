import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { ListMovie } from "./list";
import { MovieDetails } from "./movie-details"
import { PersonDetails } from "./person-details";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:genre/:id" element={<ListMovie />}/>
                <Route path="/details/movie/:id" element={<MovieDetails />}/>
                <Route path="/details/person/:id" element={<PersonDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }