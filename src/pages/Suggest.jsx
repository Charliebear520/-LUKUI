
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import Footer from "../components/Footer"

import suggests from "../json/suggests.json";
import SuggestDetail from '../components/SuggestDetail';

function Suggest() {
   const { suggestId } = useParams();
   const suggest = suggests.find(
      (x) => x.id === suggestId
   );

   return (
      <div className="container mainLayout">
         <Helmet><title>suggest</title></Helmet>
         {/* <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         /> */}
         <SuggestDetail suggest={suggest} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Suggest;
