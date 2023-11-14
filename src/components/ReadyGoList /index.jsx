import { Row, Col } from "antd";
import ReadyGoItem from "../ReadyGoItem ";
import styles from "./readygo.module.css"

export default function ReadyGoList({collections}) {
  return (
    <div>
    <div className={styles.boxtitle}>
      <h1 className={styles.title}>即將啟程</h1>
    </div>
    <Row className={styles.section}>
        <Row gutter={[32, 32]} className={styles.section2}>
        {collections.map(collection => (
        <Col 
          key={collection.id} 
          sm={{ span: 24 }} 
          md={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <ReadyGoItem collection={collection}/>
        </Col>
      ))}
        </Row>
       
        
    </Row>
    </div>

    
  );
}

