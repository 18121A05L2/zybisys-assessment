import React from "react";
import { useRouter } from "next/router";

function AnimeName({ item }) {
  const {
    title,
    episodes,
    score,
    rank,
    popularity,
    favourites,
    season,
    year,
    type,
  } = item;
  const studios = item.studios.name;
  const trailerUrl = item.trailer.embed_url;
  const aired = item.aired.string;
  const synopsis = item.synopsis;
  const image = item.images.jpg.large_image_url;

  return (
    <div >
      AnimeName
      {/* synopsis, characters, episodes, aired date, trailer */}
      <iframe width={500} height={500} src={trailerUrl}></iframe>
      <div className="flex  w-[30rem] gap-4">
        <div>
          <p>SCORE</p>
          <p>{score}</p>
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-4">
            <p>Ranked #{rank}</p>
            <p>poluparity #{popularity}</p>
            <p>Favouries {favourites}</p>
          </div>
          <div>
            <p>
              {season + " "} {year + " "} {type + ""} {studios}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeName;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.jikan.moe/v4/anime/${context.query.anime_name}`
  );
  const item = await res.json();

  return {
    props: {
      item: item.data,
    },
  };
}
