import {apiService} from "./apiService";
import {urls} from "../configs/urls";

const genreService = {
    getAll: () => apiService.get(urls.genres)

}
export {
    genreService
}