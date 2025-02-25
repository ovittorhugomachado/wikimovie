import { useState, useEffect } from "react";
import { Main, ListMovies, Movie, MovieCover, MovieName, MovieScore, ButtonNext, ButtonPrevious, LoadingOrError, ContainerButton } from "./style";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchBestRated, fetchListByGenre } from "../../services/getMovies";


const ContainerListMovie = () => {

    const { genre, id } = useParams();
    const [listMovies, setListMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1)


    useEffect(() => {

        setIsLoading(true);

        const getListMovies = async () => {
            try {
                const data = await fetchListByGenre(id, page);
                setListMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        getListMovies()
    }, [id, page]);

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const previousPage = () => {
        setPage((prevPage) => prevPage - 1)
    }

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
                <ContainerButton>
                    <ButtonPrevious onClick={nextPage}><IoIosArrowBack className="button"/>PÁGINA ANTERIOR</ButtonPrevious>
                    <ButtonNext onClick={nextPage}>PRÓXIMA PÁGINA<IoIosArrowForward className="button"/></ButtonNext>
                </ContainerButton>

            </Main>
        </>
    );
};

export { ContainerListMovie };
