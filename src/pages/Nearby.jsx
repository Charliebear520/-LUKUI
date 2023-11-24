
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import Footer from "../components/Footer"
import NearbyDetail from "../components/NearbyDetail";
import nearbys from "../json/nearbys.json";

function Nearby() {
   const { nearbyId } = useParams();
   const nearby = nearbys.find(
      (x) => x.id === nearbyId
   );

   return (
      <div className="container mainLayout">
         <Helmet><title>nearby</title></Helmet>
         {/* <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         /> */}
         <NearbyDetail nearby={nearby} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Nearby;
