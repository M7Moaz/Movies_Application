import dynamic from "next/dynamic";
import Loading from "./loading";

const MovieSlide = dynamic(() => import("@/components/MovieSlide"), {
  ssr: false,
  loading: () => <Loading />,
});

const page = () => {
  return (
    <>
      <MovieSlide />
    </>
  );
};

export default page;
