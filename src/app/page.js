import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";

const Movies = dynamic(() => import("@/components/Movies"), {});

export default function Home() {
  return (
    <>
      <Hero />
      <Movies />
    </>
  );
}
