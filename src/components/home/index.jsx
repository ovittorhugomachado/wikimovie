import { Main } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";
import { Carousel } from "../carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../services/getMovies";


const ContainerHome = () => {
    const [ popularMovies, setPopularMovies] = useState([]);
    const [ loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const data = await fetchPopularMovies(); // Chama a função
                setPopularMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        

        getPopularMovies();
        
    }, []);

    console.log(popularMovies)

    return (
        <>
                <Header />
                <Main>
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
                </Main>                
                <Footer />
        </>
    )
}

export { ContainerHome }