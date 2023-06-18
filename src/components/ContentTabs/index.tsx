import ProgressBar from "react-bootstrap/ProgressBar";
import careerImage from "../../assets/images/placeholderCareer.jpeg";
import { IoShareOutline } from "react-icons/io5";
import { Col, Row, Tabs } from "antd";
import { stringLimt } from "src/helper/helper";
import CareerUniversity from "../CareerUniversity";
import "./ContentTabs.scss";

interface IContentTabs {
  item: any;
  image?: any;
  index: number;
  onArrayChange?: any;
  progress?: any;
}
const ContentTabs = ({ item, index, progress, image }: IContentTabs) => {
  const cat =
    item?.attributes?.categories &&
    item?.attributes?.categories[0] &&
    item?.attributes?.categories[0]?.attributes?.name;

  const tabArray = [
    {
      label: `Details`,
      key: "1",
      children: (
        <Row>
          <Col md={10} xs={24}>
            <h4 className="my-2 my-md-3 text-center"> Details</h4>

            <div className="content-tabs__detail">
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>🏆 Work Skills</h3>
                <ProgressBar
                  color="#ffffff36"
                  now={progress.over}
                  variant="success"
                  max={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>😞 Physical Stress</h3>
                <ProgressBar
                  color="#ffffff36"
                  now={progress.cost}
                  variant="success"
                  max={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>🤝 Encourage</h3>
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
                <h3>👮 Job Satisfaction</h3>
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
                <h3>💪 Health Risk</h3>
                <ProgressBar
                  color="#ffffff36"
                  now={progress.health}
                  variant="success"
                  max={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>👩‍👧‍👦 Team Work</h3>
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
            <h4 className="my-3 pb-5 text-center">Descriptions</h4>
            <div className="px-2">
              <h6 className="mb-2 pb-0 text-left">Average Salary</h6>
              <p className="text-left desc">
                {item?.attributes?.average_salary}
              </p>
              <h6 className="mb-2 pb-0 text-left">Average Salary in AUD</h6>
              <p className="text-left desc">
                {item?.attributes?.average_salary_aud}
              </p>
              <h6 className="mb-2 pb-0 text-left">Course Cost</h6>
              <p className="text-left desc">{item?.attributes?.cost_course}</p>
              <h6 className="mb-2 pb-0 text-left">Internship Needed</h6>
              <p className="text-left desc">
                {item?.attributes?.internship_needed}
              </p>

              <h6 className="mb-2 pb-0 text-left">Student Interest</h6>
              <p className="text-left desc">
                {item?.attributes?.student_intrest}
              </p>
              <h6 className="mb-2 pb-0 text-left">Skill Transferable</h6>
              <p className="text-left desc">
                {item?.attributes?.skills_transferable}
              </p>
              <h6 className="mb-2 pb-0 text-left">Study Description</h6>
              <p className="text-left desc">
                {item?.attributes?.description_study}
              </p>
              <h6 className="mb-2 pb-0 text-left">Job Descriptions</h6>
              <p className="text-left desc">
                {item?.attributes?.job_description}
              </p>
            </div>
          </Col>
        </Row>
      ),
    },
    {
      label: `University`,
      key: "2",
      children: (
        <Row>
          <Col md={24} xs={24}>
            <h4 className="my-3 pb-5 text-center">
              Universities / Institutions
            </h4>
            <CareerUniversity
              count={20}
              universities={item?.attributes?.universities}
              customClass="details"
            />
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <div
      className="content-tabs d-flex flex-column justify-content-between position-relative"
      key={index}
    >
      <div
        className="content-tabs__header d-flex flex-column align-items-center justify-content-center "
        style={{ backgroundImage: `url("${image ? image : careerImage}")` }}
      >
        <h3 className="text-center m-0">
          {stringLimt(item?.attributes?.title, 50)}
        </h3>
        <p className="text-center m-0">{stringLimt(cat, 70)}</p>
        {/* <p className="text-center desc">
          {stringLimt(item?.attributes?.job_description, 400)}
        </p> */}
      </div>
      <Tabs type="card" items={tabArray} />
    </div>
  );
};
export default ContentTabs;
