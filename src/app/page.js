import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies";
import CustomLoading from "@/components/CustomLoading";
const MovieSlide = dynamic(() => import("@/components/MovieSlide"), {
  ssr: false,
  loading: () => <CustomLoading />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Movies />
      <MovieSlide />
    </>
  );
}
