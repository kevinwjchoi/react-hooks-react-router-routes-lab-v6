import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { act } from "react-dom/test-utils";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then ((res) => res.json())
    .then ((actorObj) => setActors(actorObj))
  }, [])
  
  const listOfActors = actors.map((actor) => {
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie) => <li key={movie}>{movie}</li>)}
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
        <h1>Actors Page</h1>
          {listOfActors}
      </main>
    </>
  );
};

export default Actors;
