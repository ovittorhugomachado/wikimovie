import {
    TitlePage,
    TitleBold,
    Container,
    FilterContainer,
    Filter,
    FilterItemTitle,
    FilterItemSubtitle,
    List,
} from "./style";
import {
    fetchSearchMovie,
    fetchSearchPerson
} from "../../services/getMovies";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../loading";
import { PersonCard } from "./person-card";
import { MovieCard } from "./movie-card";

const ListResults = ({ query }) => {
    
    const [ filter, setFilter ] = useState('movies');
    const [ moviesList, setMoviesList ] = useState({ results: [] });
    const [ personsList, setPersonsList ] = useState({ results: [] });
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);
    const [ isLoadingMore, setIsLoadingMore ] = useState(false);

    const toggleFilter = (selectedFilter) => {
        setFilter(selectedFilter);
        setCurrentPage(1);
    };

    const loadMore = () => {
        if (currentPage < totalPages) {
            setIsLoadingMore(true);
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
        }
    };

    const getList = async (page = currentPage) => {
        try {
            setLoading(page === 1);
            const moviesData = await fetchSearchMovie(query, page);
            setMoviesList((prev) => ({
                ...moviesData,
                results: page === 1 ? moviesData.results : [...prev.results, ...moviesData.results],
            }));
            setTotalPages(moviesData.total_pages);

            const personsData = await fetchSearchPerson(query, page);
            setPersonsList((prev) => ({
                ...personsData,
                results: page === 1 ? personsData.results : [...prev.results, ...personsData.results],
            }));

        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
            setIsLoadingMore(false);
        }
    };

    useEffect(() => {
        getList(currentPage);
    }, [filter, query, currentPage]);

    if (loading && currentPage === 1) {
        return <Loading />;
    }
    if (error) {
        return <img className="error" src="/error.png" />;
    }

    return (
        <>
            <TitlePage>Resultado da busca: <TitleBold>{query}</TitleBold></TitlePage>
            <Container>
                <FilterContainer>
                    <Filter onClick={() => toggleFilter('movies')} className={filter === 'movies' ? 'active' : ''}>
                        <FilterItemTitle>FILMES</FilterItemTitle>
                        <FilterItemSubtitle>{moviesList.total_results > 9999 ? '+ de 9999' : moviesList.total_results}</FilterItemSubtitle>
                    </Filter>
                    <Filter onClick={() => toggleFilter('persons')} className={filter === 'persons' ? 'active' : ''}>
                        <FilterItemTitle>PESSOAS</FilterItemTitle>
                        <FilterItemSubtitle>{personsList.total_results > 9999 ? '+ de 9999' : personsList.total_results}</FilterItemSubtitle>
                    </Filter>
                </FilterContainer>
                <List>
                    {filter === 'movies' && (
                        moviesList.results.map((movie) => (
                            <Link key={movie.id} to={`/details/movie/${movie.id}`}>
                                <MovieCard
                                    image={movie.poster_path}
                                    name={movie.title}
                                    year={movie.release_date.split('-')[0]}
                                    sinopse={movie.overview}
                                />
                            </Link>
                        ))
                    )}
                    {filter === 'persons' && (
                        personsList.results.map((person) => (
                            <Link key={person.id} to={`/details/person/${person.id}`}>
                                <PersonCard
                                    image={person.profile_path}
                                    name={person.name}
                                    job={person.known_for_department}
                                    topMovies={person.known_for.map(movie => movie.title).join(" | ")}
                                />
                            </Link>
                        ))
                    )}
                </List>
                {currentPage < totalPages && (
                    <button onClick={loadMore} disabled={isLoadingMore}>
                        {isLoadingMore ? "Carregando..." : "Carregar mais"}
                    </button>
                )}
            </Container>
        </>
    );
};

export { ListResults };