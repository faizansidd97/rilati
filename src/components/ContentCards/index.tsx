import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DotChartOutlined } from "@ant-design/icons";
import { AiOutlineHeart, AiFillPlusCircle } from "react-icons/ai";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Dropdown, Input, MenuProps, Skeleton } from "antd";
import { IoShareOutline } from "react-icons/io5";
import { contentData } from "./constant";
import "./ContentCards.scss";
import ContentInnerCards from "../ContentInnerCard";

const ContentCards = () => {
  const [data, setData] = useState([...contentData]);
  const [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 5000);
  }, []);
  const arr = [];
  for (let index = 0; index < 100; index++) {
    arr.push(index);
  }
  const onArrayChange = (index: number, item: any) => {
    const temp = [...data];
    temp.splice(index, 1);
    temp.push(item);
    setData(temp);
  };
  console.log("data", data);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <Container className="content-card mb-3 px-3" fluid>
      <Row>
        <Col
          md={12}
          className="d-flex align-items-center flex-wrap justify-content-end justify-content-md-between my-3"
        >
          <div className="d-flex align-items-center">
            <Button className="btn btn-primary custom">Filters</Button>
            <Input
              placeholder="Search or filter"
              prefix={<AiFillPlusCircle size={25} color="#ff4742" />}
              className="search-input"
            />
          </div>
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            className="my-3 my-md-0"
          >
            <Button className="btn-secondary sort-by">Sory By</Button>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        {active &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <Col md={3} key={index} className="mb-4">
              <Skeleton.Node active={active}>
                <DotChartOutlined style={{ fontSize: 100, color: "#bfbfbf" }} />
              </Skeleton.Node>
            </Col>
          ))}
        {!active &&
          data.map((item, index) => (
            <Col
              key={index}
              // md={3}
              // lg={3}
              // xl={3}
              // xxl={2}
              className="mb-4 card-col d-flex flex-wrap justify-content-lg-start justify-content-center justify-content-md-center"
            >
              <ContentInnerCards
                item={item}
                index={index}
                onArrayChange={onArrayChange}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default ContentCards;
