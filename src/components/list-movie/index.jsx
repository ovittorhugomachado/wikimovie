import { useState, useEffect } from "react";
import { Main, ListMovies, Movie, MovieCover, MovieName, MovieScore, PageTitle, LeadMoreButton, LoadingOrError } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";
import list from '../../../json/movies.json';
import { useParams } from "react-router-dom";

const ContainerListMovie = () => {
    const { genre } = useParams();
    
    const [genreFilter, setGenreFilter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const filteredGenre = list.generos.find(genero => genero.slug === genre);
        
        if (filteredGenre) {
            setGenreFilter(filteredGenre);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [genre]);

    if (isLoading) {
        return <LoadingOrError>Carregando...</LoadingOrError>;
    }

    if (!genreFilter) {
        return <LoadingOrError>Página não encontrada!</LoadingOrError>;
    }

    return (
        <>
            <Header />
            <Main>
                <PageTitle>{genreFilter.nome}</PageTitle>
                <ListMovies>
                    {genreFilter.filmes.map((movie, index) => (
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
    );
};

export { ContainerListMovie };
