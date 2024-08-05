import { detailAPI, videoAPI } from "@/api/movieAPI";
import Clips from "@/components/Clips";
import Container from "@/components/Container";
import MovieDetails from "@/components/MovieDetails";
import Similar from "@/components/Similar";

export async function generateMetadata({ params }) {
  const { id } = params;
  const details = await detailAPI({ id });
  const { title, overview } = details;

  return {
    title: `سيري بيست | فيلم ${title}`,
    description: `شاهد فيلم ${title} الآن على سيري بيست. اكتشف قصة ${overview} واستمتع بمراجعات وتقييمات حصرية.`,
  };
}

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
        <Similar id={id} type={"movie"} />
      </Container>
    </div>
  );
};

export default MovieDetail;
