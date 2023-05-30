import { Container, Row, Col } from "react-bootstrap";
import "./CareerUniversity.scss";
import EmptyState from "../EmptyState";

const CareerUniversity = ({ customClass, universities }: any) => {
  return (
    <div
      className={`logos d-md-block ${customClass ? " details" : "  d-none"}`}
    >
      <Container>
        <Row className={customClass ? "gap-4" : ""}>
          <Col md={24} className="d-flex justify-content-around flex-wrap">
            {universities?.length > 0 ? (
              universities?.map((item: any, index: any) => (
                <div className="mx-1 logos-card">
                  <a href={item?.attributes?.link} target="_blank">
                    <img
                      key={index}
                      src={item?.uni_id?.image}
                      className="logo cursor-pointer"
                    />
                  </a>
                </div>
              ))
            ) : (
              <EmptyState desc="No university found" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CareerUniversity;
