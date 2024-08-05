import dynamic from "next/dynamic";
import Loading from "./loading";

export const metadata = {
  title: "سيري بيست | المزيد من الأفلام",
  description:
    "أستكشف المزيد من الافلام من سيري بيست وأستمتع بأحدث العروض على السينما.",
};

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
