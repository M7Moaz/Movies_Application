import Image from "next/image";
const base_img = "https://image.tmdb.org/t/p/w500";
import { StarIcon } from "@heroicons/react/24/solid";

const MovieDetails = ({ detail }) => {
  const {
    genres,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    last_air_date,
    title,
    vote_average,
    original_title,
    popularity,
  } = detail;

  const viewers = popularity?.toString().split(".").join("");
  const customChar =
    viewers?.length < 7 ? "K" : viewers?.length < 11 ? "M" : "T";
  const customNumber = viewers?.slice(0, 2).split("").join(".");

  const customPopularity = customNumber + customChar;
  const customVote = vote_average?.toFixed(1);

  return (
    <div className="px-3 mt-5">
      <h1 className="text-center font-bold mb-4 transition-all text-xl md:text-4xl">
        {original_title}
      </h1>
      <div className="flex md:flex-row-reverse flex-col justify-between bg-purple-100 rounded-lg overflow-hidden ">
        <div className="basis-2/5 lg:basis-72">
          <Image
            src={`${base_img}${poster_path}`}
            alt="Movie Poster"
            width={400}
            height={400}
            priority
            className="hidden md:block w-full h-full"
          />
          <Image
            src={`${base_img}${backdrop_path}`}
            alt="Movie Poster"
            width={700}
            height={700}
            style={{ height: "auto" }}
            priority
            className="block md:hidden w-full"
          />
        </div>
        <div className="p-3 flex flex-col justify-around flex-1">
          <div className="top">
            <div className="font-bold text-xl">{title}</div>
            <p className="mt-3">{overview}</p>
            <p className="mt-3">
              <span>أول عرض : {release_date}</span>
            </p>
            <p className="mt-3">
              <span>أخر عرض : {last_air_date}</span>
            </p>
            <p className="mt-2">عدد المشاهدات: {customPopularity}</p>
            <div className="flex items-center gap-1 mt-5">
              <span>التقييم: {customVote}</span>
              <StarIcon className="size-5 text-yellow-400" />
            </div>
          </div>

          <div className="undr">
            <h1 className="mt-9">التصنيف</h1>
            <div className="flex gap-2 mt-1">
              {genres &&
                genres.map((el) => (
                  <p
                    className="bg-purple-800 text-white p-1 px-2 rounded-md"
                    key={el.id}
                  >
                    {el.name}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
