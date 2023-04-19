import { Container, Row, Col, Button } from "react-bootstrap";
import postImage1 from "../../assets/images/postImage1.avif";
import { AiOutlineHeart, AiFillPlusCircle } from "react-icons/ai";
import ProgressBar from "react-bootstrap/ProgressBar";
// import { IoCloseSharp } from "react-icons/io";
import "./ContentCards.scss";
import { Dropdown, Input, MenuProps } from "antd";
import { IoShareOutline } from "react-icons/io5";

const ContentCards = () => {
  const arr = [];
  for (let index = 0; index < 100; index++) {
    arr.push(index);
  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
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
        {arr.map((index) => (
          <Col md={3} key={index} className="mb-4">
            <div
              className="content-card__wrapper d-flex flex-column justify-content-between position-relative"
              style={{ backgroundImage: `url("${postImage1}")` }}
            >
              <div className="number">
                <h2>2</h2>
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
                  {/* <AiTwotoneHeart size={28} className="heart-2" /> */}
                </div>
                <div className="content-card__wrapper__back">
                  <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                    <h3>⭐️ Over All</h3>
                    <ProgressBar color="#fff000" now={20} variant="success" />
                  </div>
                  <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                    <h3>💵 Cost </h3>
                    <ProgressBar color="#fff000" now={50} variant="success" />
                  </div>
                  <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                    <h3>📡 Internet</h3>
                    <ProgressBar color="#fff000" now={80} variant="success" />
                  </div>
                  <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                    <h3>😀 Fun</h3>
                    <ProgressBar color="#fff000" now={60} variant="success" />
                  </div>
                  <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
                    <h3>👮 Safety</h3>
                    <ProgressBar color="#fff000" now={35} variant="success" />
                  </div>
                  <p>Still an amazing island</p>
                  <div className="d-flex justify-content-end">
                    <IoShareOutline color="#fff" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ContentCards;
