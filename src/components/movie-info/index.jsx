import {
    TitleInfoMovie,
    ContainerSinopse,
    Title,
    Text,
    PlayTrailer,
    Photo,
    ContainerPersons,
    Person,
    NameActor,
    Charactername,
} from "./style"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImYoutube2 } from "react-icons/im";

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
            <ContainerPersons>
                <Person>
                    <Title>Diretor</Title>
                    <Link to={`/details/person/${director.id}`}>
                        <Photo
                            src={`https://image.tmdb.org/t/p/w500${director.profile_path}`}
                            alt={director.name}
                            onError={(e) => e.target.src = "/default-actor.png"}
                        />
                    </Link>
                    <NameActor>{director.name}</NameActor>
                </Person>
                {writer.length > 0 && (
                    <Person>
                        <Title>Escritor</Title>
                        <Link to={`/details/person/${writer[0].id}`}>
                            <Photo
                                src={`https://image.tmdb.org/t/p/w500${writer[0].profile_path}`}
                                alt={writer[0].name}
                                onError={(e) => e.target.src = "/default-actor.png"}
                            />
                        </Link>
                        <NameActor>{writer[0].name}</NameActor>
                    </Person>
                )}
            </ContainerPersons>
            <Title>Elenco</Title>
            <ContainerPersons>
                {cast.slice(0, visibleActors).map((actor, index) => (
                    <Person key={index}>
                        <Link to={`/details/person/${actor.id}`}>
                            <Photo
                                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                alt={actor.name}
                                onError={(e) => e.target.src = "/default-actor.png"}
                            />
                            <NameActor>{actor.name}</NameActor>
                            <Charactername>{actor.character}</Charactername>
                        </Link>
                    </Person>
                ))}
            </ContainerPersons>
            {cast.length > 8 && (
                showButton ? (
                    <button onClick={showAllActors}>Ver elenco completo</button>
                ) : (
                    <button onClick={showLess}>Ver menos</button>
                )
            )}
            { }
        </div>
    )
}

export { MovieInfo }
