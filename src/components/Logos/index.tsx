import { Container, Row, Col } from "react-bootstrap";
import "./Logos.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUni } from "src/redux/actions/universityAction";
import { Spin } from "antd";

const Logos = ({ count = 10, customClass }: any) => {
  console.log(count, customClass);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUni(1, 9));
  }, []);
  const myLogos: any = [];
  const number = [120, 163, 4, 23, 13, 93, 57, 163, 106];
  for (let index = 0; index < number.length; index++) {
    const logo = require(`../../assets/images/uni_logo (${number[index]}).png`);
    myLogos.push(logo);
  }
  const { uni = [], loader = false } = useSelector((store: any) => store.uni);
  return (
    <div className={`logos ${customClass && "details"}`}>
      <Container>
        <Spin spinning={loader}>
          <Row className={customClass ? "gap-4" : ""}>
            <Col md={24} className="d-flex justify-content-around flex-wrap">
              {uni?.map((item: any, index: any) => (
                <div className="mx-1 logos-card">
                  <a href={item?.attributes?.link} target="_blank">
                    <img
                      key={index}
                      src={myLogos[index]}
                      className="logo cursor-pointer"
                    />
                  </a>
                </div>
              ))}
            </Col>
          </Row>
        </Spin>
      </Container>
    </div>
  );
};
export default Logos;
