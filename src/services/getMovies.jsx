const fetchPopularMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzE1NzUxYTMxNWQxZjdmYmJhY2Q2N2U3NTU0ZjBiYyIsIm5iZiI6MTczOTkyNDM1Ny4yNDQsInN1YiI6IjY3YjUyMzg1MTRhOGIwYWZmNmRiNWRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atPmZnZzOUWqdN8Hv36JxfyeZeknel1f0F3F9h8oGbg'
        }
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        return data; // Retorna os dados da API
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error; // Lança o erro para ser tratado onde a função for chamada
    }
};

export { fetchPopularMovies };