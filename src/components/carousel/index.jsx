import {
    ButtonLeft,
    ButtonRight,
    CarouselContainer,
    CategoryTitles,
    DivMovie, 
    DivMovies,
    Image,
    InfoMovie,
    Year,
    MovieName,
    MovieReview
} from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const Carousel = ({ nameCarousel, listMovies }) => {
    const [ currentMovie, setCurrentMovie ] = useState(9);
    const [ positionCarousel, setPositionCarousel ] = useState(0);

    const scrollRight = () => {
        if (currentMovie < listMovies.length - 1) {
            setCurrentMovie((prevMovie) => prevMovie + 1);
            setPositionCarousel((prevPosition) => prevPosition - 152);
        }
    };

    const scrollLeft = () => {
        if (currentMovie > 0) {
            setCurrentMovie((prevMovie) => prevMovie - 1);
            setPositionCarousel((prevPosition) => prevPosition + 152);
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
                    <BiSolidLeftArrow 
                         className={`arrow-left ${currentMovie === 0 ? 'disable' : ''}`} 
                    />
                </ButtonLeft>
                {listMovies.map((movie, index) => (
                    <Link to={`/details/movie/${movie.id}`} key={index}>
                        <DivMovie
                            style={{ transform: `translateX(${positionCarousel}px)` }}
                        >
                            <Image
                                src={movie.image}
                                className={index === currentMovie ? 'active' : ''}
                                alt={movie.name}
                            />
                            <InfoMovie className={index === currentMovie ? 'active' : ''}>
                                <MovieName>{movie.name}</MovieName>
                                <Year>{movie.date}</Year>
                                <MovieReview>{`AVALIAÇÃO: ${movie.rating}`}</MovieReview>
                            </InfoMovie>
                        </DivMovie>
                    </Link>
                ))}
                <ButtonRight
                    onClick={scrollRight}
                    disabled={currentMovie === listMovies.length - 1}
                    className={listMovies.length === 19 ? 'disable' : ''}
                >
                    <BiSolidRightArrow
                        className={`arrow-right ${currentMovie === 18 ? 'disable' : ''}`} 
                    />
                </ButtonRight>
            </DivMovies>
        </CarouselContainer>
    );
};

export { Carousel };