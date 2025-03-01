import { ContainerActors, ContainerRow, ContainerMovie, Main, ContainerCategory, MovieCover, MovieReview, MovieTime, PageTitle, PhotoActor, Title, Text, ContainerColumn, TitleInfoMovie, Actor, NameActor, Director, ContainerSinopse, Genre, Charactername, ShowActors, Loading, Error, PlayTrailer } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetailsMovie } from "../../services/getMovies";
import { fetchCreditsMovie } from "../../services/getMovies";
import { fetchTrailerMovie } from "../../services/getMovies";
import { ImYoutube2 } from "react-icons/im";

const ContainerDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movieData, setMovieData] = useState(null);
    const [trailerMovie, setTrailerMovie] = useState([])
    const [movieCast, setMovieCast] = useState([]);
    const [visibleActors, setVisibleActors] = useState(8);

    useEffect(() => {
        setLoading(true);

        const getDetailsMovie = async () => {
            try {
                const data = await fetchDetailsMovie(id);
                setMovieData(data);
                const movieCast = await fetchCreditsMovie(id)
                setMovieCast(movieCast)
                const trailerMovie = await fetchTrailerMovie(id)
                setTrailerMovie(trailerMovie)
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

    console.log(trailerMovie)
    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}min`;
    };
    const name = movieData.title;
    const image = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;
    const sinopse = movieData.overview
    const movieTime = formatRuntime(movieData.runtime)
    const rating = movieData.vote_average.toFixed(1)
    const actors = movieCast?.cast || [];
    const director = movieCast?.crew?.filter(crew => crew.job === 'Director')[0].name
    const pathTrailer = trailerMovie.results?.filter(trailer => trailer.type === 'Trailer').slice(-1)[0]?.key;
    console.log(pathTrailer)
    const showAllActors = () => {
        setVisibleActors((prev) => prev + 42);
    }
    const showLess = () => {
        setVisibleActors((prev) => prev - 42);
    }

    return (
        <>
            <Main>
                <PageTitle>{name}</PageTitle>
                <ContainerMovie>
                    <MovieCover src={image} />
                    <MovieTime>{movieTime}</MovieTime>
                    <ContainerCategory>
                        {movieData.genres.map((genre, index) => (
                            <Genre key={index}>{genre.name}</Genre>
                        ))}
                    </ContainerCategory>
                    <MovieReview>Avaliação {rating}</MovieReview>
                </ContainerMovie>
                <ContainerColumn>
                    <TitleInfoMovie>{movieData.title}</TitleInfoMovie>
                    <ContainerSinopse>
                        <Title>Sinopse</Title>
                        <Text className="sinopse">{sinopse}</Text>
                    </ContainerSinopse>
                    <PlayTrailer 
                    href={`https://www.youtube.com/watch?v=${pathTrailer}`}
                    target="_blank">
                        <ImYoutube2 className="youtube" />
                        Assistir trailer
                    </PlayTrailer>
                    <ContainerRow>
                        <Director>
                            <Title>Direção</Title>
                            <Text>{director}</Text>
                        </Director>
                    </ContainerRow>
                    <Title>Elenco</Title>
                    <ContainerActors>
                        {actors.slice(0, visibleActors).map((actor, index) => (
                            <Actor key={index}>
                                <PhotoActor
                                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                    alt={actor.name}
                                    onError={(e) => e.target.src = "/default-actor.png"}
                                />
                                <NameActor>{actor.name}</NameActor>
                                <Charactername>{actor.character}</Charactername>
                            </Actor>
                        ))}
                    </ContainerActors>
                    {visibleActors == 8 && (
                        <ShowActors onClick={showAllActors}>Ver elenco completo</ShowActors>
                    )}
                    {visibleActors > 8 && (
                        <ShowActors onClick={showLess}>Ver menos</ShowActors>
                    )}
                </ContainerColumn>
            </Main >
        </>
    );
};

export { ContainerDetails };
