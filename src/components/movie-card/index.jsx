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
                <MovieCover src={image} />
                <MovieName>{name}</MovieName>
                <MovieScore>{rating}</MovieScore>
            </Movie>
        </Link>
    )
}

export { MovieCard }