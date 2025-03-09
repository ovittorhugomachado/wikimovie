import {
    fetchPopularMovies,
    fetchShowingMovies,
    fetchComingSoonMovies,
    fetchBestRated
} from "../services/getMovies";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Loading } from "../components/loading";
import { Carousel } from "../components/carousel";

const Home = () => {
    const [ popularMovies, setPopularMovies ] = useState([]);
    const [ showingMovies, setShowingMovies ] = useState([]);
    const [ comingSoonMovies, setComingSoonMovies ] = useState([]);
    const [ bestRatedMovies, setBestRatedMovies ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {

        setLoading(true);

        const getListMovies = async () => {
            try {
                const popularMovies = await fetchPopularMovies();
                setPopularMovies(popularMovies.results);
                const showingMovies = await fetchShowingMovies();
                setShowingMovies(showingMovies.results);
                const comingSoonMovies = await fetchComingSoonMovies();
                setComingSoonMovies(comingSoonMovies.results);
                const bestRated = await fetchBestRated();
                setBestRatedMovies(bestRated.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getListMovies();

    }, []);

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <img className="error" src="/error.png" />
    }

    const listBestRatedMovies = bestRatedMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));

    const listShowingMovies = showingMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));

    const listComingSoonMovies = comingSoonMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));

    const listPopularMovies = popularMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));
    
    document.title = "Wiki Movie";

    return (
        <>
            <Header />
            <main className="home">
                <Carousel
                    nameCarousel={"MELHORES FILMES"}
                    listMovies={listBestRatedMovies.slice(0, 19)}
                />
                <Carousel
                    nameCarousel={"EM CARTAZ"}
                    listMovies={listShowingMovies.slice(0, 19)}
                />
                <Carousel
                    nameCarousel={"PRÓXIMOS LANÇAMENTOS"}
                    listMovies={listComingSoonMovies.slice(0, 19)}
                />
                <Carousel
                    nameCarousel={"EM ALTA"}
                    listMovies={listPopularMovies.slice(0, 19)}
                />
            </main>
            <Footer />
        </>
    );
};

export { Home };