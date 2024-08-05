import { movieByType } from "@/api/movieAPI";
import dynamic from "next/dynamic";
import SectionWithScroll from "./SectionWithScroll";

const Video = dynamic(() => import("./Video"), {
  ssr: false,
});

const MovieSection = async ({ id }) => {
  const movies = await movieByType(id);
  const { results } = movies;
  return (
    <SectionWithScroll>
      {results.map((el) => (
        <Video
          key={el.id}
          title={el.title}
          vote={el.vote_average}
          img={el.poster_path}
          id={el.id}
        />
      ))}
    </SectionWithScroll>
  );
};

export default MovieSection;
