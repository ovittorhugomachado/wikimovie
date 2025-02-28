import { ContainerActors, ContainerRow, ContainerMovie, Main, ContainerCategory, MovieCover, MovieReview, MovieTime, PageTitle, PhotoActor, Title, Text, ContainerColumn, TitleInfoMovie, Actor, NameActor, Director, ContainerSinopse, Genre, Charactername, ShowActors } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetailsMovie } from "../../services/getMovies";
import { fetchCreditsMovie } from "../../services/getMovies";

const ContainerDetails = () => {
    const { id } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ movieData, setMovieData ] = useState(null);
    const [ movieCast, setMovieCast ] = useState([]);
    const [ visibleActors, setVisibleActors ] = useState(8);

    useEffect(() => {
        setIsLoading(true);

        const getDetailsMovie = async () => {
            try {
                const data = await fetchDetailsMovie(id);
                setMovieData(data);

                const movieCast = await fetchCreditsMovie(id)
                setMovieCast(movieCast)
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        getDetailsMovie()
    }, [id]);


    if (!movieData) {
        return <div>Filme não encontrado!</div>;
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
    const director = movieCast?.crew?.filter(crew => crew.job === 'Director')[0].name

    const showAllActors = () => {
        setVisibleActors((prev) => prev + 42);
    }
    const showLess = () => {
        setVisibleActors((prev) => prev - 42);
    }

    

    console.log(visibleActors)
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
                    <ContainerRow>
                        <Director>
                            <Title>Direção</Title>
                            <Text>{director}</Text>
                        </Director>
                    </ContainerRow>
                    <Title>Elenco</Title>
                    <ContainerActors>
                        {actors.slice(0,visibleActors).map((actor, index) => (
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
                            <ShowActors onClick={showAllActors}>Ver elenco completa</ShowActors>
                        )}
                        {visibleActors > 8 && (
                            <ShowActors onClick={showLess}>Ver menos</ShowActors>
                        )}
                </ContainerColumn>
            </Main>
        </>
    );
};

export { ContainerDetails };


//map para acessar o array do elenco
// {movieData.elenco.map((actor, index) => (
//     <Actor key={index}>
//         <PhotoActor /> {/* Exemplo de imagem do ator */}
//         <NameActor></NameActor>
//     </Actor>
// ))}