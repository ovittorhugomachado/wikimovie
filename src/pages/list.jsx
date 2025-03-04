import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import { fetchListByGenre } from "../services/getMovies";
import { MovieCard } from "../components/movie-card";
import { Loading } from "../components/loading";
import jsonGenre from "../../json/genre.json"

const ListMovies = () => {

    const { id, genre } = useParams();
    const [listMovies, setListMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1)
    const currentGenre = jsonGenre.filter((genre) => genre.id == id)

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
        return <Loading />
    }
    if (error) {
        return <img className="error" src="/error.png" />
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
        <>
            <Header />
            <main className="list">
                <h1>{currentGenre[0].name}</h1>
                <div className="list">
                    {list.map((movie, index) => (
                        <MovieCard key={index}
                            id={movie.id}
                            image={movie.image}
                            name={movie.name}
                            rating={movie.rating}
                        />
                    ))}
                </div>
                <div className="container-buttons">
                    {page > 1 && (
                        <a className="button previous-page" onClick={previousPage}><IoIosArrowBack className="button" />PÁGINA ANTERIOR</a>
                    )}
                    <a className="button" onClick={nextPage}>PRÓXIMA PÁGINA<IoIosArrowForward className="button" /></a>
                </div>
            </main>
            <Footer />
        </>
    );
};

export { ListMovies };