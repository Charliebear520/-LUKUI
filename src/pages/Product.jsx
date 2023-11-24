
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import Footer from "../components/Footer"
import NearbyDetail from "../components/NearbyDetail";
import products from "../json/products.json";

function Product() {
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );

   return (
      <div className="container mainLayout">
         <Helmet><title>product</title></Helmet>
         {/* <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         /> */}
         <NearbyDetail product={product} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Product;
