import { GoChevronUp, GoChevronDown } from "react-icons/go";

function Joke({ joke, handelUpvote, handleDownvote }) {
  const getColor = () => {
    if (joke.votes >= 10) {
      return "bg-green-500";
    } else if (joke.votes >= 6) {
      return "bg-green-400";
    } else if (joke.votes >= 4) {
      return "bg-green-300";
    } else if (joke.votes >= 0) {
      return "bg-green-200";
    } else if (joke.votes <= -1) {
      return "bg-red-300";
    } else if (joke.votes <= -5) {
      return "bg-red-500";
    }
  };
  return (
    <div className="flex items-center border  pl-2">
      <div className="font-semibold text-xl">{joke.joke}</div>
      <div className="flex flex-col items-center">
        <GoChevronUp className="cursor-pointer" onClick={handelUpvote} />
        <span
          className={`rounded-full  m-2 inline-block w-10 text-center ${getColor()}`}
        >
          {joke.votes}
        </span>{" "}
        <GoChevronDown className="cursor-pointer" onClick={handleDownvote} />{" "}
      </div>
    </div>
  );
}

export default Joke;
