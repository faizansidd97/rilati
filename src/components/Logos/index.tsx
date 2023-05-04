import { Container, Row, Col } from "react-bootstrap";
import "./Logos.scss";

const Logos = ({ count = 10 }: any) => {
  const myLogos = [];
  for (let index = 0; index < count; index++) {
    const logo = require(`../../assets/images/uni_logo (${
      Math.floor(Math.random() * 169) + 1
    }).png`);
    myLogos.push(logo);
  }
  return (
    <div className="logos">
      <Container>
        <Row>
          <Col md={24} className="d-flex justify-content-around flex-wrap">
            {myLogos?.map((item, index) => (
              <div className="mx-1 logos-card">
                <img key={index} src={item} className="logo cursor-pointer" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Logos;
