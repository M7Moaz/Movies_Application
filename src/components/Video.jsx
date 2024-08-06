"use client";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import cardImg from "/public/imgCard.webp";

const Video = ({ id, title, vote, img, name, season }) => {
  const customTitle = title?.slice(0, 20);
  const customVote = vote?.toFixed(1);
  const [customImg, setCustomImg] = useState(
    `https://image.tmdb.org/t/p/w300${img}`
  );

  return (
    <div
      style={{ maxWidth: "250px" }}
      className="bg-purple-50 shrink grow basis-52 rounded-lg min-w-52 overflow-hidden"
    >
      <Image
        className="transition-all"
        src={customImg}
        alt={title}
        width={250}
        height={250}
        style={{
          minHeight: "312px",
          height: "auto",
          width: "100%",
        }}
        priority
        onError={() => setCustomImg(cardImg)}
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
