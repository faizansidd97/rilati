import { Button, Form, Input } from "antd";
import thumbnail from "../../assets/images/thumbnail.jpg";
import thumbnail1 from "../../assets/images/Homepage.jpg";

import "./HomeBanner.scss";
import { Col, Container, Row } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <div
      className="home-banner position-relative "
      style={{ backgroundImage: `url("${thumbnail1}")` }}
    >
      <div className="home-banner__background-video">
        {/* <video
          preload="true"
          autoPlay
          loop
          muted={true}
          playsInline
          controls
          width="500px"
        >
          <source src="./bgVideo.mp4" type="video/mp4" />
          <source src="./bgVideo.ogg" type="video/ogg" />
          Your browser does not support HTML video.
        </video> */}
      </div>
      <Container className="h-100 d-flex justify-content-center">
        <Row className="align-self-center w-100">
          <Col sm={12} md={6} lg={6}>
            <div className="d-flex flex-column justify-content-end h-100">
              <h1 className="title">🌍 Rilati</h1>
              <h1 className="desc">
                Your career is a journey, not a destination.
                <br /> Let Rilati guide you
              </h1>
              {/* <p className="desc">
                Join a global community of remote workers living and traveling
                around the world
              </p>
              <div className="user-avator">
                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/b9355c2757c6b4741b0f4def87d8a588.jpg?1666719817"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/b9355c2757c6b4741b0f4def87d8a588.jpg?1666719817"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/fd009e31fd649a100dc7f00012c78633.jpg?1556700871"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/fd009e31fd649a100dc7f00012c78633.jpg?1556700871"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/b0a2af7d999f9dd783060e1ad5bb7e7e.jpg?1666722725"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/b0a2af7d999f9dd783060e1ad5bb7e7e.jpg?1666722725"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/edc6e792bc10280f0fc529255fcff680.jpg?1627186954"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/edc6e792bc10280f0fc529255fcff680.jpg?1627186954"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/51728fb342ab30a4ecb939bfba931f39.jpg?1666717749"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/51728fb342ab30a4ecb939bfba931f39.jpg?1666717749"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/f714694d6aa475456cbb9294151d9918.jpg?1666718271"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/f714694d6aa475456cbb9294151d9918.jpg?1666718271"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/548b3c056041a57ee590e57bf70118e2.jpg?1620186768"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/548b3c056041a57ee590e57bf70118e2.jpg?1620186768"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/c3fa607b4dff6c5bec5ffa9c112ed6f6.jpg?1666719416"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/c3fa607b4dff6c5bec5ffa9c112ed6f6.jpg?1666719416"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/a5c1f423ee4d878f57da8d71d7ef73bb.jpg?1666716359"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/a5c1f423ee4d878f57da8d71d7ef73bb.jpg?1666716359"
                />
              </div> */}
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="d-flex justify-content-center justify-content-md-end mb-4 mb-md-0"
          >
            <div className="subcription__form_wrapper d-flex flex-column align-items-center mb-4">
              {/* <img src={thumbnail} className="w-100" /> */}
              <Form>
                <Form.Item className="my-3">
                  <Input placeholder="Type your email...." />
                </Form.Item>
                <Form.Item>
                  <Button className="btn btn-primary mb-3 w-100">
                    Join Us
                  </Button>
                </Form.Item>
                <span>
                  Already Member? <a href="#">Log In</a>
                </span>
              </Form>
            </div>
            <svg viewBox="0 0 1440 120" className="wave">
              <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
            </svg>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeBanner;
