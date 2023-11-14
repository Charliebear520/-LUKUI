import { Row, Col } from "antd";
import ScheduleItem from "../ScheduleItem ";

export default function ScheduleList({schedules}) {
  return (
    <Row gutter={[32, 32]}>
    {schedules.map(schedule => (
        <Col 
          key={schedule.id} 
          sm={{ span: 8 }} 
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <ScheduleItem schedule={schedule}/>
        </Col>
      ))}
    </Row>
  );
}

