
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReviewDetail from "../components/ReviewDetail ";
import recents from "../json/recent.json";
import RecentDetail from '../components/RecentDetail ';

function Recent() {
   const { recentId } = useParams();
   const recent = recents.find(
      (x) => x.id === recentId
   );

   return (
      <div className="container mainLayout">
         <Helmet><title>recent</title></Helmet>
         {/* <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         /> */}
         <RecentDetail recent={recent} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Recent;
