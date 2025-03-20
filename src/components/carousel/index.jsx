import {
    CarouselContainer,
    CategoryTitles,
    DivMovies,
    ButtonLeft,
    ButtonRight,
    DivMovie,
    Image,
    InfoMovie,
    MovieName,
    Year,
    MovieReview
} from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const Carousel = ({ nameCarousel, listMovies }) => {

    const navigate = useNavigate();
    const [ currentMovie, setCurrentMovie ] = useState(9);
    const [ positionCarousel, setPositionCarousel ] = useState(0);

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

    const goDetails = (id) => {
        navigate(`/details/movie/${id}`);
    }

    return (
        <CarouselContainer>
            <CategoryTitles>{nameCarousel}</CategoryTitles>
            <DivMovies>
                <ButtonLeft
                    disabled={currentMovie === 0}
                >
                    <BiSolidLeftArrow
                        className={`arrow-left ${currentMovie === 0 ? 'disable' : ''}`}
                        onClick={scrollLeft}
                    />
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
                            onClick={() => goDetails(movie.id)}
                        />
                        <InfoMovie className={index === currentMovie ? 'active' : ''}>
                            <MovieName>{movie.name}</MovieName>
                            <Year>{movie.date}</Year>
                            <MovieReview>{`AVALIAÇÃO: ${movie.rating > 0 ? movie.rating : '-'}`}</MovieReview>
                        </InfoMovie>
                    </DivMovie>
                ))}
                <ButtonRight
                    disabled={currentMovie === listMovies.length - 1}
                    className={listMovies.length === 19 ? 'disable' : ''}
                >
                    <BiSolidRightArrow
                        className={`arrow-right ${currentMovie === 18 ? 'disable' : ''}`}
                        onClick={scrollRight}
                    />
                </ButtonRight>
            </DivMovies>
        </CarouselContainer>
    );
};

export { Carousel };