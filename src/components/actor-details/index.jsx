import {
    Main,
    Loading,
    Error,

    ContainerRight,


    Title,
    Text,
    ContainerMovies,
    Movie,
    MovieCover,
    MovieName,
    ListAllMovies,
    ListItem,
    Character,
    Year,
    ButtonFilmography,
    ListProduction,
    PageTitle
} from "./style";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchActorDetails } from "../../services/getMovies";
import { fetchActorFilmography } from "../../services/getMovies";
import { ProfileCard } from "../profile-card";
const ContainerDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actor, setActor] = useState([]);
    const [topMoviesActor, setTopMoviesActor] = useState([]);
    const [topMoviesProducer, setTopMoviesProducer] = useState([]);
    const [filmography, setFilmography] = useState([]);
    const [display, setDisplay] = useState(`none`)

    useEffect(() => {
        setLoading(true);

        const getDetailsMovie = async () => {
            try {
                const data = await fetchActorDetails(id)
                setActor(data)

                const filmography = await fetchActorFilmography(id)
                setFilmography(filmography)

                const removeEquals = (array) => {
                    const uniqueIds = new Set();
                    return array.filter(item => {
                        if (!uniqueIds.has(item.id)) {
                            uniqueIds.add(item.id);
                            return true;
                        }
                        return false;
                    });
                };

                const topMoviesActor = removeEquals(filmography.cast)
                    .filter(item => item.media_type === "movie")
                    .sort((a, b) => b.popularity - a.popularity)
                    .slice(0, 20);
                setTopMoviesActor(topMoviesActor);

                const topMoviesProducer = removeEquals(filmography.crew)
                    .filter(item => item.media_type === "movie")
                    .sort((a, b) => b.popularity - a.popularity)
                    .slice(0, 20);
                setTopMoviesProducer(topMoviesProducer);

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getDetailsMovie()
    }, [id]);

    const biography = actor.biography
    const ListAllMoviesActorOrdered = filmography?.cast?.sort((a, b) => {
        const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
        const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
        return yearB - yearA;
    }) ?? [];

    const ListAllMoviesProducerOrdered = filmography?.crew?.sort((a, b) => {
        const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
        const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
        return yearB - yearA;
    }) ?? [];
 


    console.log(ListAllMoviesProducerOrdered)


    if (loading) {
        return <Loading src="/loading.png" />
    }
    if (error) {
        return <Error src="/error.png" />
    }

    const showAllMovies = () => {
        setDisplay("flex")
    }
    const showLess = () => {
        setDisplay("none")
    }

    return (
        <>
            <Main>
                <ProfileCard
                    name={actor.name}
                    image={actor.profile_path}
                    info1={actor.birthday}
                    info2={actor.place_of_birth}
                />

                <ContainerRight>
                    <Title>Biografia</Title>
                    <Text>{actor.biography || 'SEM BIOGRAFIA CADASTRADA'}</Text>
                    <Title>Filmografia</Title>
                    <ContainerMovies>
                        {actor.known_for_department == 'Acting' ? (
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
                            topMoviesProducer.map((movie, index) => (
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
                    </ContainerMovies>
                    <ListAllMovies style={{ display: display }}>
                        {filmography.cast
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
                    {filmography.crew.length > 0 && (
                        <ListProduction style={{ display: display }}>
                            <Title>Produções</Title>
                            {filmography.crew.
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
                    {display === 'none' ? (
                        <ButtonFilmography onClick={showAllMovies}>filmografia completa</ButtonFilmography>
                    ) : (
                        <ButtonFilmography onClick={showLess}>fechar lista</ButtonFilmography>
                    )}
                </ContainerRight>
            </Main >
        </>

    );
};

export { ContainerDetails };
