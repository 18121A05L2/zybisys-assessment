import Image from "next/image";
import React, { useState } from "react";
import { BsSearch, BsBookmark } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import Link from "next/link";

export default function Sidebar() {
      const [search, setSearch] = useState();

      function handleChange(e) {
        setSearch(e.target.value);
      }
   
  return (
    <div className="bg-slate-700  w-screen h-[5rem]  text-white flex  justify-between fixed top-0 left-0 right-0 z-50 px-14 ">
      <div className="flex items-center gap-10">
        <Link href="/">
          <HiOutlineHome className="icon w-[2rem] h-[2rem]" />
        </Link>

        <Link href="/?watchlist=all">
          <BsBookmark className="icon" />
        </Link>
      </div>
      <div className="flex items-center gap-10 ">
        <div className="flex">
          <input onChange={handleChange} value={search} type="text"></input>
          <BsSearch className="icon" />
        </div>

        <Image
          className="rounded-full"
          src="/side.png"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
