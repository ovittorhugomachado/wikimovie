import { LoadingOrError, Main } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";
import { Carousel } from "../carousel";
import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchShowingMovies, fetchComingSoonMovies, fetchBestRated } from "../../services/getMovies";

const ContainerHome = () => {
    const [ popularMovies, setPopularMovies ] = useState([]);
    const [ showingMovies, setShowingMovies ] = useState([]);
    const [ comingSoonMovies, setComingSoonMovies ] = useState([]);
    const [ bestRatedMovies, setBestRatedMovies ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);


    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const data = await fetchPopularMovies();
                setPopularMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        const getShowingMovies = async () => {
            try {
                const data = await fetchShowingMovies();
                setShowingMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        const getComingSoonMovies = async () => {
            try {
                const data = await fetchComingSoonMovies();
                setComingSoonMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        const getBestRatedMovies = async () => {
            try {
                const data = await fetchBestRated();
                setBestRatedMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };


        getPopularMovies();
        getShowingMovies();
        getComingSoonMovies();
        getBestRatedMovies();
    }, []);

    if (loading) {
        return <LoadingOrError>Carregando...</LoadingOrError>;
    }

    if (error) {
        return <LoadingOrError>Erro ao carregar os filmes: {error.message}</LoadingOrError>;
    }

    console.log(showingMovies)

    const listBestRatedMovies = bestRatedMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));
    const bestRatedMoviesSlice = listBestRatedMovies.slice(0, 19)

    const listShowingMovies = showingMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));
    const showingMoviesSlice = listShowingMovies.slice(0, 19)

    const listComingSoonMovies = comingSoonMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));
    const comingSoonMoviesSlice = listComingSoonMovies.slice(0, 19)

    const listPopularMovies = popularMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));
    const popularMoviesSlice = listPopularMovies.slice(0, 19)
 
    return (
        <>
            <Header />
            <Main>
                <Carousel nameCarousel={"MELHORES FILMES"} listMovies={bestRatedMoviesSlice} />
                <Carousel nameCarousel={"EM CARTAZ"} listMovies={showingMoviesSlice} />
                <Carousel nameCarousel={"PRÓXIMOS LANÇAMENTOS"} listMovies={comingSoonMoviesSlice} />
                <Carousel nameCarousel={"EM ALTA"} listMovies={popularMoviesSlice} />
            </Main>
            <Footer />
        </>
    );
};

export { ContainerHome };