import { ContainerActors, 
        Direction, 
        ContainerMovie,
        Main, 
        ContainerCategory, 
        MovieCover, 
        MovieReview, 
        MovieTime, 
        PageTitle, 
        Photo, 
        Title, 
        Text, 
        ContainerColumn, 
        TitleInfoMovie, 
        Actor, 
        NameActor, 
        Crew, 
        ContainerSinopse, 
        Genre, 
        Charactername, 
        ShowActors, 
        Loading, 
        Error, 
        PlayTrailer } from "./style";
import { Link, useParams } from "react-router-dom";
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
    const [showButton, SetShowButton] = useState(8);

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
    const director = movieCast?.crew?.filter(crew => crew.job === 'Director')[0]
    const writer = movieCast?.crew?.filter(crew => crew.job === 'Story')[0]
    const pathTrailer = trailerMovie.results?.filter(trailer => trailer.type === 'Trailer').slice(-1)[0]?.key;

    const showAllActors = () => {
        setVisibleActors((prev) => prev + 42);
        SetShowButton(false)
    }
    const showLess = () => {
        setVisibleActors((prev) => prev - 42);
        SetShowButton(true)
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
                    <Direction>
                        <Link to={`/details/person/${director.id}`}>
                            <Photo
                                src={`https://image.tmdb.org/t/p/w500${director.profile_path}`}
                                alt={director.name}
                                onError={(e) => e.target.src = "/default-actor.png"}
                            />
                        </Link>
                        <Crew>
                            <Title>Direção</Title>
                            <Text>{director.name}</Text>
                        </Crew>
                        <Link to={`/details/person/${writer.id}`}>
                            <Photo
                                src={`https://image.tmdb.org/t/p/w500${writer.profile_path}`}
                                alt={writer.name}
                                onError={(e) => e.target.src = "/default-actor.png"}
                            />
                        </Link>
                        <Crew>
                            <Title>Escritor</Title>
                            <Text>{writer.name}</Text>
                        </Crew>
                    </Direction>
                    <Title>Elenco</Title>
                    <ContainerActors>
                        {actors.slice(0, visibleActors).map((actor, index) => (
                            <Actor key={index}>
                                <Link to={`/details/person/${actor.id}`}>
                                    <Photo
                                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                        alt={actor.name}
                                        onError={(e) => e.target.src = "/default-actor.png"}
                                    />
                                    <NameActor>{actor.name}</NameActor>
                                    <Charactername>{actor.character}</Charactername>
                                </Link>
                            </Actor>
                        ))}
                    </ContainerActors>
                    {showButton ? (
                        <ShowActors onClick={showAllActors}>Ver elenco completo</ShowActors>
                    ) : (
                        <ShowActors onClick={showLess}>Ver menos</ShowActors>
                    )}
                </ContainerColumn>
            </Main >
        </>
    );
};

export { ContainerDetails };
