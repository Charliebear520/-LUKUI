import { Row, Col } from "antd";
import HistoryItem from "../HistoryItem";
import styles from "./historylist.module.css"

export default function HistoryList({historys}) {
  return (
    <Row className={styles.section}>
        <Row gutter={[32, 32]} className={styles.section2}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.head}>
            <h1 className={styles.logo}>過往紀錄</h1>
            <h4 className={styles.name}>查看全部</h4>
          </div>
          <hr className={styles.hrline}/>
        </Col>
        {historys.map(history => (
        <Col 
          key={history.id} 
          sm={{ span: 8 }} 
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <HistoryItem history={history}/>
        </Col>
      ))}
        </Row>
       
        
    </Row>
    
  );
}

