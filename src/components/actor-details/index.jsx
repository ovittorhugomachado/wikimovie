import { Main, Loading, Error, PageTitle, ContainerLeft, ContainerRight, PhotoActor, Birth, PlaceOfBirth, Title, Text, ContainerMovies, Movie, MovieCover, MovieName } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchActorDetails } from "../../services/getMovies";
import { fetchActorFilmography } from "../../services/getMovies";

const ContainerDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actor, setActor] = useState([]);
    const [filmography, setFilmography] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

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

    console.log(topMovies)

    if (loading) {
        return <Loading src="/loading.png" />
    }
    if (error) {
        return <Error src="/error.png" />
    }

    const showAllMovies = () => {

    }
    const showLess = () => {

    }

    return (
        <>
            <Main>

                <ContainerLeft>
                    <PageTitle>{actor.name}</PageTitle>
                    <PhotoActor
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    />
                    <Birth>{actor.birthday}</Birth>
                    <PlaceOfBirth>{actor.place_of_birth}</PlaceOfBirth>
                </ContainerLeft>
                <ContainerRight>
                    <Title>Biografia</Title>
                    <Text>{actor.biography}</Text>
                    <Title>Filmografia</Title>
                    <ContainerMovies>
                        {topMovies.map((movie, index) => (
                            <Movie key={index}>
                                <MovieCover src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                <MovieName>{movie.title}</MovieName>
                            </Movie>
                        ))
                        }
                    </ContainerMovies>
                </ContainerRight>
            </Main >
        </>
    );
};

export { ContainerDetails };
