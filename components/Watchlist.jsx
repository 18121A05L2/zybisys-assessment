import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { watchlist } from "../atoms/watchlist";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { BsChevronDoubleLeft } from "react-icons/bs";

function Watchlist() {
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

  console.log(items)

  return (
    <div>
      Watchlist
      {items.map((item) => {
        for (let key in item) {
          console.log(key);
          return <Card item={item[key]} key={uuidv4()} />;
        }
      })}
    </div>
  );
}

export default Watchlist;
