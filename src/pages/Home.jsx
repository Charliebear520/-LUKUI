import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import NearbyList from "../components/NearbyList";
import products from "../json/products.json";
import nearbys from "../json/nearbys.json";
import ReviewList from "../components/ReviewList";
import reviews from "../json/reviews.json";

import collections from "../json/collection.json"
import processes from "../json/process.json"
import recents from "../json/recent.json"
import suggests from "../json/suggests.json"
import ranks from "../json/rank.json"


import ReadyGoHomeList from "../components/ReadyGoHomeList";
import RecentList from "../components/RecentList";
import IsProcessHomeList from "../components/IsProcessHomeList";
import SuggestList from "../components/SuggestList ";
import RankList from "../components/RankList ";

function Home() {
  const title = "NORDIC NEST Shopping Cart";

  return (
    <div className="container mainLayout">
      <Helmet><title>{title}</title></Helmet>
      <Header 
        className="layoutHeader"
        title={title}
        slogan="An example made by Vite."
      />
      <IsProcessHomeList processes={processes}/>
      <ReadyGoHomeList collections={collections}/>
      <ReviewList reviews={reviews} />
      <SuggestList suggests={suggests}/>
      <RankList ranks={ranks}/>
      {/* <NearbyList nearbys={nearbys} className="layoutContent" /> */}
      <RecentList recents={recents}/>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
