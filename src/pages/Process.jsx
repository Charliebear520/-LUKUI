
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import IsProcessDetail from "../components/IsProcessDetail ";
import processes from "../json/process.json";

function Process() {
   const { processId } = useParams();
   const process = processes.find(
      (x) => x.id === processId
   );

   return (
      <div className="container mainLayout">
         <Helmet><title>process</title></Helmet>
         {/* <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         /> */}
         <IsProcessDetail process={process} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Process;
