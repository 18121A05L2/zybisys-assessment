import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Main from "../components/Main";
import { useRouter } from "next/router";
import Watchlist from "../components/Watchlist";

const Home = ({ data }) => {
  const router = useRouter();
  const watchlistOpen = router.query.watchlist;
  // console.log(data)
  return (
    <div className="overflow-hidden w-full h-full min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {watchlistOpen ? <Watchlist /> : <Main data={data} />}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch("https://api.jikan.moe/v4/anime");
  const data = await res.json();
  // console.log("❤️‍🔥 fetch data" + data);

  return {
    props: {
      data: data.data,
    },
  };
}
