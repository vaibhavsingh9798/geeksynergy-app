
const MovieCard = ({movie}) =>{

  const date = new Date(movie.releasedDate * 1000)
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.getDate()
  const releasedDate =  `${day} ${month}`;
    return(
        <div className=" flex justify-center m-1">
           <div className=" w-96 h-48 bg-slate-100 text-slate-800">
           
             <div className="flex justify-around  mt-2">

              <div className="flex flex-col  justify-around">
               <div> <img src="https://cdn-icons-png.flaticon.com/128/14984/14984219.png" alt="Up"  width={25} height={25} /></div>
               <div className="ml-2">  <h1>1</h1> </div>
               <div> <img src="https://cdn-icons-png.flaticon.com/128/25/25224.png" alt="Down" width={25} height={25} /></div>
               <div> <p>Votes</p> </div>
               </div>


               <div>
                <img src={movie.poster} alt="poster" className="  w-20   h-28 rounded-md "/>
               </div>

               <div>
                
               <div className=" font-semibold text-lg">{movie.title}</div>
               <div><span className=" text-slate-500">Genre: </span> {movie.genre}</div>
               <div><span className=" text-slate-500">Director: </span>{movie.director}</div>
               <div><span className=" text-slate-500">Starring: </span>{movie.stars[0].length > 17 ? movie.stars[0].substring(0,20)+'....' : movie.stars }</div>
               <div> Mins | {movie.language} | {releasedDate}</div>
               <div className=" text-green-400">{movie.pageViews} views | Voted by {movie.totalVoted} pepole </div>
               </div>

             </div>
            
             <div className=" bg-blue-500 mt-1 rounded-sm  mx-3"><button className="flex justify-center items-center   w-full text-slate-200 mb-2">Watch Trailer</button></div>
             <div className="border-b border-gray-400  w-full"></div>
           </div>
        

        </div>
       
    )
}

export default MovieCard;