import Container from "@/components/Container";
import { movieByType } from "@/api/movieAPI";
import Title from "@/components/Title";
import Video from "@/components/Video";
import dynamic from "next/dynamic";
import CustomLoading from "@/components/CustomLoading";

const Pagination = dynamic(() => import("@/components/Pagination"), {
  ssr: false,
  loading: () => <CustomLoading />,
});

const TypeId = async ({ params, searchParams }) => {
  const { id } = params;
  const { name } = searchParams;
  const pageId = searchParams.page || 1;
  const moveies = await movieByType(id, pageId);
  const { results } = moveies;
  const { total_pages } = moveies;

  return (
    <Container>
      <div className="px-3">
        <Title>{name}</Title>
        <div className="flex flex-wrap gap-3 justify-center">
          {results.map((el) => (
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

      <Pagination total={total_pages} />
    </Container>
  );
};

export default TypeId;
