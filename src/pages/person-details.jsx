import {
    fetchActorDetails,
    fetchActorFilmography
} from "../services/getMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Loading } from "../components/loading";
import { ProfileCard } from "../components/profile-card";
import { PersonInfo } from "../components/person-info";

const PersonDetails = () => {
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ person, setPerson ] = useState([]);
    const [ filmography, setFilmography ] = useState([]);
    const [ topMoviesActor, setTopMoviesActor ] = useState([]);
    const [ topMoviesProducer, setTopMoviesProducer ] = useState([]);
    const [ allMoviesActor, setAllMoviesActor ] = useState([]);
    const [ allMoviesProducer, setAllMoviesProducer ] = useState([]);

    const removeDuplicatesAndSortByYear = (array) => {
        const uniqueIds = new Set();
        return array
            .filter(item => !uniqueIds.has(item.id) && uniqueIds.add(item.id)) 
            .sort((a, b) => {
                const yearA = a.release_date ? parseInt(a.release_date.split("-")[0]) : 0;
                const yearB = b.release_date ? parseInt(b.release_date.split("-")[0]) : 0;
                return yearB - yearA; 
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

        setLoading(true);

        const fetchData = async () => {
            try {
                const [actorData, filmographyData] = await Promise.all([
                    fetchActorDetails(id),
                    fetchActorFilmography(id),
                ]);
                setPerson(actorData);
                setFilmography(filmographyData);

                const uniqueCast = removeDuplicatesAndSortByYear(filmographyData.cast || []);
                setTopMoviesActor(getTopMovies(uniqueCast));
                setAllMoviesActor(sortByReleaseDate(uniqueCast));

                const uniqueCrew = removeDuplicatesAndSortByYear(filmographyData.crew || []);
                setTopMoviesProducer(getTopMovies(uniqueCrew));
                setAllMoviesProducer(sortByReleaseDate(uniqueCrew));
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [id]);


    if (loading) {
        return <Loading />
    }
    if (error) {
        return <img className="error" src="/error.png" />
    }

    document.title = person.name;

    return (
        <>
            <Header />
            <main className="details">
                <ProfileCard
                    name={person.name}
                    image={person.profile_path}
                    info1={person.birthday}
                    info2={person.place_of_birth}
                    info3={null}
                />
                <PersonInfo
                    person={person}
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

export { PersonDetails };