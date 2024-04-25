import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectorsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then ((res) => res.json())
    .then ((directorsObj) => setDirectorsList(directorsObj));
  }, []);

  const listOfDirectors = directors.map((director) => { 
    return (
    <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </ul>
    </article>
    )
  })
  
  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {listOfDirectors}
      </main>
    </>
  );
};

export default Directors;
