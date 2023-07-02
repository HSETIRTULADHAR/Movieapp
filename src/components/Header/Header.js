import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user image.avif';
import './header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
export default function Header() {
  const [term,setTerm] = useState();
  const dispatch = useDispatch();
  const handleSubmit = ( e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncSeries(term));
        if (term === "") return alert("Please Enter a Movie or a Series");
        console.log(term);
        setTerm();
  }
  return (
    <div className='header'>
        
        <div className='logo'><Link to="/">Movie app</Link></div>
        <div className='search-bar'>
          <form onSubmit={handleSubmit}>
            <input type='text' value={term} placeholder='Search Movies or Shows' onChange={(e)=> setTerm(e.target.value)}></input>
            <button type='text'>Submit</button>
          </form>
        </div>
          <img src={user} alt="user" className='user-image' />
        
    
    </div>
  )
}
