import axios from "axios";
export async function getAllMovies() {
  const response = await axios
    .get("http://localhost:5000/movie/allMovies")
    .catch((err) => console.log(err));

  const result = response.data;
  return result;
}
