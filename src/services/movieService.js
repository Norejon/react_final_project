import {apiService} from "./apiService";
import {urls} from "../configs/urls";

const movieService = {
    getAll: (page = 1) => apiService.get(urls.movie, {params: {page}}),
    getById: (movie_id) => apiService.get(`/${urls.onemovie}/${movie_id}`),
    getVideos: (movie_id) => apiService.get(`/${urls.onemovie}/${movie_id}/videos`)
}

export {
    movieService
}