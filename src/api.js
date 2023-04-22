import axios from "axios";

export const fetchJokes = async () => {
  const randomPage = Math.floor(Math.random() * 100); // Generate a random page number between 0 and 99
  const response = await axios.get("https://icanhazdadjoke.com/search", {
    headers: {
      Accept: "application/json",
    },
    params: {
      page: randomPage,
      limit: "10",
      sort: "random",
    },
  });
  return response.data.results;
};
