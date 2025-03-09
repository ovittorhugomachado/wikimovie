import {
    Movie,
    MovieCover,
    MovieName,
    MovieScore
} from "./style"
import { Link } from "react-router-dom"

const MovieCard = ({ id, image, name, rating }) => {
    
    return (
        <Link key={id} to={`/details/movie/${id}`}>
            <Movie >
                <MovieCover
                    src={image}
                    alt={name}
                    onError={(e) => e.target.src = "/default-cover.png"}
                />
                <MovieName>{name}</MovieName>
                <MovieScore>{rating > 0 ? rating : '-'}</MovieScore>
            </Movie>
        </Link>
    )
}

export { MovieCard }