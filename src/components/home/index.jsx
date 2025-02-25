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

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzE1NzUxYTMxNWQxZjdmYmJhY2Q2N2U3NTU0ZjBiYyIsIm5iZiI6MTczOTkyNDM1Ny4yNDQsInN1YiI6IjY3YjUyMzg1MTRhOGIwYWZmNmRiNWRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atPmZnZzOUWqdN8Hv36JxfyeZeknel1f0F3F9h8oGbg'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
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
        date: movie.release_date.split('-')[0],
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