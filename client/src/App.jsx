import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Admin from "./components/admin/Admin";
import Movies from "./components/movies/Movies";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <>
      <Header />

      <section>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
