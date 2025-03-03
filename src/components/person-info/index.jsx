import { useState } from "react";
import { ContainerProfile, ContainerMovies, Movie, } from "./style";
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
        <ContainerProfile>
            <h1 className="person-info">{person.name}</h1>
            <h2>Biografia</h2>
            <p className="biography">{person.biography || 'SEM BIOGRAFIA CADASTRADA'}</p>
            <h2>Filmografia</h2>
            <ContainerMovies>
                {person.known_for_department == 'Acting' ? (
                    topMoviesActor.map((movie) => (
                        <Movie >
                            <Link key={movie.id} to={`/details/movie/${movie.id}`}>
                                <img
                                    className="cover-small"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    onError={(e) => e.target.src = "/default-cover.png"}
                                />
                                <h3>{movie.title}</h3>
                            </Link>
                        </Movie>
                    ))
                ) : (
                    topMoviesProducer.map((movie, index) => (
                        <Movie key={index}>
                            <Link to={`/details/movie/${movie.id}`}>
                                <img
                                    className="cover-small"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    onError={(e) => e.target.src = "/default-cover.png"}
                                />
                                <h3>{movie.title}</h3>
                            </Link>
                        </Movie>
                    ))
                )
                }
            </ContainerMovies>
            <ul className="container-list-movies" style={{ display: display }}>
                {allMoviesActor
                    .sort((a, b) => {
                        const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
                        const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
                        return yearB - yearA;
                    })
                    .map((movie, index) => (
                        <Link key={index} className="movie" to={`/details/movie/${movie.id}`}>
                            <li className="list-movies">
                                <h3 className="movie-year">
                                    {movie.release_date ? movie.release_date.split("-")[0] : "----"}
                                </h3>
                                <div>
                                    <h3>{movie.title || movie.name}</h3>
                                    <p>{movie.character}</p>
                                </div>
                            </li>
                        </Link>
                    ))}
            </ul>
            {filmography.crew.length > 0 && (
                <div style={{ display: display }}>
                    <h2>Produção</h2>
                    <ul>
                        {allMoviesProducer
                            .sort((a, b) => {
                                const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
                                const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
                                return yearB - yearA;
                            })
                            .map((movie, index) => (
                                <Link key={index} className="movie" to={`/details/movie/${movie.id}`}>
                                    <li className="list-movies">
                                        <h3 className="movie-year">
                                            {movie.release_date ? movie.release_date.split("-")[0] : "----"}
                                        </h3>
                                        <div>
                                            <h3>{movie.title || movie.name}</h3>
                                            <p>{movie.job}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                    </ul>
                </div>
            )}
            {display === 'none' ? (
                <button onClick={showAllMovies}>filmografia completa</button>
            ) : (
                <button onClick={showLess}>fechar lista</button>
            )}
        </ContainerProfile>
    )
}

export { PersonInfo }