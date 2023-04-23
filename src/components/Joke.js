import { GoChevronUp, GoChevronDown } from "react-icons/go";
function Joke({ joke, handelUpvote, handleDownvote }) {
  return (
    <div className="flex items-center border  pl-2">
      <div className="font-semibold">{joke.joke}</div>
      <div className="flex flex-col items-center">
        <GoChevronUp onClick={handelUpvote} />
        <span
          className={`rounded-full bg-green-300 m-2 inline-block w-10 text-center`}
        >
          {joke.votes}
        </span>{" "}
        <GoChevronDown onClick={handleDownvote} />{" "}
      </div>
    </div>
  );
}

export default Joke;
