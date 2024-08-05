import { detailAPI, videoAPI } from "@/api/movieAPI";
import Clips from "@/components/Clips";
import Container from "@/components/Container";
import MovieDetails from "@/components/MovieDetails";

const MovieDetail = async ({ params }) => {
  const { id } = params;
  const details = await detailAPI({ id });
  const clips = await videoAPI({ id });

  const {
    genres,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    title,
    vote_average,
    original_title,
    popularity,
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
            release_date,
            title,
            vote_average,
            original_title,
            popularity,
          }}
        />
        <Clips clip={results} />
      </Container>
    </div>
  );
};

export default MovieDetail;
