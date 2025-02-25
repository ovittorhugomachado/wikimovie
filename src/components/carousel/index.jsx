import { ButtonLeft, ButtonRight, CarouselContainer, CategoryTitles, DivMovie, DivMovies, Image, InfoMovie, MovieCategory, MovieName, MovieReview } from "./style";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

const Carousel = ({ nameCarousel, listMovies }) => {
    const [currentMovie, setCurrentMovie] = useState(9);
    const [positionCarousel, setPositionCarousel] = useState(0);

    const scrollRight = () => {
        if (currentMovie < listMovies.length - 1) {
            setCurrentMovie((prevMovie) => prevMovie + 1);
            setPositionCarousel((prevPosition) => prevPosition - 140);
        }
    };

    const scrollLeft = () => {
        if (currentMovie > 0) {
            setCurrentMovie((prevMovie) => prevMovie - 1);
            setPositionCarousel((prevPosition) => prevPosition + 140);
        }
    };
    

    return (
        <CarouselContainer>
            <CategoryTitles>{nameCarousel}</CategoryTitles>
            <DivMovies>
                <ButtonLeft
                    onClick={scrollLeft}
                    disabled={currentMovie === 0}
                >
                    <BiSolidLeftArrow className="arrow-left" />
                </ButtonLeft>
                {listMovies.map((movie, index) => (
                    <DivMovie
                        key={index}
                        style={{ transform: `translateX(${positionCarousel}px)` }}
                    >
                        <Image
                            src={movie.image}
                            className={index === currentMovie ? 'active' : ''}
                            alt={movie.name}
                        />
                        <InfoMovie className={index === currentMovie ? 'active' : ''}>
                            <MovieName>{movie.name}</MovieName>
                            <MovieCategory></MovieCategory>
                            <MovieReview>{`AVALIAÇÃO: ${movie.rating}`}</MovieReview>
                        </InfoMovie>
                    </DivMovie>
                ))}
                <ButtonRight
                    onClick={scrollRight}
                    disabled={currentMovie === listMovies.length - 1}
                >
                    <BiSolidRightArrow className="arrow-right" />
                </ButtonRight>
            </DivMovies>
        </CarouselContainer>
    );
};

export { Carousel };