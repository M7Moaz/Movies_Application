import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full min-h-96 h-lvh flex items-center justify-center">
      <div className="relative inset-0 flex justify-center items-center">
        <div className="relative">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <Image
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            className="rounded-full h-28 w-28"
            alt="img_2"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
