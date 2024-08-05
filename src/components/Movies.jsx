import Container from "./Container";
import Title from "./Title";
import movieAPI from "@/api/movieAPI";
import { Suspense } from "react";
import Video from "./Video";
import Link from "next/link";

const Movies = async () => {
  const movies = await movieAPI();
  const movieData = movies.results;

  return (
    <Container>
      <div className="px-3">
        <Title>الأفلام الحديثة</Title>
        <div className="flex flex-wrap gap-3 justify-center">
          {movieData.map((el) => (
            <Suspense key={el.id}>
              <Video
                key={el.id}
                title={el.title}
                vote={el.vote_average}
                img={el.poster_path}
                id={el.id}
              />
            </Suspense>
          ))}
        </div>
        <Link
          className="bg-purple-600 text-white py-1 px-4 rounded-full mx-auto text-center block mt-5 max-w-52"
          href={"/movies"}
        >
          مشاهدة المزيد ..
        </Link>
      </div>
    </Container>
  );
};

export default Movies;
