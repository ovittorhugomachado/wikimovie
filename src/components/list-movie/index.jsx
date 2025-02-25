import { useState, useEffect } from "react";
import { Main, ListMovies, Movie, MovieCover, MovieName, MovieScore, PageTitle, LeadMoreButton, LoadingOrError } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";
import list from '../../../json/movies.json';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchBestRated, fetchListByGenre } from "../../services/getMovies";


const ContainerListMovie = () => {

    const { genre, id } = useParams();
    const [ listMovies, setListMovies] = useState([])
    const [ isLoading, setIsLoading ] = useState(true);


    useEffect(() => {

        setIsLoading(true);

        const getListMovies = async () => {
            try {
                const data = await fetchListByGenre(id);
                setListMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        getListMovies()
    }, [id]);

    const list = listMovies.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));


    if (isLoading) {
        return <LoadingOrError>Carregando...</LoadingOrError>;
    }

    return (
        <>
            <Main>
                <PageTitle>{}</PageTitle>
                <ListMovies>
                    {list.map((movie, index) => (
                        <Link key={index} to={`/details/${movie.id}`}>
                            <Movie >
                                <MovieCover src={movie.image} />
                                <MovieName>{movie.name}</MovieName>
                                <MovieScore>{movie.rating}</MovieScore>
                            </Movie>
                        </Link>

                    ))}
                </ListMovies>
                <LeadMoreButton>CARREGAR MAIS</LeadMoreButton>
            </Main>
        </>
    );
};

export { ContainerListMovie };
