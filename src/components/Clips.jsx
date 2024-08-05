import SectionWithScroll from "./SectionWithScroll";
const Clips = ({ clip }) => {
  return (
    <div className="p-3">
      <SectionWithScroll>
        {clip.map((el) =>
          el.type === "Trailer" ? (
            <div key={el.id} className="bg-purple-50 h-fit rounded-lg ">
              <iframe
                className="rounded-t-lg"
                src={`https://www.youtube.com/embed/${el.key}`}
                width="300"
                height="170"
                allowFullScreen
              ></iframe>
              <p
                style={{ direction: "ltr" }}
                className="text-center p-3 font-medium text-purple-900 italic"
              >
                {Array.from(el.name).slice(0, 30)} ...
              </p>
            </div>
          ) : (
            ""
          )
        )}
      </SectionWithScroll>
    </div>
  );
};

export default Clips;
