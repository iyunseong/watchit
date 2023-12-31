import SearchForm from "@/components/SearchForm";
import Link from "next/link";
import MovieList from "@/components/MovieList";
import styles from "@/styles/Home.module.css";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await axios.get("/movies");
    const nextMovies = res.data.results;
    setMovies(nextMovies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
