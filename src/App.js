import { useEffect, useState } from "react";
import Joke from "./components/Joke";
import { fetchJokes } from "./api";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function getJokes() {
      const fetchedJokes = await fetchJokes();
      setJokes(fetchedJokes); // Take the first 10 jokes
    }
    getJokes();
  }, []);

  return (
    <div className="p-5 w-3/4 bg-blue-300 mx-auto">
      <h1 className="font-bold text-2xl">Dad Jokes App</h1>
      {jokes.length > 0 ? (
        jokes.map((joke) => <Joke key={joke.id} joke={joke} />)
      ) : (
        <p>Loading jokes...</p>
      )}
    </div>
  );
}

export default App;
