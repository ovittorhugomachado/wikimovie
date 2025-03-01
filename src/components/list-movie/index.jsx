import { useState, useEffect } from "react";
import { Main, ListMovies, Movie, MovieCover, MovieName, MovieScore, ButtonNext, ButtonPrevious, Loading, Error, ContainerButton } from "./style";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchListByGenre } from "../../services/getMovies";


const ContainerListMovie = () => {

    const { id } = useParams();
    const [ listMovies, setListMovies ] = useState([])
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ page, setPage ] = useState(1)

    useEffect(() => {

        setLoading(true);

        const getListMovies = async () => {
            try {
                const data = await fetchListByGenre(id, page);
                setListMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getListMovies()
    }, [id, page]);

    if (loading) {
        return <Loading src="/loading.png" />
    }

    if (error) {
        return <Error src="/error.png" />
    }

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

    return (
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
                    <ButtonPrevious onClick={previousPage}><IoIosArrowBack className="button"/>PÁGINA ANTERIOR</ButtonPrevious>
                    <ButtonNext onClick={nextPage}>PRÓXIMA PÁGINA<IoIosArrowForward className="button"/></ButtonNext>
                </ContainerButton>
            </Main>

    );
};

export { ContainerListMovie };
