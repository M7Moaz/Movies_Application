import { detailAPI, videoAPI } from "@/api/movieAPI";
import Container from "@/components/Container";
import dynamic from "next/dynamic";
import Clips from "@/components/Clips";
import Seasons from "@/components/Seasons";
import Similar from "@/components/Similar";

export async function generateMetadata({ params }) {
  const { id } = params;
  const details = await detailAPI({ id, type: "tv" });
  const { name, overview } = details;

  return {
    title: `سيري بيست | ${name}`,
    description: `استمتع بمشاهدة ${name} مع سيري بيست. ${overview}`,
  };
}

const MovieDetails = dynamic(() => import("@/components/MovieDetails"), {
  ssr: false,
});

const SeriesPage = async ({ params }) => {
  const { id } = params;
  const details = await detailAPI({ id, type: "tv" });
  const clips = await videoAPI({ id, type: "tv" });

  const {
    genres,
    overview,
    poster_path,
    backdrop_path,
    first_air_date,
    last_air_date,
    name,
    vote_average,
    original_title,
    popularity,
    seasons,
  } = details;

  const { results } = clips;

  return (
    <div>
      <Container>
        <MovieDetails
          detail={{
            genres,
            overview,
            poster_path,
            backdrop_path,
            release_date: first_air_date,
            last_air_date,
            title: name,
            vote_average,
            original_title,
            popularity,
            seasons,
          }}
        />
        <Seasons seasons={seasons} />
        <Clips clip={results} />
        <Similar id={id} type={"tv"} />
      </Container>
    </div>
  );
};

export default SeriesPage;
