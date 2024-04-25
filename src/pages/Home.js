import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovieLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((res) => res.json())
    .then((movieObj) => setMovieLists(movieObj))
  } , [])

  const listOfMovies = movies.map((movie) => {
   return <MovieCard movie={movie} key={movie.id} />
  })





  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {listOfMovies}
      </main>
    </>
  );
};

export default Home;
