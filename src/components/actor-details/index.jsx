import {
    Main,
    Loading,
    Error,
    PageTitle,
    ContainerLeft,
    ContainerRight,
    PhotoActor, Birth,
    PlaceOfBirth,
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
    ButtonFilmography
} from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchActorDetails } from "../../services/getMovies";
import { fetchActorFilmography } from "../../services/getMovies";

const ContainerDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actor, setActor] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
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
                setTopMovies(filmography.cast.slice(0, 10))
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getDetailsMovie()
    }, [id]);

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

                <ContainerLeft>
                    <PageTitle>{actor.name}</PageTitle>
                    <PhotoActor
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        onError={(e) => e.target.src = "/default-actor.png"}
                    />
                    <Birth>{actor.birthday || '-'}</Birth>
                    <PlaceOfBirth>{actor.place_of_birth}</PlaceOfBirth>
                </ContainerLeft>
                <ContainerRight>
                    <Title>Biografia</Title>
                    <Text>{actor.biography}</Text>
                    <Title>Filmografia</Title>
                    <ContainerMovies>
                        {topMovies.map((movie, index) => (
                            <Movie key={index}>
                                <MovieCover
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    onError={(e) => e.target.src = "/default-cover.png"}
                                />
                                <MovieName>{movie.title}</MovieName>
                            </Movie>
                        ))
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
                                <ListItem key={index}>
                                    <Year>
                                        {movie.release_date ? movie.release_date.split("-")[0] : "----"}
                                    </Year>
                                    <div>
                                        <MovieName>{movie.title || movie.name}</MovieName>
                                        <Character>{movie.character}</Character>
                                    </div>
                                </ListItem>
                            ))
                        }

                    </ListAllMovies>
                    {display === 'none' ? (
                        <ButtonFilmography onClick={showAllMovies}>filmografia completa</ButtonFilmography>
                    ) : (
                        <ButtonFilmography onClick={showLess}>fechar lista</ButtonFilmography>
                    )
                    }
                </ContainerRight>
            </Main >
        </>
    );
};

export { ContainerDetails };
