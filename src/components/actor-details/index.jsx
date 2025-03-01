import { Main, Loading, Error, PageTitle, ContainerLeft, ContainerRight, PhotoActor, Birth, PlaceOfBirth, Title, Text } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchActorDetails } from "../../services/getMovies";
import { fetchActorFilmography } from "../../services/getMovies";

const ContainerDetails = () => {
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ actor, setActor ] = useState([]);
    const [ filmography, setFilmography ] = useState([]);
    const [ topMovies, setTopMovies ] = useState([]);



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

    console.log(actor)

    if (loading) {
        return <Loading src="/loading.png" />
    }
    if (error) {
        return <Error src="/error.png" />
    }

    const showAllActors = () => {
        setVisibleActors((prev) => prev + 42);
    }
    const showLess = () => {
        setVisibleActors((prev) => prev - 42);
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
                    

                </ContainerRight>


                {/* <ContainerMovie>
                    <MovieCover src= />
                    <MovieTime></MovieTime>
                    <ContainerCategory>
                        {movieData.genres.map((genre, index) => (
                            <Genre key={index}></Genre>
                        ))}
                    </ContainerCategory>
                    <MovieReview>Avaliação</MovieReview>
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
                        <Photo
                            src={`https://image.tmdb.org/t/p/w500${director.profile_path}`}
                            alt={director.name}
                            onError={(e) => e.target.src = "/default-actor.png"}
                        />
                        <Director>
                            <Title>Direção</Title>

                            <Text>{director.name}</Text>
                        </Director>
                    </Direction>
                    <Title>Elenco</Title>
                    <ContainerActors>
                        {actors.slice(0, visibleActors).map((actor, index) => (
                            <Actor key={index}>
                                <Photo
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
                </ContainerColumn> */}
            </Main >
        </>
    );
};

export { ContainerDetails };
