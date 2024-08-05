import dynamic from "next/dynamic";
import SectionWithScroll from "./SectionWithScroll";

const Video = dynamic(() => import("./Video"), {
  ssr: false,
});
const Seasons = ({ seasons }) => {
  return (
    <div className="px-3">
      <SectionWithScroll>
        {seasons.map(
          (el) =>
            el.poster_path && (
              <Video
                key={el.id}
                id={el.id}
                title={el.name}
                vote={el.vote_average}
                img={el.poster_path}
                season={el.air_date}
              />
            )
        )}
      </SectionWithScroll>
    </div>
  );
};

export default Seasons;
