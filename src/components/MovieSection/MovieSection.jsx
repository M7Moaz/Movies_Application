import { movieByType } from "@/api/movieAPI";
import Video from "../Video";
import styles from "./MovieSection.module.css";
const MovieSection = async ({ id }) => {
  const movies = await movieByType(id);
  const { results } = movies;
  return (
    <section className={`${styles.MovieSection} movie-section py-2`}>
      {results.map((el) => (
        <Video
          key={el.id}
          title={el.title}
          vote={el.vote_average}
          img={el.poster_path}
          id={el.id}
        />
      ))}
    </section>
  );
};

export default MovieSection;
