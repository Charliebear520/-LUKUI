import { Helmet } from "react-helmet-async"
import Header from "../components/MyPlanHeader"
import Footer from "../components/Footer"
import plans from "../json/planning.json"
import historys from "../json/history.json"
import processes from "../json/process.json"
import collections from "../json/collection.json"
import mycollections from "../json/mycollection.json"
import IsProcessList from "../components/IsProcessList";
import IsPlanningList from "../components/IsPlanningList";
import ReadyGoList from "../components/ReadyGoList "
import HistoryList from "../components/HistoryList"
import MyCollectionList from "../components/MyCollectionLIst"

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
      <MyCollectionList mycollections={mycollections}/>
      <HistoryList historys={historys}/>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default MyPlan;
