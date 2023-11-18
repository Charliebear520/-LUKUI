
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ranks from "../json/rank.json";
import RankDetail from '../components/RankDetail ';

function Rank() {
   const { rankId } = useParams();
   const rank = ranks.find(
      (x) => x.id === rankId
   );

   return (
      <div className="container mainLayout">
         <Helmet><title>rank</title></Helmet>
         {/* <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         /> */}
         <RankDetail rank={rank} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Rank;
