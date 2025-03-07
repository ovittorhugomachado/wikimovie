import { List, ListItem, Cover, Info, Name, JobAndMovies, Sinopse, Year } from "./style";

const MovieCard = ({ image, name, year, sinopse }) => {

    return (
        <List>
            <ListItem>
                <Cover src={image} />
                <Info>
                    <Name>{name}</Name>
                    <JobAndMovies>
                        <Year>{year}</Year>
                        <Sinopse>{sinopse}</Sinopse>
                    </JobAndMovies>
                </Info>
            </ListItem>
        </List>
    )
}

export { MovieCard }