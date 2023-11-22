import { Helmet } from "react-helmet-async"
import Header from "../components/MyScheduleHeader "
import Footer from "../components/Footer"
import ScheduleList from "../components/ScheduleList";
import schedules from "../json/schedule.json"
// import EditScheduleList from "../components/EditScheduleList ";


function Schedule() {
  const title = "NORDIC NEST Shopping Cart";

  return (
    <div className="container mainLayout">
      <Helmet><title>{title}</title></Helmet>
      <Header 
        className="layoutHeader"
        title={title}
        slogan="An example made by Vite."
      />
      
      <ScheduleList schedules={schedules} className="layoutContent" />
      {/* <EditScheduleList schedules={schedules}/> */}
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Schedule;
