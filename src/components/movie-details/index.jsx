import { Header } from "../header";
import { Footer } from "../footer";
import { ContainerActors, ContainerRow, ContainerMovie, Main, MovieCategory, MovieCover, MovieReview, MovieTime, PageTitle, PhotoActor, Title, Text, ContainerColumn, TitleInfoMovie, Actor, NameActor, Director, ContainerSinopse } from "./style";
import { useParams } from "react-router-dom";
import list from '../../../json/movies.json';
import { useEffect, useState } from "react";

const ContainerDetails = () => {
    const { movie } = useParams();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        // Percorre todos os gêneros e filmes para encontrar o filme correspondente
        const foundMovie = list.generos.flatMap((genero) => genero.filmes)
            .find((filme) => filme.nome === movie);

        if (foundMovie) {
            setMovieData(foundMovie);
        }

    }, [movie]);

    if (!movieData) {
        return <div>Filme não encontrado!</div>;
    }

    console.log(movieData)
    return (
        <>
            <Header />
            <Main>
                <PageTitle>{movieData.nome}</PageTitle>
                <ContainerMovie>
                    <MovieCover src={movieData.imagem} />
                    <MovieTime>1h 42min</MovieTime> {/* Exemplo de duração */}
                    <MovieCategory>Terror, Thriller</MovieCategory> {/* Exemplo de categorias */}
                    <MovieReview>Avaliação {movieData.avaliacao}%</MovieReview>
                </ContainerMovie>
                <ContainerColumn>
                    <TitleInfoMovie>{movieData.nome}</TitleInfoMovie>
                    <ContainerSinopse>
                        <Title>Sinopse</Title>
                        <Text className="sinopse">{movieData.sinopse}</Text>
                    </ContainerSinopse>
                    <ContainerRow>
                        <Director>
                            <Title>Diretor</Title>
                            <Text>{movieData.diretor}</Text>
                        </Director>
                        <Director>
                            <Title>Roteiro</Title>
                            <Text>{movieData.roteirista}</Text>
                        </Director>
                    </ContainerRow>
                    <Title>Elenco</Title>
                    <ContainerActors>
                        
                    </ContainerActors>
                </ContainerColumn>
            </Main>
            <Footer />
        </>
    );
};

export { ContainerDetails };


//map para acessar o array do elenco
// {movieData.elenco.map((actor, index) => (
//     <Actor key={index}>
//         <PhotoActor /> {/* Exemplo de imagem do ator */}
//         <NameActor></NameActor>
//     </Actor>
// ))}