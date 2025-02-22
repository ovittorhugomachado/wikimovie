import { CarouselContainer, CategoryTitles, DivMovie, DivMovies, Image, InfoMovie, MovieCategory, MovieName, MovieReview } from "./style";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

const Carousel = () => {

    const movies = [
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter: Pecado Original",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter: Pecado Original",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: 8.6
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: 8.6
        }
    ];

    const [currentMovie, setCurrentMovie] = useState(5)

    const scrollRight = () => {
        setCurrentMovie((prevMovie) => prevMovie + 1)
    }

    const scrollLeft = () => {
        setCurrentMovie((prevMovie) => prevMovie - 1)
    }

    console.log(currentMovie)

    return (
        <CarouselContainer>

            <CategoryTitles>Filmes em destaque</CategoryTitles>
            <DivMovies >
                <BiSolidLeftArrow className="arrow-left" onClick={scrollLeft} />
                {movies.map((movie, index) => (
                    <DivMovie 
                    key={index} 
                    style={{
                        transform: `translateX(-50%)`, // Centraliza o filme ativo
                        transition: "transform 0.5s ease", // Adiciona uma transição suave
                    }}>
                        <Image src={movie.image} className={index == currentMovie ? 'active' : ''}/>
                        <InfoMovie key={index} className={index == currentMovie ? 'active' : ''}>
                            <MovieName>{movie.name}</MovieName>
                            <MovieCategory>{movie.genre}</MovieCategory>
                            <MovieReview>{`NOTA: ${movie.rating}`}</MovieReview>

                        </InfoMovie>

                    </DivMovie>
                ))}
                {/* <DivMovie>
                    <Image src="../images.jpeg" />
                    <InfoMovie index='1' className={index == currentMovie ? 'active' : ''}>
                        <MovieName>Dexter</MovieName>
                        <MovieCategory>crime, drama</MovieCategory>
                        <MovieReview>nota: 7/9</MovieReview>
                    </InfoMovie>
                </DivMovie> */}


                <BiSolidRightArrow className="arrow-right" onClick={scrollRight} />
            </DivMovies>
        </CarouselContainer>
    )
}

export { Carousel }