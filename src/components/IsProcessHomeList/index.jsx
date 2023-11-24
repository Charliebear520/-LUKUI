import { Row, Col } from "antd";
import IsProcessHomeItem from "../IsProcessHomeItem";
import styles from "./isprocesshomelist.module.css";
import vector from "../../images/vector.png";

export default function IsProcessHomeList({ processes }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${vector})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          testAlign: "center",
          height: "65px",
          width:"217px"
        }}
        className={styles.boximg}
      >
        <div className={styles.boxtitle}>
          <h1 className={styles.title}>正在進行</h1>
        </div>
      </div>

      <Row gutter={[0, 32]} className={styles.section}>
        {processes.map((process) => (
          <Col
            key={process.id}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
          >
            <IsProcessHomeItem process={process} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
