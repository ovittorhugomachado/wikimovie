import { Main } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";
import { Carousel } from "../carousel";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../services/getMovies";

const ContainerHome = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar os filmes: {error.message}</div>;
    }

    const listPopularMovies = popularMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));

    const popularMoviesSlice = listPopularMovies.slice(0, 19)

    return (
        <>
            <Header />
            <Main>
                <Carousel nameCarousel={"Populares"} listMovies={popularMoviesSlice} />
                <Carousel listMovies={popularMoviesSlice} />
                <Carousel listMovies={popularMoviesSlice} />
                <Carousel listMovies={popularMoviesSlice} />
            </Main>
            <Footer />
        </>
    );
};

export { ContainerHome };