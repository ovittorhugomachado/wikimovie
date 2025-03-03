import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetailsMovie } from "../services/getMovies";
import { fetchCreditsMovie } from "../services/getMovies";
import { fetchTrailerMovie } from "../services/getMovies";
import { ProfileCard } from "../components/profile-card";
import { MovieInfo } from "../components/movie-info";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const MovieDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movieData, setMovieData] = useState(null);
    const [trailerMovie, setTrailerMovie] = useState([])
    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {
        setLoading(true);

        const getDetailsMovie = async () => {
            try {
                const data = await fetchDetailsMovie(id);
                setMovieData(data);
                const movieCast = await fetchCreditsMovie(id)
                setMovieCast(movieCast)
                const trailerMovie = await fetchTrailerMovie(id)
                setTrailerMovie(trailerMovie)
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getDetailsMovie()
    }, [id]);

    if (loading) {
        return <img className="loading" src="/loading.png" />
    }
    if (error) {
        return <img className="error" src="/error.png" />
    }

    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}min`;
    };
    const name = movieData.title;
    const image = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;
    const sinopse = movieData.overview
    const movieTime = formatRuntime(movieData.runtime)
    const rating = movieData.vote_average.toFixed(1)
    const pathTrailer = trailerMovie.results?.filter(trailer => trailer.type === 'Trailer').slice(-1)[0]?.key;
    const cast = movieCast?.cast || [];
    const director = movieCast?.crew?.filter(crew => crew.job === 'Director' || crew.department === 'Writing')[0]
    const writer = movieCast?.crew.filter(
        member => member.department === "Writing" && (
            member.job === "Writer" || member.job === "Story"
        )
    );

    return (
        <>
            <Header />
            <main className="details">
                <ProfileCard
                    name={name}
                    image={image}
                    info1={movieTime}
                    info2={movieData.genres.map(item => item.name).join(", ")}
                    info3={`avaliação ${rating}`}
                />
                <MovieInfo
                    name={name}
                    sinopse={sinopse}
                    trailer={pathTrailer}
                    director={director}
                    writer={writer}
                    cast={cast}
                />
            </main >
            <Footer />
        </>
    );
};

export { MovieDetails };
