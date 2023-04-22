import { useEffect, useState } from "react";
import Joke from "./components/Joke";
import { fetchJokes } from "./api";

function App() {
  const [jokes, setJokes] = useState([]);

  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    async function getJokes() {
      const fetchedJokes = await fetchJokes();
      setJokes(fetchedJokes); // Take the first 10 jokes
    }
    getJokes();
  }, [pressed]);

  const handleClick = () => {
    setPressed((prev) => !prev);
  };

  return (
    <div className="p-5 w-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mx-auto shadow">
      <div className="flex justify-between mb-1">
        <h1 className="font-bold text-2xl">Dad Jokes App</h1>
        <button
          onClick={handleClick}
          className="p-1 rounded bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-100 transform active:translate-x-0.5 active:-translate-y-0.5"
        >
          New Jokes
        </button>
      </div>

      {jokes.length > 0 ? (
        jokes.map((joke) => <Joke key={joke.id} joke={joke} />)
      ) : (
        <p>Loading jokes...</p>
      )}
    </div>
  );
}

export default App;
