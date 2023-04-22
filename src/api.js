import axios from "axios";

export const fetchJokes = async () => {
  const response = await axios.get("https://icanhazdadjoke.com/search", {
    headers: {
      Accept: "application/json",
    },
    params: {
      page: "1",
      limit: "10",
    },
  });
  return (response.data.results);
};
