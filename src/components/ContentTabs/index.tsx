import { useState, useEffect } from "react";

import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import ProgressBar from "react-bootstrap/ProgressBar";

import { IoShareOutline } from "react-icons/io5";
import { Col, Modal, Row } from "antd";
import "./ContentTabs.scss";
import Logos from "../Logos";
import { stringLimt } from "src/helper/helper";

interface IContentTabs {
  item: any;
  index: number;
  onArrayChange?: any;
  progress?: any;
}
const ContentTabs = ({
  item,
  index,
  onArrayChange,
  progress,
}: IContentTabs) => {
  return (
    <div
      className="content-tabs d-flex flex-column justify-content-between position-relative"
      key={index}
    >
      <div
        className="content-tabs__header d-flex flex-column align-items-center justify-content-center "
        style={{ backgroundImage: `url("${item.image}")` }}
      >
        <h3>{stringLimt(item?.attributes?.title, 20)}</h3>
        <p>
          {stringLimt(JSON.parse(item?.attributes?.career_category || ""), 20)}
        </p>
      </div>
      <Row>
        <Col md={10} xs={24}>
          <h4 className="my-2 my-md-3 text-center"> Details</h4>

          <div className="content-tabs__detail">
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🏆 Skills</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.over}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>😞 Stress </h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.cost}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🤝 Help</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.internet}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>😀 Potential</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.fun}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>👮 Satisfaction</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.saftey}
                variant="success"
                max={10}
              />
            </div>
            <p>Still an amazing island</p>
            <div className="d-flex justify-content-end">
              <IoShareOutline color="#fff" size={20} />
            </div>
          </div>
        </Col>
        <Col md={14} xs={24}>
          <h4 className="my-3 pb-5 text-center">
            {" "}
            Universities / Institutions
          </h4>
          <Logos count={20} />
        </Col>
      </Row>
    </div>
  );
};
export default ContentTabs;
