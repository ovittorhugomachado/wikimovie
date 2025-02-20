import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./welcome";
import { Home } from "./home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }