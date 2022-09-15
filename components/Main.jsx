import React, { useState,useEffect } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";
import Filter from "./Filter";
import { useRecoilState } from "recoil";
import { watchlist } from "../atoms/watchlist";

function Main({ data }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const [filter, setFilter] = useState("");

  function handleFilter(v) {
    setFilter(v);
  }


   const [items, setItems] = useRecoilState(watchlist);
   console.log("items in recoil" + items);

   const initialState = [];

   useEffect(() => {
     const watchlistData = JSON.parse(localStorage.getItem("watchlist"));
     if (watchlistData) {
       setItems(watchlistData);
       console.log("recoil state with " + watchlistData);
     }
   }, []);

   useEffect(() => {
     if (items.length !== initialState.length) {
       localStorage.setItem("watchlist", JSON.stringify(items));
       console.log("Setting Local Storage");
     }
   }, [items]);

   console.log(items);

  return (
    <div className="pt-[7rem] p-10 bg-slate-500">
      <div className="flex justify-end">
        <Filter handleFilter={handleFilter} />

        <input
          className="w-[20rem] h-[4rem] ml-[4rem] bg-red-200 text-[1.5rem] tracking-wider"
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
