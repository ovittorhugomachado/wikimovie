import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { ListMovie } from "./list";
import { DetailsMovie } from "./Movie-details";
import { DetailsPerson } from "./actor-details";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:genre/:id" element={<ListMovie />}/>
                <Route path="/details/movie/:id" element={<DetailsMovie />}/>
                <Route path="/details/person/:id" element={<DetailsPerson />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }