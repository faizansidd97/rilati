import ProgressBar from "react-bootstrap/ProgressBar";
import careerImage from "../../assets/images/placeholderCareer.jpeg";
import { IoShareOutline } from "react-icons/io5";
import { Col, Row, Tabs } from "antd";
// import { stringLimt } from "src/helper/helper";
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
    item?.attributes?.education_categories &&
    item?.attributes?.education_categories[0] &&
    item?.attributes?.education_categories[0]?.attributes?.name;

  const youtube = item?.attributes?.youtube;

  const tabArray = [
    {
      label: `Descriptions`,
      key: "1",
      children: (
        <Row>
          <Col md={24} xs={24}>
            {/* <h4 className="my-3 pb-5 text-center">Descriptions</h4> */}
            <div className="px-2">
              <h6 className="mb-2 pb-0 text-left">Job Descriptions</h6>
              <p className="text-left desc">
                {item?.attributes?.job_description
                  ?.replace(36, "education")
                  ?.replace(37, "Health ")}
              </p>
              <h6 className="mb-2 pb-0 text-left">Study Description</h6>
              <p className="text-left desc">
                {item?.attributes?.description_study
                  ?.replace(36, "education")
                  ?.replace(37, "Health ")}
              </p>
              <h6 className="mb-2 pb-0 text-left">
                Student Interest Ideal for this Career
              </h6>
              <p className="text-left desc">
                {item?.attributes?.student_intrest}
              </p>
              <h6 className="mb-2 pb-0 text-left">Skill Transferable</h6>
              <p className="text-left desc">
                {item?.attributes?.skills_transferable}
              </p>
              <h6 className="mb-2 pb-0 text-left">
                Average Salary in Australia
              </h6>
              <p className="text-left desc">
                {item?.attributes?.average_salary_aud?.contain("$")
                  ? item?.attributes?.average_salary_aud
                  : `$${item?.attributes?.average_salary_aud}`}
              </p>
              {/* <h6 className="mb-2 pb-0 text-left">Average Salary</h6>
              <p className="text-left desc">
                {item?.attributes?.average_salary}
              </p> */}

              <h6 className="mb-2 pb-0 text-left">Course Cost</h6>
              <p className="text-left desc">${item?.attributes?.cost_course}</p>
              <h6 className="mb-2 pb-0 text-left">Internship Needed</h6>
              <p className="text-left desc mb-0">
                {item?.attributes?.internship_needed}
              </p>
              <span className="note">
                {" "}
                FT/PT = Full Time or Part Time in years
              </span>
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
            {/* <h4 className="my-3 pb-5 text-center">
              Universities / Institutions
            </h4> */}
            <CareerUniversity
              count={20}
              universities={item?.attributes?.universities}
              customClass="details"
            />
          </Col>
        </Row>
      ),
    },
    youtube && {
      label: `Video`,
      key: "3",
      children: (
        <div className="d-flex justify-content-center align-items-center">
          <iframe width="95%" height="315" src={youtube}></iframe>
        </div>
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
          {item?.attributes?.title
            ?.replace(36, "education")
            ?.replace(37, "Health ")}
        </h3>
        <p className="text-center m-0">
          {cat?.replace(36, "education")?.replace(37, "Health ")}
        </p>
        {/* <p className="text-center desc">
          {stringLimt(item?.attributes?.job_description, 400)}
        </p> */}
      </div>
      <Row>
        <Col md={10} xs={24}>
          <h4 className="my-2 my-md-3 text-center"> Details</h4>

          <div className="content-tabs__detail">
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🌟 Professional Competencies</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.over}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🥇 ATAR</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.cost}
                variant="success"
                max={100}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🙌 Foster Motivation</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.internet}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🔀 Switch Potential</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.fun}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🌐 Scope World wide</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.saftey}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🙌 Company Status</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.status}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>⚠️ Well-being Peril</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.health}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>👥 Collaborative Effort</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.team}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🔍 Detailed Precision</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.precision_work}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>⏰ Time Allocation</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.work_hours}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🏢 Workplace Culture</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.job_enviroment}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>😩 Monotonous and Laborious</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.repetitive_tedious}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>🤩 People Interation</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.people_interations}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>✌️ Autonomy</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.autonomy}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>👤 Life Risk</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.life_risk}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>😞 Physical Stress</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.physical_stress}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>😑 Mental Stress</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.mental_stress}
                variant="success"
                max={10}
              />
            </div>
            <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
              <h3>😓 Job Stress</h3>
              <ProgressBar
                color="#ffffff36"
                now={progress.mental_stress}
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
          <Tabs items={tabArray} />
        </Col>
      </Row>
    </div>
  );
};
export default ContentTabs;
