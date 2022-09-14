import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";

export default function Filter(props) {
  const [filter, setFilter] = useState(false);

  function handleP(e) {
    props.handleFilter(e.target.innerHTML);
  }
  function handleCareDown() {
    setFilter(!filter);
    props.handleFilter("");
  }
  return (
    <div className="relative ">
      <div
        className="flex bg-blue-200 p-4 items-center gap-6 w-full cursor-pointer"
        onClick={handleCareDown}
      >
        <p className="font-bold text-xl">filter</p>
        {filter || <AiFillCaretLeft className="careleft" />}
        {filter && <AiFillCaretDown className="caredown" />}
      </div>
      {filter && (
        <div className="absolute z-40 top-20 bg-blue-200 w-full  divide-y divide-black p-1 text-center cursor-pointer">
          <p onClick={handleP}>Action</p>
          <p onClick={handleP}>Adventure</p> <p></p>
          <p onClick={handleP}>Comedy</p>
          <p onClick={handleP}>Drama</p>
          <p onClick={handleP}>Sci-Fi</p>
          <p onClick={handleP}>Mystery</p>
          <p onClick={handleP}>Supernatural</p>
          <p onClick={handleP}>Fantacy</p>
          <p onClick={handleP}>sports</p>
          <p onClick={handleP}>Romance</p>
          <p onClick={handleP}>Slice of Life</p>
        </div>
      )}
    </div>
  );
}
