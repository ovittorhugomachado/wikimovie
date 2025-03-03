import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchActorDetails } from "../services/getMovies";
import { fetchActorFilmography } from "../services/getMovies";
import { ProfileCard } from "../components/profile-card";
import { PersonInfo } from "../components/person-info";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const DetailsPerson = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actor, setActor] = useState([]);
    const [filmography, setFilmography] = useState([]);
    const [topMoviesActor, setTopMoviesActor] = useState([]);
    const [topMoviesProducer, setTopMoviesProducer] = useState([]);
    const [allMoviesActor, setAllMoviesActor] = useState([]);
    const [allMoviesProducer, setAllMoviesProducer] = useState([]);

    const removeDuplicatesAndSortByYear = (array) => {
        const uniqueIds = new Set();
        return array
            .filter(item => !uniqueIds.has(item.id) && uniqueIds.add(item.id)) // Remove duplicatas
            .sort((a, b) => {
                const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
                const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
                return yearB - yearA; // Ordena em ordem decrescente
            });
    };

    const sortByReleaseDate = (array) => {
        return array.sort((a, b) => {
            const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
            const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
            return yearB - yearA;
        });
    };

    const getTopMovies = (array, limit = 20) => {
        return array
            .filter(item => item.media_type === "movie")
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, limit);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const [actorData, filmographyData] = await Promise.all([
                    fetchActorDetails(id),
                    fetchActorFilmography(id),
                ]);

                setActor(actorData);
                setFilmography(filmographyData);

                const uniqueCast = removeDuplicatesAndSortByYear(filmographyData.cast || []);
                setTopMoviesActor(getTopMovies(uniqueCast));
                setAllMoviesActor(sortByReleaseDate(uniqueCast));

                const uniqueCrew = removeDuplicatesAndSortByYear(filmographyData.crew || []);
                setTopMoviesProducer(getTopMovies(uniqueCrew));
                setAllMoviesProducer(sortByReleaseDate(uniqueCrew));

            } catch (err) {
                console.error("Erro ao buscar dados:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);


    if (loading) {
        return <img className="loading" src="/loading.png" />
    }
    if (error) {
        return <img className="error" src="/error.png" />
    }

    return (
        <>
            <Header />
            <main className="details">
                <ProfileCard
                    name={actor.name}
                    image={actor.profile_path}
                    info1={actor.birthday}
                    info2={actor.place_of_birth}
                />
                <PersonInfo
                    person={actor}
                    filmography={filmography}
                    allMoviesActor={allMoviesActor}
                    allMoviesProducer={allMoviesProducer}
                    topMoviesActor={topMoviesActor}
                    topMoviesProducer={topMoviesProducer}
                />
            </main >
            <Footer />
        </>

    );
};

export { DetailsPerson };