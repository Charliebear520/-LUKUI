import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
// import NearbyList from "../components/NearbyList";
// import products from "../json/products.json";
import ReviewList from "../components/ReviewList/index";
import reviews from "../json/suggests.json";
import plans from "../json/planning.json"
import collections from "../json/collection.json"
import processes from "../json/process.json"
import IsPlanningList from "../components/IsPlanningList";
import IsProcessList from "../components/IsProcessList";
import ReadyGoList from "../components/ReadyGoList";

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
      <ReviewList reviews={reviews} />
      {/* <NearbyList products={products} className="layoutContent" /> */}
      <IsPlanningList plans={plans} />
      <IsProcessList processes={processes} />
      <ReadyGoList collections={collections}/>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
