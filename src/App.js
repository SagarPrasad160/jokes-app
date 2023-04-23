import JokesList from "./components/JokesList";
import { useState, useEffect } from "react";

import { fetchJokes } from "./api";

function App() {
  const [jokes, setJokes] = useState([]);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(!pressed);
  };

  useEffect(() => {
    async function getJokes() {
      const fetchedJokes = await fetchJokes();
      const mappedJokes = fetchedJokes.map((joke) => ({ ...joke, votes: 0 }));
      setJokes(mappedJokes); // Take the first 10 jokes
    }
    getJokes();
  }, [pressed]);

  const updateJokes = (updatedJokes) => {
    setJokes(updatedJokes);
  };

  const sortedJokes = jokes.sort((a, b) => b.votes - a.votes);

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
      <JokesList jokes={sortedJokes} updateJokes={updateJokes} />
    </div>
  );
}

export default App;
