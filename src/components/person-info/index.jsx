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
        <div className="container-profile">
            <h1 className="person-info">{person.name}</h1>
            {person.biography.length > 0 && (
                <>
                    <h2>Biografia</h2>
                    <p className="biography">{person.biography}</p>
                </>
            )}
            <h2>Filmografia</h2>
            <div className="container-movies">
                {person.known_for_department == 'Acting' ? (
                    topMoviesActor.map((movie) => (
                        <Link className="movie" key={movie.id} to={`/details/movie/${movie.id}`}>
                            <img
                                className="cover-small"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                onError={(e) => e.target.src = "/default-cover.png"}
                            />
                            <h3>{movie.title}</h3>
                        </Link>
                    ))
                ) : (
                    topMoviesProducer.map((movie, index) => (

                        <Link className="movie" key={index} to={`/details/movie/${movie.id}`}>
                            <img
                                className="cover-small"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                onError={(e) => e.target.src = "/default-cover.png"}
                            />
                            <h3>{movie.title}</h3>
                        </Link>
                    ))
                )
                }
            </div>
            <ul className="container-list-movies" style={{ width: '100%', display: display }}>
                {allMoviesActor
                    .map((movie, index) => (
                        <Link key={index} className="movie" to={`/details/movie/${movie.id}`}>
                            <li className="list-item">
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
                            .map((movie, index) => (
                                <Link key={index} className="movie" to={`/details/movie/${movie.id}`}>
                                    <li className="list-item">
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
                <a className="button" onClick={showAllMovies}>filmografia completa</a>
            ) : (
                <a className="button" onClick={showLess}>fechar lista</a>
            )}
        </div>
    )
}

export { PersonInfo }