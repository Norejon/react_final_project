import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

const initialState = {
    movies: [],
    erros: null,
    loading: null,
    videos: []
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async (id, rejectedWithValue) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }

    }
)
const getVideos = createAsyncThunk(
    'movieSlice/getVideos',
    async (id, rejectedWithValue) => {
        try {
            const {data} = await movieService.getVideos(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }

    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.movies = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const items = action.payload;
                state.movies = items
                state.loading = false
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.videos = action.payload;

            })

});
const {reducer: movieReducer, actions: {getMovies}} = movieSlice;

const movieActions = {
    getAll,
    getMovies,
    getById,
    getVideos
}

export {
    movieActions,
    movieSlice,
    movieReducer
}