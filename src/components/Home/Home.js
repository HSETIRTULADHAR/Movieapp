import React, {useEffect, useState }from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'
export default function Home() {
  const dispatch = useDispatch();
  const movieText = "Gravity";
  const seriesText = "Vikings";
  useEffect( () => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(seriesText));
   },[dispatch]);

    

  return (
    <div>
     <div className='banner-img'> </div>     
     <MovieListing />
    </div>
  )
}
