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
    <Container className="content-card mb-3">
      <Row>
        <Col
          md={12}
          className="d-flex align-items-center justify-content-between my-3"
        >
          <div className="d-flex align-items-center">
            <Button className="btn btn-primary custom">Filters</Button>
            <Input
              placeholder="Search or filter"
              prefix={<AiFillPlusCircle size={25} color="#ff4742" />}
              className="search-input"
            />
          </div>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button className="btn-secondary">Sory By</Button>
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
            <Col md={3} key={index} className="mb-4">
              <ContentInnerCards
                item={item}
                index={index}
                onArrayChange={onArrayChange}
              />
              {/* <div
                className="content-card__wrapper d-flex flex-column justify-content-between position-relative"
                style={{ backgroundImage: `url("${item.image}")` }}
                key={index}
                onMouseEnter={() => {
                  setProgress({
                    ...progress,
                    cost: 0,
                    internet: 0,
                    over: 0,
                    fun: 0,
                    saftey: 0,
                  });
                  setTimeout(() => {
                    setProgress({
                      ...progress,
                      cost: 20,
                      internet: 80,
                      over: 50,
                      fun: 40,
                      saftey: 65,
                    });
                  }, 200);
                }}
                onMouseLeave={() =>
                  setProgress({
                    ...progress,
                    cost: 0,
                    internet: 0,
                    over: 0,
                    fun: 0,
                    saftey: 0,
                  })
                }
              >
                <div className="number">
                  <h2>{index + 1}</h2>
                </div>
                <div className="content-card__wrapper__info d-flex justify-content-center align-items-center flex-column">
                  <h3>Buenos Aires</h3>
                  <p>Argentina</p>
                </div>
                <div className="content-card__wrapper__pricing d-flex justify-content-between p-2">
                  <div className="content-card__wrapper__pricing__temp">
                    <h2>72</h2>
                  </div>
                  <div className="content-card__wrapper__pricing__price">
                    <h2>$1000/mo</h2>
                  </div>
                </div>
                <div className="mb-4 px-3 back p-3">
                  <div className="back-header mb-3">
                    <AiOutlineHeart className="heart-1" size={28} />
                    <AiTwotoneHeart size={28} className="heart-2" />
                  </div>
                  <div className="content-card__wrapper__back" key={index}>
                    <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                      <h3>⭐️ Over All</h3>
                      <ProgressBar
                        color="#ffffff36"
                        now={progress.over}
                        variant="success"
                      />
                    </div>
                    <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                      <h3>💵 Cost </h3>
                      <ProgressBar
                        color="#ffffff36"
                        now={progress.cost}
                        variant="success"
                      />
                    </div>
                    <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                      <h3>📡 Internet</h3>
                      <ProgressBar
                        color="#ffffff36"
                        now={progress.internet}
                        variant="success"
                      />
                    </div>
                    <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                      <h3>😀 Fun</h3>
                      <ProgressBar
                        color="#ffffff36"
                        now={progress.fun}
                        variant="success"
                      />
                    </div>
                    <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                      <h3>👮 Safety</h3>
                      <ProgressBar
                        color="#ffffff36"
                        now={progress.saftey}
                        variant="success"
                      />
                    </div>
                    <p>Still an amazing island</p>
                    <div className="d-flex justify-content-end">
                      <IoShareOutline color="#fff" size={20} />
                    </div>
                  </div>
                </div>
              </div> */}
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default ContentCards;
