import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { ListMovie } from "./list";
import { Details } from "./Movie-details";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:genre" element={<ListMovie />}/>
                <Route path="/Movie-details" element={<Details />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }