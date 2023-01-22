import axios from 'axios'

// chave da api: 3ec9015b0229978a28c3a5e2d674fcfb
// url: https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api