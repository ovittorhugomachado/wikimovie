import axios from "axios";

export const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'pt-BR',
      page: '2',
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzE1NzUxYTMxNWQxZjdmYmJhY2Q2N2U3NTU0ZjBiYyIsIm5iZiI6MTczOTkyNDM1Ny4yNDQsInN1YiI6IjY3YjUyMzg1MTRhOGIwYWZmNmRiNWRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atPmZnZzOUWqdN8Hv36JxfyeZeknel1f0F3F9h8oGbg'
    }
  };
  
  axios
    .request(options)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));