import { detailAPI, videoAPI } from "@/api/movieAPI";
import Clips from "@/components/Clips";
import Container from "@/components/Container";
import MovieDetails from "@/components/MovieDetails";
import Seasons from "@/components/Seasons";

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
      </Container>
    </div>
  );
};

export default SeriesPage;
