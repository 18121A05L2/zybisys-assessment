import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { atom, useRecoilState } from "recoil";
import { watchlist } from "../atoms/watchlist";

function Card({ item }) {
  const [watchListItems, setWatchListItems] = useRecoilState(watchlist);
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const title = item.title;
  const image_url = item.images.jpg.image_url;
  const rating = item.rating;
  const genresArr = item.genres.map((gitem) => gitem.name);
  let isThisItemInWatchlist = Boolean(
    watchListItems.filter((a) => a.hasOwnProperty(String(item.mal_id))).length
  );
  // console.log(watchListItems);
  // console.log("isItemInWatchlist: ✅✅✅✅" + isThisItemInWatchlist);

  function handleDragStart(e) {
    console.log("drag Started");
    e.dataTransfer.setData("item", JSON.stringify(item));
  }
  function handleBookmarkClick() {
    setIsWatchlisted(!isWatchlisted);
    // Adding this item to the watch list
    if (!isThisItemInWatchlist) {
      setWatchListItems([...watchListItems, { [item.mal_id]: item }]);
    } else {
      // DELETING FROM WATCHLSIT
      setWatchListItems((prev) => {
        let ret = [...prev];
        let index = ret.findIndex(
          (el) => Number(Object.keys(el)[0]) === Number(item.mal_id)
        );
        console.log("deleting index : " + index);
        ret.splice(Number(index), 1);
        if (index == 0) {
          localStorage.setItem("watchlist",JSON.stringify([]))
        }
        return ret;
      });
      console.log("unwatchlisted");
      console.log(watchListItems);
    }
  }

  return (
    <div className=" ">
      <div
        draggable="true"
        onDragStart={handleDragStart}
        className="flex flex-col bg-slate-600 w-[25rem] "
      >
        <Link href={`${item.mal_id}`}>
          <Image
            className="cursor-pointer"
            src={image_url}
            width={200}
            height={400}
          ></Image>
        </Link>
        <div className="flex justify-between  text-left p-2 ">
          <div className="flex flex-col justify-around">
            <h1 className="text-white font-extrabold">Title : {title}</h1>
            <p className="text-orange-300 font-medium">Rating : {rating}</p>
            <div>
              Genres :
              {genresArr.map((genre) => (
                <span key={genre}>{genre},</span>
              ))}
            </div>
          </div>
          <BsFillBookmarkFill
            onClick={handleBookmarkClick}
            className={`hover:scale-125 m-9 text-[2rem] transition-all delay-100 ${
              isThisItemInWatchlist ? "text-white" : null
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
