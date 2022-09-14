import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ item }) {
  const title = item.title;
  const image_url = item.images.jpg.image_url;
  const rating = item.rating;
  const genresArr = item.genres.map((gitem) => gitem.name);
  // console.log(image_url)

  return (
    <Link href={`${item.mal_id}`}>
      <div className="flex flex-col bg-slate-600 ">
        <Image
          src={image_url}
          width={200}
          height={400}
          objectFit="contain"
        ></Image>
        <div className="flex flex-col items-center">
          <h1 className="text-white font-extrabold">{title}</h1>
          <p>{rating}</p>
          <div>
            {genresArr.map((genre) => <span key={genre}>{genre }</span>)}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
