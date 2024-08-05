import { similarTo } from "@/api/movieAPI";
import SectionWithScroll from "./SectionWithScroll";
import Video from "./Video";
import Title from "./Title";

const Similar = async ({ id, type }) => {
  const similar = await similarTo(id, type);

  return (
    <div className="px-3">
      <Title>{type === "movie" ? "أفلام" : "مسلسلات"} قد تعجبك أيضاً</Title>
      <SectionWithScroll>
        {type === "movie"
          ? similar.map((el) => (
              <Video
                key={el.id}
                title={el.title}
                vote={el.vote_average}
                img={el.poster_path}
                id={el.id}
              />
            ))
          : similar.map((el) => (
              <Video
                key={el.id}
                title={el.name}
                vote={el.vote_average}
                img={el.poster_path}
                id={el.id}
                name={el.id}
              />
            ))}
      </SectionWithScroll>
    </div>
  );
};

export default Similar;
