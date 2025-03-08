import {
    ListItem,
    Cover,
    Info,
    Name,
    JobAndMovies,
    Job,
    Movies
} from "./style";

const PersonCard = ({ image, name, job, topMovies }) => {

    return (
        <ListItem>
            <Cover
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt={name}
                onError={(e) => e.target.src = "/default-actor.png"} />
            <Info>
                <Name>{name}</Name>
                <JobAndMovies>
                    <Job>{job == 'Acting' ? 'Ator' : 'Produção'}</Job>
                    <Movies>{topMovies}</Movies>
                </JobAndMovies>
            </Info>
        </ListItem>
    )
}

export { PersonCard }