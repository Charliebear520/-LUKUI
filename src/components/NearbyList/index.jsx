import { Row, Col } from "antd";
import NearbyItem from "../NearbyItem";

export default function NearbyList({products}) {
  return (
    <Row gutter={[32, 32]}>
    {products.map(product => (
        <Col 
          key={product.id} 
          sm={{ span: 8 }} 
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <NearbyItem product={product}/>
        </Col>
      ))}
    </Row>
  );
}

