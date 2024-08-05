"use client";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
const Video = ({ id, title, vote, img, name, season }) => {
  const customTitle = title?.slice(0, 20);
  const customVote = vote?.toFixed(1);

  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="bg-purple-50 shrink grow basis-52 rounded-lg min-w-52 overflow-hidden">
      <Image
        className="transition-all"
        src={`https://image.tmdb.org/t/p/w400${img}`}
        alt="img1"
        width={400}
        height={400}
        style={{
          minHeight: "312px",
          height: "auto",
          opacity: isLoaded ? 1 : 0.3,
        }}
        onLoad={() => setIsLoaded(true)}
        priority
      />
      <div className="p-2">
        <h1 className="text-purple-800 font-bold text-center">
          {title.length > 20 ? `${customTitle} ...` : `${title}`}
        </h1>
        <div className="flex mt-4 items-center flex-row-reverse justify-between">
          <div className="flex flex-row-reverse items-center">
            <StarIcon className="size-5 text-yellow-400" />
            <span className="ml-1 font-bold">{customVote}</span>
          </div>
          {!season && (
            <Link
              href={`/${name ? "series" : "movies"}/${id}`}
              className="btn bg-purple-700 text-white p-1 px-2 rounded-lg hover:bg-purple-100 hover:text-purple-950 transition-all hover:border-purple-950 border"
              prefetch={false}
            >
              عرض التفاصيل
            </Link>
          )}
          {season && <p className="font-medium">{season}</p>}
        </div>
      </div>
    </div>
  );
};

export default Video;
