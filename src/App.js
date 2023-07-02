import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/Home/Home.js';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './App.scss';   

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
        <Route  element={<PageNotFound/>} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
