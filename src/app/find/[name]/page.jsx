import { searchFor } from "@/api/movieAPI";
import Container from "@/components/Container";
import ItemsNotFound from "@/components/ItemsNotFound";
import Title from "@/components/Title";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("@/components/Video"), {
  ssr: false,
});

const Find = async ({ params }) => {
  const { name } = params;
  const decodeName = decodeURIComponent(name);
  const result = await searchFor(decodeName);

  return (
    <Container>
      <div className="px-3">
        <Title>نتائج البحث عن [ {decodeName} ]</Title>
        <div className="flex flex-wrap gap-3 justify-center">
          {result.length != 0 ? (
            result.map((el) => (
              <Video
                key={el.id}
                title={el.title ? el.title : el.name}
                vote={el.vote_average}
                img={el.poster_path}
                id={el.id}
                name={el.title ? null : el.id}
              />
            ))
          ) : (
            <ItemsNotFound name={decodeName} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Find;
