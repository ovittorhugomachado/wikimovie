import { Main, ListMovies, Movie, MovieCover, MovieName, PageTitle, LeadMoreButton } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";
import movies from '../../../json/movies.json';

const ContainerListMovie = () => {

    return (
        <>
            <Header />
            <Main>
                <PageTitle>TERROR</PageTitle>
                <ListMovies>
                    {movies.map((movie, index) => (
                        <Movie key={index}>
                            <MovieCover src={movie.image} />
                            <MovieName>{movie.name}</MovieName>
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