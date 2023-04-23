import Joke from "./Joke";

function JokesList({ jokes, updateJokes }) {
  const handelUpvote = (id) => {
    const updatedJokes = jokes.map((joke) => {
      if (joke.id === id) {
        return { ...joke, votes: joke.votes + 1 };
      }
      return joke;
    });
    updateJokes(updatedJokes);
  };

  const handleDownvote = (id) => {
    const updatedJokes = jokes.map((joke) => {
      if (joke.id === id) {
        return { ...joke, votes: joke.votes - 1 };
      }
      return joke;
    });
    updateJokes(updatedJokes);
  };

  const renderedJokes = jokes.map((joke) => (
    <Joke
      joke={joke}
      key={joke.id}
      handelUpvote={() => handelUpvote(joke.id)}
      handleDownvote={() => handleDownvote(joke.id)}
    />
  ));

  return <div>{renderedJokes}</div>;
}

export default JokesList;
