import Container from "./Container";
import Title from "./Title";
import Video from "./Video";
import movieAPI from "@/api/movieAPI";
const Movies = async () => {
  const movies = await movieAPI();
  const movieData = movies.results;

  return (
    <Container>
      <div className="px-3">
        <Title>الأفلام الحديثة</Title>
        <div className="flex flex-wrap gap-3 justify-center">
          {movieData.map((el) => (
            <Video
              key={el.id}
              title={el.title}
              vote={el.vote_average}
              img={el.poster_path}
              id={el.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Movies;
