import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import plans from "../json/planning.json"
import historys from "../json/history.json"
import processes from "../json/process.json"
import collections from "../json/collection.json"
import IsProcessList from "../components/IsProcessList";
import IsPlanningList from "../components/IsPlanningList";
import ReadyGoList from "../components/ReadyGoList "
import HistoryList from "../components/HistoryList "

function MyPlan() {
  const title = "NORDIC NEST Shopping Cart";

  return (
    <div className="container mainLayout">
      <Helmet><title>{title}</title></Helmet>
      <Header 
        className="layoutHeader"
        title={title}
        slogan="An example made by Vite."
      />
      
      <IsProcessList processes={processes} /> 
      <ReadyGoList collections={collections} /> 
      <IsPlanningList plans={plans} />
      <HistoryList historys={historys}/>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default MyPlan;
