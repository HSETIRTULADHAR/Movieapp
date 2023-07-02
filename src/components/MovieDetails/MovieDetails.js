import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrSeriesDetail, getSelectedMovieOrSeries } from "../../features/movies/movieSlice";
import './moviedetails.scss';
const MovieDetails = () => {
 const {imdbID}= useParams();
 console.log(imdbID);
 const dispatch = useDispatch();
 const data = useSelector(getSelectedMovieOrSeries);
 console.log(data);
 useEffect( ()=> {
    dispatch(fetchAsyncMovieOrSeriesDetail(imdbID));
},[dispatch,imdbID]);

return (
    <>
    <div className="movie-section">
        {Object.keys(data).length === 0 ? (
            <div>Loading</div>
        ) :(
        <>
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
                IMDB rating <i className="fa fa-star"></i> : {data.imdbRating}
            </span>
            <span>
                IMDB votes <i className="fa fa-star"></i> : {data.imdbVotes}
            </span>
            <span>
                Runtime <i className="fa fa-star"></i> : {data.Runtime}
            </span>
            <span>
                Year <i className="fa fa-star"></i> : {data.Year}
            </span>
          </div>
          <div className="movie-plot">
            {data.Plot}
          </div>
          <div className="movie-info">
            <div>
                <span>Director:</span>
                <span>{data.Director}</span>
            </div>
            <div>
                <span>Writers:</span>
                <span>{data.Writer}</span>
            </div>
            <div>
                <span>Actors:</span>
                <span>{data.Actors}</span>
            </div>
            <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
            </div>
            <div>
                <span>Languages:</span>
                <span>{data.Language}</span>
            </div>
            <div>
                <span>Awards:</span>
                <span>{data.Awards}</span>
            </div>


          </div>
       </div>
       <div className="section-right">
        <img src={data.Poster} alt={data.Title}/>
       </div>

        </>
        )}
    </div>
    </>

);
};

export default MovieDetails;