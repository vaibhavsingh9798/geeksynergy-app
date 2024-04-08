import {createBrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import About from './components/About/About';
import Navbar from './components/UI/Navbar';
import MovieList from './components/Movie/MovieList';

function App() {
  

  return (
    <>
    <Navbar />
     
       <Routes>
        <Route path='/signup' element={  <Signup />} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={ <MovieList />} />
       </Routes>
       
      
    </>
  );
}

export default App;
