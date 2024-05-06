import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
//https://api.themoviedb.org/3/movie/now_playing?api_key=e0abc88156d380bf9979cd93aac04390