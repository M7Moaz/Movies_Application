const Clips = ({ clip }) => {
  return (
    <div className="p-3">
      <div className="flex justify-center gap-3 flex-wrap">
        {clip.map((el) =>
          el.type === "Trailer" ? (
            <div key={el.id} className="">
              <iframe
                className="rounded-lg"
                src={`https://www.youtube.com/embed/${el.key}`}
                width="300"
                height="170"
                allowFullScreen
              ></iframe>
              <p>{el.name}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Clips;
