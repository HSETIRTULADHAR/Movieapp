import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies , getAllSeries} from "../../features/movies/movieSlice";
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import { Settings } from "../../common/Settings";
import './Movelisting.scss';

import { render } from "react-dom";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  console.log(movies);
  let renderMovies, renderSeries  = "";
 
  renderMovies = 
    movies.Response === "True" ? (
      movies.Search.map( (movie,index) =>  
        
      <MovieCard key={index} data={movie}/>
        
) 
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

    renderSeries = 
    series.Response === "True" ? (
      series.Search.map( (serie,index) =>  
        
      <MovieCard key={index} data={serie}/>
        
) 
    ) : (
      <div>
        <h3>{series.Error}</h3>
      </div>
    );
    return (
        <div className="movie-wrapper"> 
          <div className="movie-list">
            <h2>Movies</h2>
            <div>
              <Slider {...Settings}>{renderMovies}</Slider>
            </div>
      
          </div>
          <div className="series-list">
            <h2>Series</h2>
            <div>
              <Slider {...Settings}> {renderSeries}</Slider>
            </div>
          </div>
        </div>
    );
};

export default MovieListing;