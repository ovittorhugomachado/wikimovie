import { ListItem, Cover, Info, Name, Year, Sinopse } from "./style";

const MovieCard = ({ image, name, year, sinopse }) => {

    return (
            <ListItem>
                <Cover 
                    src={`https://image.tmdb.org/t/p/w500${image}`}
                    alt={name}
                    onError={(e) => e.target.src = "/default-cover.png"}
    
                />
                <Info>
                    <Name>{name}</Name>
                        <Year>{year}</Year>
                        <Sinopse>{sinopse}</Sinopse>
                </Info>
            </ListItem>
    )
}

export { MovieCard }