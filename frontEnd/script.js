const api_key = '296029553702fd08376315b888367413';
const api_base = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${api_base}${endpoint}`);
    const json = await req.json();
    return json;

}

export default{
    getHomelist: async () => {
        return [
            { slug: 'top_rated',
              title: 'Mais curtidos',
              items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
            },

            { slug: 'now_playing',
              title: 'Em cartaz',
              items: await basicFetch(`/movie/now_playing?language=pt-BR&api_key=${api_key}`)
            },

            { slug: 'upcoming',
              title: 'Em breve',
              items: await basicFetch(`/movie/upcoming?language=pt-BR&api_key=${api_key}`)
            },

        ];
    }
}