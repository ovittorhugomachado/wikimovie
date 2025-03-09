import { fetchListByGenre } from "../services/getMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { MovieCard } from "../components/movie-card";
import { Loading } from "../components/loading";
import jsonGenre from "../../json/genre.json"

const ListMovies = () => {

    const { id } = useParams();
    const [ listMovies, setListMovies ] = useState([])
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ totalPages, setTotalPages ] = useState(1);
    const [ isLoadingMore, setIsLoadingMore ] = useState(false);
    const currentGenre = jsonGenre.filter((genre) => genre.id == id)

    useEffect(() => {

        setLoading(true);

        const getListMovies = async (page = currentPage) => {
            try {
                setLoading(page === 1);
                const data = await fetchListByGenre(id, page);
                setListMovies((prev) => ({
                    ...data,
                    results: page === 1 ? data.results : [...prev.results, ...data.results],
                }));
                setTotalPages(data.total_pages);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
                setIsLoadingMore(false);
            }
        };

        getListMovies()

    }, [id, currentPage]);

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <img className="error" src="/error.png" />
    }

    const loadMore = () => {
        if (currentPage < totalPages) {
            setIsLoadingMore(true);
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
        }
    };

    const list = listMovies.results.map((movie) => ({
        id: movie.id,
        name: movie.title,
        date: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
    }));

    document.title = currentGenre[0].title;

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
                {currentPage < totalPages && (
                    <button onClick={loadMore} disabled={isLoadingMore}>
                        {isLoadingMore ? "Carregando..." : "Carregar mais"}
                    </button>
                )}
            </main>
            <Footer />
        </>
    );
};

export { ListMovies };