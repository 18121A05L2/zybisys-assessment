import React, { useState } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";
import Filter from "./Filter";

function Main({ data }) {
  const [search, setSearch] = useState();

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const [filter, setFilter] = useState("");

  function handleFilter(v) {
    setFilter(v);
  }
  console.log("filter ✅" + filter);

  return (
    <div className="pt-[10rem] bg-slate-500">
      <div className="flex justify-end">
        <Filter handleFilter={handleFilter} />

        <input
          className="w-[20rem] h-[4rem] ml-[4rem] bg-red-500"
          onChange={handleChange}
          value={search}
          type="text"
        ></input>
      </div>

      <div className="w-screen h-full  grid grid-cols-3  p-4 gap-6 ">
        {data
          .filter((item) => {
            if (search) {
              return item.title.toLowerCase().includes(search);
            } else if (filter) {
              const genres = item.genres;
              const genresArr = genres.map((gitem) => gitem.name);
              console.log("genere" + genresArr);
              return genresArr.some((gitem) => gitem.toLowerCase() == filter.toLowerCase());
            } else {
              return item;
            }
          })
          .map((item) => {
            // console.log(item);
            return <Card key={uuidv4()} item={item} />;
          })}
      </div>
    </div>
  );
}

export default Main;
