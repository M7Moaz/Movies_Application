"use client";
import { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ total }) => {
  const [fstPoint, setFstPoint] = useState(0);
  const [LstPoint, setLstPoint] = useState(30);
  const router = useRouter();
  const searchParams = useSearchParams();
  const paginationRef = useRef(null);
  const btns = Array.from({ length: total }, (_, i) => i + 1);
  const btnsToAppear = btns.slice(fstPoint, LstPoint);
  const [active, setActive] = useState(null);

  const scrollLeft = () => {
    if (paginationRef.current) {
      if (fstPoint) {
        setFstPoint((prev) => prev - 4);
        setLstPoint((prev) => prev - 4);
        paginationRef.current.scrollBy({ left: 100, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (paginationRef.current) {
      if (LstPoint < total) {
        setFstPoint((prev) => prev + 4);
        setLstPoint((prev) => prev + 4);
        paginationRef.current.scrollBy({ left: -100, behavior: "smooth" });
      }
    }
  };

  const handlePageClick = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    const id = params.get("page");
    setActive(id);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={scrollLeft}
        className="bg-purple-600 text-white min-w-10 min-h-10 rounded-full ml-2"
      >
        {"Prev"}
      </button>
      <div className="p-3 pagination" ref={paginationRef}>
        {btnsToAppear.map((el) => (
          <button
            key={el}
            className={`${
              active == el ? "bg-purple-300" : "bg-purple-800"
            }  min-w-10 min-h-10 text-white`}
            onClick={() => handlePageClick(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="bg-purple-600 text-white min-w-10 min-h-10 rounded-full mr-2"
      >
        {"Next"}
      </button>
    </div>
  );
};

export default Pagination;
