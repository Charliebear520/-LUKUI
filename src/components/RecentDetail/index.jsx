import { Row, Col} from "antd";
// import AddToBasket from "../AddToBasket"
import styles from "./recentdetail.module.css"
// const { Option } = Select;

function RecentDetail({ recent }) {
  


   return (
      <Row gutter={[32, 32]}
         style={{ justifyContent: 'center' }}
      >
         <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
         >
            <img
               alt={recent.name}
               className={styles.image}
               src={recent.image}
            />
         </Col>
         <Col
            xs={{ span: 24 }}
            lg={{ span: 14 }}
         >
            <div className={styles.info} >
               <h2 className={styles.category} >
                  {recent.category}
               </h2>
               <h1 className={styles.name} >
                  {recent.name}
               </h1>
               <p className={styles.description}>
                  {recent.description_long}
               </p>

            </div>
         </Col>
      </Row>
   );
}

export default RecentDetail;