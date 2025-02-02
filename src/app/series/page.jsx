import Container from "@/components/Container";
import { getSeries } from "@/api/movieAPI";
import Title from "@/components/Title";
import Pagination from "@/components/Pagination";
import Video from "@/components/Video";

export const metadata = {
  title: "سيري بيست | جميع المسلسلات",
  description:
    "استمتع بمشاهدة أحدث المسلسلات مع سيري بيست. تصفح مراجعات المسلسلات، تقييمات المستخدمين، وإصدارات المسلسلات الجديدة. اكتشف المسلسلات الأكثر شهرة واطلع على أحدث الأخبار والترشيحات لضمان أفضل تجربة مشاهدة.",
};

const Series = async ({ searchParams }) => {
  const { page } = searchParams;
  const series = await getSeries(page);
  const { results, total_pages } = series;

  return (
    <Container>
      <div className="p-3">
        <Title>المسلسلات</Title>
        <div className="flex flex-wrap gap-3 justify-center">
          {results.map((el) => (
            <Video
              key={el.id}
              title={el.name}
              vote={el.vote_average}
              img={el.poster_path}
              id={el.id}
              name={el.id}
            />
          ))}
        </div>
        <Pagination total={total_pages} />
      </div>
    </Container>
  );
};

export default Series;
