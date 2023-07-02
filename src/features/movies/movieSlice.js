import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useState } from "react";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieApi
          .get(`?apiKey=${APIkey}&s=${term}&type=movie`);
          
    return response.data;
});

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async (term) => {
    const response = await movieApi
          .get(`?apiKey=${APIkey}&s=${term}&type=series`);
          
    return response.data;
});

export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk('movies/fetchAsyncMovieOrSeriesDetail',
 async (id) => {
    const response = await movieApi.get(
        `?apiKey=${APIkey}&i=${id}&Plot=full`
    );
    return response.data;
    
})

const initialState = {
    movies: {},
    series: {},
    selectedMovieOrSeries: {},
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Peding");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fulfilled");
            return {...state,movies: payload};
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log("Rejected");
            
        },
        [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
            console.log("Fulfilled");
            return {...state,series: payload};
        },
        [fetchAsyncMovieOrSeriesDetail.fulfilled]: (state, {payload}) => {
            console.log("Fulfilled");
            return {...state,selectedMovieOrSeries: payload};
        },
    }


});


export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series; 
export const getSelectedMovieOrSeries = (state) => state.movies.selectedMovieOrSeries;
export default moviesSlice.reducer;
