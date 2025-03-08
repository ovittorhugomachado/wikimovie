import { useState, useEffect } from "react";
import { Container, TitlePage, FilterContainer, Title, TitleBold, Filter, FilterItemTitle, FilterItemSubtitle, List } from "./style";
import { PersonCard } from "./person-card";
import { MovieCard } from "./movie-card";
import { IoIosArrowDown } from "react-icons/io";
import { fetchSearchMovie } from "../../services/getMovies";
import { fetchSearchPerson } from "../../services/getMovies";
import { Loading } from "../loading";

const ListResults = ({query}) => {


    const [ visibleFilter, setVisibleFilter ] = useState(false)
    const [ filter, setFilter ] = useState('movies')
    const [ moviesList, setMoviesList ] = useState([])
    const [ personsList, setPersonsList ] = useState({ results: [] })
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const OpenFilter = () => {
        setVisibleFilter(!visibleFilter)
    }

    const toggleFilter = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    useEffect(() => {

        setLoading(true);

        const getList = async () => {
            try {
                    const moviesList = await fetchSearchMovie(query);
                    setMoviesList(moviesList);
                    const personsData = await fetchSearchPerson(query);
                    setPersonsList(personsData || { results: [] });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getList()

    }, [filter, query]);

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <img className="error" src="/error.png" />
    }

    console.log(personsList)
    console.log(filter)

    return (
        <>
            <TitlePage>RESULTADO DA BUSCA: <TitleBold>JACK</TitleBold></TitlePage>
            <Container>
                <FilterContainer>
                    <Filter onClick={() => toggleFilter('movies')} className={`${visibleFilter ? 'show' : ''} ${filter === 'movies' ? 'active' : ''}`}>
                        <FilterItemTitle>FILMES</FilterItemTitle>
                        <FilterItemSubtitle>{moviesList.total_results > 9999 ? '+ de 9999' : moviesList.total_results}</FilterItemSubtitle>
                    </Filter>
                    <Filter onClick={() => toggleFilter('persons')} className={`${visibleFilter ? 'show' : ''} ${filter === 'persons' ? 'active' : ''}`}>
                        <FilterItemTitle>PESSOAS</FilterItemTitle>
                        <FilterItemSubtitle>{personsList.total_results > 9999 ? '+ de 9999' : personsList.total_results}</FilterItemSubtitle>
                    </Filter>
                </FilterContainer>
                <List>
                    {filter === 'movies' && (
                        moviesList.results.map((movie, index) => (
                        <MovieCard 
                            key={index}
                            image={movie.poster_path}
                            name={movie.title}
                            year={movie.release_date.split('-')[0]}
                            sinopse={movie.overview}
                        />
                       ))
                    )}
                    {filter === 'persons' && (
                        personsList.results.map((person, index) => (
                        <PersonCard 
                            key={index}
                            image={person.profile_path}
                            name={person.name}
                            job={person.known_for_department}
                            topMovies={person.known_for.map(movie => movie.title).join(" | ")}
                        />
                       ))
                    )} 
                </List>
            </Container>
        </>
    )
}

export { ListResults }