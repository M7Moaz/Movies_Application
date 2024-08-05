import Video from "./Video";

const Seasons = ({ seasons }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4 px-3">
      {seasons.map(
        (el) =>
          el.poster_path && (
            <Video
              id={el.id}
              title={el.name}
              vote={el.vote_average}
              img={el.poster_path}
              season={el.air_date}
            />
          )
      )}
    </div>
  );
};

export default Seasons;
