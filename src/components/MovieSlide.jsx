import dynamic from "next/dynamic";
import Container from "./Container";
import Title from "./Title";
import { getTheList } from "@/api/movieAPI";

const MovieSection = dynamic(() => import("./MovieSection"), {
  ssr: false,
});

const MovieSlide = async () => {
  const listOfTypes = await getTheList();

  return (
    <Container>
      <div className="px-3 mt-10">
        {listOfTypes.map((type) => (
          <section className={``} key={type.id}>
            <Title>أفلام {type.name}</Title>
            <div className="flex gap-3 justify-center">
              {<MovieSection id={type.id} />}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
};

export default MovieSlide;
