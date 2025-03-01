import { useState } from "react";
import { ContainerMovies, ContainerProfile, Cover, Info1, Info2, Info3, ListAllMovies, Movie, Name, NameMovie, Picture, PlayTrailer, Text, Title } from "./style";

const ProfileInfo = ({ person, biography, movies, topMoviesActor, topMoviesProducer }) => {
    
    const [ display, setDisplay ] = useState('none');

    const showAllMovies = () => {
        setDisplay("flex")
    };
    
    const showLess = () => {
        setDisplay("none")
    };
    
    return (
        <ContainerProfile>
            <Title>Biografia</Title>
            <Text>{biography}</Text>
            <Title>Filmografia</Title>
            <ContainerMovies>
                {person.known_for_department == 'Acting' ? (
                    topMoviesActor.map((movie) => (
                        <Movie key={movie.id}>
                            <Link to={`/details/movie/${movie.id}`}>
                                <MovieCover
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    onError={(e) => e.target.src = "/default-cover.png"}
                                />
                                <MovieName>{movie.title}</MovieName>
                            </Link>
                        </Movie>
                    ))
                ) : (
                    topMoviesProducer.map((movie) => (
                        <Movie key={index}>
                            <Link to={`/details/movie/${movie.id}`}>
                                <MovieCover
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    onError={(e) => e.target.src = "/default-cover.png"}
                                />
                                <MovieName>{movie.title}</MovieName>
                            </Link>
                        </Movie>
                    ))
                )
                }
                <ListAllMovies style={{ display: display }}>
                    {movies.cast
                        .sort((a, b) => {
                            const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
                            const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
                            return yearB - yearA;
                        })
                        .map((movie, index) => (
                            <Link key={index} className="movie" to={`/details/movie/${movie.id}`}>
                                <ListItem>
                                    <Year>
                                        {movie.release_date ? movie.release_date.split("-")[0] : "----"}
                                    </Year>
                                    <div>
                                        <MovieName>{movie.title || movie.name}</MovieName>
                                        <Character>{movie.character}</Character>
                                    </div>
                                </ListItem>
                            </Link>
                        ))}
                </ListAllMovies>
                {movies.crew.length > 0 && (
                    <ListProduction style={{ display: display }}>
                        <Title>Produções</Title>
                        {movies.crew.
                            sort((a, b) => {
                                const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
                                const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
                                return yearB - yearA;
                            })
                            .map((movie, index) => (
                                <Link key={index} className="movie" to={`/details/movie/${movie.id}`}>
                                    <ListItem>
                                        <Year>
                                            {movie.release_date ? movie.release_date.split("-")[0] : "----"}
                                        </Year>
                                        <div>
                                            <MovieName>{movie.title || movie.name}</MovieName>
                                            <Character>{movie.character}</Character>
                                        </div>
                                    </ListItem>
                                </Link>
                            ))}
                    </ListProduction>
                )}
            </ContainerMovies>
            {display === 'none' ? (
                <ButtonFilmography onClick={showAllMovies}>filmografia completa</ButtonFilmography>
            ) : (
                <ButtonFilmography onClick={showLess}>fechar lista</ButtonFilmography>
            )}

        </ContainerProfile>
    )
}

export { ProfileInfo }