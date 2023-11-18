
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReviewDetail from "../components/ReviewDetail ";
import reviews from "../json/reviews.json";

function Review() {
   const { reviewId } = useParams();
   const review = reviews.find(
      (x) => x.id === reviewId
   );

   return (
      <div className="container mainLayout">
         <Helmet><title>process</title></Helmet>
         {/* <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         /> */}
         <ReviewDetail review={review} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Review;
