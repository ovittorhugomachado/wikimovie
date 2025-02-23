import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { ListMovie } from "./list";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/List" element={<ListMovie />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }