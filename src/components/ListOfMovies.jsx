"use client";
import DropdownMenu from "./DropdownMenu";
import { getTheList } from "@/api/movieAPI";
import Link from "next/link";
import { useEffect, useState } from "react";

const ListOfMovies = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        const res = await getTheList();
        setList(res);
        setLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  const exit = [16, 99, 14, 36, 10402, 10770, 37];

  return (
    <DropdownMenu>
      {list
        .filter((el) => !exit.includes(el.id))
        .map((type) => (
          <Link
            className="hover:bg-purple-900 hover:text-white px-2 py-1 border border-x-0 border-t-0 last:border-b-0 border-purple-200 transition-all"
            key={type.id}
            href={`/movies/type/${type.id}?name=${type.name}`}
          >
            {type.name}
          </Link>
        ))}
    </DropdownMenu>
  );
};

export default ListOfMovies;
