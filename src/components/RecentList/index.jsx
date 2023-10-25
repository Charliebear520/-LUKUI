import { Row, Col } from "antd";
import RecentItem from "../RecentItem ";

export default function RecentList({recents}) {
  return (
    <Row gutter={[32, 32]}>
    {recents.map(recent => (
        <Col 
          key={recent.id} 
          sm={{ span: 8 }} 
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <RecentItem recent={recent}/>
        </Col>
      ))}
    </Row>
  );
}

