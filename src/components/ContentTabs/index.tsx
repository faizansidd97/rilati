import ProgressBar from "react-bootstrap/ProgressBar";

import { IoShareOutline } from "react-icons/io5";
import { Col, Row } from "antd";
import "./ContentTabs.scss";
import Logos from "../Logos";
import { stringLimt } from "src/helper/helper";

interface IContentTabs {
  item: any;
  image?: any;
  index: number;
  onArrayChange?: any;
  progress?: any;
}
const ContentTabs = ({
  item,
  index,
  onArrayChange,
  progress,
  image,
}: IContentTabs) => {
  console.log("item", item);

  return (
    <div
      className="content-tabs d-flex flex-column justify-content-between position-relative"
      key={index}
    >
      <div
        className="content-tabs__header d-flex flex-column align-items-center justify-content-center "
        style={{ backgroundImage: `url("${image?.image}")` }}
      >
        <h3 className="text-center">
          {stringLimt(item?.attributes?.title, 50)}
        </h3>
        <p className="text-center">
          {stringLimt(item?.attributes?.career_category, 70)}
        </p>
        <p className="text-center desc">
          {stringLimt(item?.attributes?.job_description, 400)}
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
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🏤 Company Status</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.status}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>💪 Health</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.health}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>👩‍👧‍👦 Team</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.team}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>💼 Precision Work</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.precision_work}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🕦 Work hours</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.work_hours}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🏭 Job Enviroment</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.job_enviroment}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🐌 Repetitive Tedious</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.repetitive_tedious}
                variant="success"
                max={10}
              />
            </div>
            {/* <p>Still an amazing island</p> */}
            <div className="d-flex justify-content-end">
              <IoShareOutline color="#fff" size={20} />
            </div>
          </div>
        </Col>
        <Col md={14} xs={24}>
          <h4 className="my-3 pb-5 text-center">Universities / Institutions</h4>
          <Logos count={20} customClass="details" />
        </Col>
      </Row>
    </div>
  );
};
export default ContentTabs;
