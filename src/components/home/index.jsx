import { Main } from "./style";
import { Header } from "../header";
import { Footer } from "../footer";
import { Carousel } from "../carousel";
import axios from "axios";


const ContainerHome = () => {

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/238/images',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzE1NzUxYTMxNWQxZjdmYmJhY2Q2N2U3NTU0ZjBiYyIsIm5iZiI6MTczOTkyNDM1Ny4yNDQsInN1YiI6IjY3YjUyMzg1MTRhOGIwYWZmNmRiNWRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atPmZnZzOUWqdN8Hv36JxfyeZeknel1f0F3F9h8oGbg'
        }
    };

    axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));

    const ListaDeMaisBemAvaliados = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: { language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzE1NzUxYTMxNWQxZjdmYmJhY2Q2N2U3NTU0ZjBiYyIsIm5iZiI6MTczOTkyNDM1Ny4yNDQsInN1YiI6IjY3YjUyMzg1MTRhOGIwYWZmNmRiNWRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atPmZnZzOUWqdN8Hv36JxfyeZeknel1f0F3F9h8oGbg'
        }
    };

    axios
        .request(ListaDeMaisBemAvaliados)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));


    // const listaDeFilmes = {
    //     method: 'GET',
    //     url: 'https://api.themoviedb.org/3/discover/movie',
    //     params: {
    //       include_adult: 'false',
    //       include_video: 'false',
    //       language: 'pt-BR',
    //       page: '487',
    //       sort_by: 'popularity.desc'
    //     },
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzE1NzUxYTMxNWQxZjdmYmJhY2Q2N2U3NTU0ZjBiYyIsIm5iZiI6MTczOTkyNDM1Ny4yNDQsInN1YiI6IjY3YjUyMzg1MTRhOGIwYWZmNmRiNWRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atPmZnZzOUWqdN8Hv36JxfyeZeknel1f0F3F9h8oGbg'
    //     }
    //   };

    //   axios
    //     .request(listaDeFilmes)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error(err));

    // const listaDeGeneros = {
    //     method: 'GET',
    //     url: 'https://api.themoviedb.org/3/genre/movie/list',
    //     params: {language: 'en'},
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzE1NzUxYTMxNWQxZjdmYmJhY2Q2N2U3NTU0ZjBiYyIsIm5iZiI6MTczOTkyNDM1Ny4yNDQsInN1YiI6IjY3YjUyMzg1MTRhOGIwYWZmNmRiNWRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atPmZnZzOUWqdN8Hv36JxfyeZeknel1f0F3F9h8oGbg'
    //     }
    //   };

    //   axios
    //     .request(listaDeGeneros)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error(err));
    return (
        <>
                <Header />
                <Main>
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
                </Main>                
                <Footer />
        </>
    )
}

export { ContainerHome }