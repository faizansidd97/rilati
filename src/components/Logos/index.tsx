import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../../assets/images/logo2.avif";
import logo3 from "../../assets/images/logo3.avif";
import logo4 from "../../assets/images/logo4.avif";
import logo5 from "../../assets/images/logo5.avif";
import logo6 from "../../assets/images/logo6.avif";
import logo7 from "../../assets/images/logo7.avif";
import "./Logos.scss";

const Logos = () => {
  const myLogos = [logo2, logo3, logo4, logo5, logo6, logo7];
  return (
    <div className="logos">
      <Container>
        <Row>
          <Col className="d-flex justify-content-around ">
            {myLogos?.map((item, index) => (
              <img key={index} src={item} className="logo cursor-pointer" />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Logos;
