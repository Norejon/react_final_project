import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services/genreService";


const initialState = {
    genres: [],
    erros: null,
    loading: null,
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll()
            return data.genres
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    getGenres: (state, action) => {
        state.genres = action.payload
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const items = action.payload;
                state.genres = items
            })
})

const {reducer: genreReducer, actions: {getGenres}} = genreSlice;

const genreActions = {
    getAll,
    getGenres
}

export {
    genreActions,
    genreSlice,
    genreReducer
}