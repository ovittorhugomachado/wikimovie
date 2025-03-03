import {
    PageTitle,
    Title,
    TextBiography,
    Text,
    ContainerMovies,
    MovieCover,
    MovieName,
    MovieYear,
    ButtonFilmography,
    ListItem,
    List
} from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

const PersonInfo = ({ person, filmography, allMoviesActor, allMoviesProducer, topMoviesActor, topMoviesProducer }) => {

    const [display, setDisplay] = useState('none');

    const showAllMovies = () => {
        setDisplay("block")
    };

    const showLess = () => {
        setDisplay("none")
    };

    return (
        <div>
            <PageTitle>{person.name}</PageTitle>
            {person.biography.length > 0 && (
                <>
                    <Title>Biografia</Title>
                    <TextBiography>{person.biography}</TextBiography>
                </>
            )}
            <Title>Filmografia</Title>
            <ContainerMovies>
                {person.known_for_department == 'Acting' ? (
                    topMoviesActor.map((movie) => (
                        <Link className="movie" key={movie.id} to={`/details/movie/${movie.id}`}>
                            <MovieCover
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                onError={(e) => e.target.src = "/default-cover.png"}
                            />
                            <MovieName>{movie.title}</MovieName>
                        </Link>
                    ))
                ) : (
                    topMoviesProducer.map((movie, index) => (
                        <Link className="movie" key={index} to={`/details/movie/${movie.id}`}>
                            <MovieCover
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                onError={(e) => e.target.src = "/default-cover.png"}
                            />
                            <MovieName>{movie.title}</MovieName>
                        </Link>
                    ))
                )
                }
            </ContainerMovies>
            <List style={{ display: display }}>
                {allMoviesActor
                    .map((movie, index) => (
                        <Link key={index} className="movie" to={`/details/movie/${movie.id}`}>
                            <ListItem className="list-item">
                                <MovieYear>
                                    {movie.release_date ? movie.release_date.split("-")[0] : "----"}
                                </MovieYear>
                                <div>
                                    <MovieName>{movie.title || movie.name}</MovieName>
                                    <Text>{movie.character}</Text>
                                </div>
                            </ListItem>
                        </Link>
                    ))}
            </List>
            {filmography.crew.length > 0 && (
                <div style={{ display: display }}>
                    <Title>Produção</Title>
                    <List>
                        {allMoviesProducer
                            .map((movie, index) => (
                                <Link key={index} className="movie" to={`/details/movie/${movie.id}`}>
                                    <ListItem>
                                        <MovieYear>
                                            {movie.release_date ? movie.release_date.split("-")[0] : "----"}
                                        </MovieYear>
                                        <div>
                                            <MovieName>{movie.title || movie.name}</MovieName>
                                            <Text>{movie.job}</Text>
                                        </div>
                                    </ListItem>
                                </Link>
                            ))}
                    </List>
                </div>
            )}
            {display === 'none' ? (
                <ButtonFilmography onClick={showAllMovies}>filmografia completa</ButtonFilmography>
            ) : (
                <ButtonFilmography onClick={showLess}>fechar lista</ButtonFilmography>
            )}
        </div>
    )
}

export { PersonInfo }