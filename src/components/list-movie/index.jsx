import { Main, ListMovies, Movie, MovieCover, MovieName, MovieScore, PageTitle, LeadMoreButton } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";
import list from '../../../json/movies.json';
import { useContext } from "react";
import { GenreContext } from "../../context/genre-context";

const ContainerListMovie = () => {
    const { currentGenre } = useContext(GenreContext)

    const listMovie = list.generos[10].filmes

    return (
        <>
            <Header />
            <Main>
                <PageTitle>{currentGenre}</PageTitle>
                <ListMovies>
                    {listMovie.map((movie, index) => (
                        <Movie key={index}>
                            <MovieCover src={movie.imagem} />
                            <MovieName>{movie.nome}</MovieName>
                            <MovieScore>{movie.avaliacao}</MovieScore>
                        </Movie>
                    ))}
                </ListMovies>
                <LeadMoreButton>CARREGAR MAIS</LeadMoreButton>
            </Main>
            <Footer />
        </>
    )
}

export { ContainerListMovie }