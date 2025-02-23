import { ButtonLeft, ButtonRight, CarouselContainer, CategoryTitles, DivMovie, DivMovies, Image, InfoMovie, MovieCategory, MovieName, MovieReview } from "./style";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { use, useState } from "react";

const Carousel = () => {

    const movies = [
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: '100%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter: Pecado Original",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter: Pecado Original",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter: Pecado Original",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: '89%'
        },
        {
            image: "../images.jpeg",
            name: "Dexter",
            genre: "Crime, Drama",
            rating: '89%'
        }
    ];

    const [currentMovie, setCurrentMovie] = useState(5)
    const [positionCarousel, setPositionCarousel] = useState(0)

    const scrollRight = () => {
        setCurrentMovie((prevMovie) => prevMovie + 1);
        setPositionCarousel((prevPosition) => prevPosition - 140)
    }

    const scrollLeft = () => {
        setCurrentMovie((prevMovie) => prevMovie - 1);
        setPositionCarousel((prevPosition) => prevPosition + 140)
    }

    return (
        <CarouselContainer>
            <CategoryTitles>Filmes em destaque</CategoryTitles>
            <DivMovies >
                <ButtonLeft
                    onClick={scrollLeft}
                    disabled={currentMovie == 0}
                >
                    <BiSolidLeftArrow className="arrow-left" />
                </ButtonLeft>
                {movies.map((movie, index) => (
                    <DivMovie
                        key={index}
                        style={{ transform: `translateX(${positionCarousel}px)` }}
                    >
                        <Image src={movie.image} className={index == currentMovie ? 'active' : ''} />
                        <InfoMovie key={index} className={index == currentMovie ? 'active' : ''}>
                            <MovieName>{movie.name}</MovieName>
                            <MovieCategory>{movie.genre}</MovieCategory>
                            <MovieReview>{`AVALIAÇÃO: ${movie.rating}`}</MovieReview>
                        </InfoMovie>

                    </DivMovie>
                ))}
                <ButtonRight
                    onClick={scrollRight}
                    disabled={currentMovie == 19}>
                    <BiSolidRightArrow className="arrow-right" />
                </ButtonRight>
            </DivMovies>
        </CarouselContainer>
    )
}

export { Carousel }