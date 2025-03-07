import {
    ContainerMovieInfo,
    TitleInfoMovie,
    ContainerSinopse,
    Title,
    Text,
    PlayTrailer,
    ContainerCrew,
    Direction,
    Photo,
    Crew,
    ContainerActors,
    Actor,
    NameActor,
    Charactername,
} from "./style"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImYoutube2 } from "react-icons/im";
import { Navigate } from "react-router-dom";

const MovieInfo = ({ name, sinopse, trailer, director, writer, cast }) => {

    const [visibleActors, setVisibleActors] = useState(8);
    const [showButton, SetShowButton] = useState(8);

    const showAllActors = () => {
        setVisibleActors((prev) => prev + 42);
        SetShowButton(false)
    }
    const showLess = () => {
        setVisibleActors((prev) => prev - 42);
        SetShowButton(true)
    }

    return (
        <div>
            <TitleInfoMovie>{name}</TitleInfoMovie>
            {sinopse.length > 0 && (
                <ContainerSinopse>
                    <Title>Sinopse</Title>
                    <Text>{sinopse}</Text>
                </ContainerSinopse>
            )}
            <PlayTrailer
                href={`https://www.youtube.com/watch?v=${trailer}`}
                target="_blank">
                <ImYoutube2 className="youtube" />
                Assistir trailer
            </PlayTrailer>
            <ContainerCrew>
                <Direction>
                    <Crew>
                        
                        <Link className="crew" to={`/details/person/${director.id}`}>
                            <Photo
                                src={`https://image.tmdb.org/t/p/w500${director.profile_path}`}
                                alt={director.name}
                                onError={(e) => e.target.src = "/default-actor.png"}
                            />
                        </Link>
                        <div>
                            <Title>Direção</Title>
                            <Text>{director.name}</Text>
                        </div>

                    </Crew>
                    {writer.length > 0 && (
                        <>
                            <Crew>
                                <Link className="crew" to={`/details/person/${writer[0].id}`} style={{ marginLeft: '30px' }}>
                                    <Photo
                                        src={`https://image.tmdb.org/t/p/w500${writer[0].profile_path}`}
                                        alt={writer.name}
                                        onError={(e) => e.target.src = "/default-actor.png"}
                                    />
                                </Link>
                                <div>
                                    <Title>Escritor</Title>
                                    <Text>{writer[0].name}</Text>
                                </div>

                            </Crew>
                        </>
                    )}
                </Direction>
            </ContainerCrew>
            <Title>Elenco</Title>
            <ContainerActors>
                {cast.slice(0, visibleActors).map((actor, index) => (
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
                <button onClick={showAllActors}>Ver elenco completo</button>
            ) : (
                <button onClick={showLess}>Ver menos</button>
            )}
        </div>
    )
}

export { MovieInfo }
