
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
const MovieList = () =>{

  const [movies,setMovies] = useState([])
  const [error,setError] = useState('')

    const fetchMovies = async () =>{
        try{
        let response = await  axios.post('https://hoblist.com/api/movieList',{
            category: "movies",
            language: "kannada", 
            genre: "all",
            sort: "voting"
        })
        setMovies(response.data.result)
    }catch(err){
        setError('Something wrong with fetch movies') 
    }
        
        
    }
    
    useEffect(() =>{
         fetchMovies()
    },[])

    return(
        <>
         {(!error && !movies.length) ? <h1 className="flex justify-center items-center h-screen font-semibold">Loading.....</h1> : movies.map((movie) => {
            return(
                <div key={movie._id}>
                      <MovieCard movie={movie} />
                </div>
            )
         })}
           {/* {(!error && !movies.length) && } */}
           {error && <p className='text-red-500 mt-2'>{error}</p>}
        </>
    )
}

export default MovieList;