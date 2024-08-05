"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const Search = () => {
  const inputRef = useRef(null);
  const router = useRouter();

  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value.trim() !== "") {
      router.push(`/find/${value}`);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-fit">
      <label
        className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-row items-center justify-center border gap-2 shadow-2xl border-purple-100 focus-within:border-purple-600 "
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="البحث ..."
          className="px-6 w-full flex-1 outline-none bg-white"
          ref={inputRef}
        />
        <button
          className="w-auto px-6 py-1.5 bg-purple-600 text-white fill-white active:scale-95 duration-100 will-change-transform overflow-hidden relative transition-all disabled:opacity-70"
          onClick={handleSearch}
        >
          <div className="relative">
            <div className="flex items-center transition-all opacity-1 valid:">
              <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                بحث
              </span>
            </div>
          </div>
        </button>
      </label>
    </div>
  );
};

export default Search;
