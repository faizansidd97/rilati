// import ProgressBar from "react-bootstrap/ProgressBar";
import careerImage from "../../assets/images/placeholderCareer.jpeg";
import { IoShareOutline } from "react-icons/io5";
import { useEffect } from "react";
import { Button, Col, Row, Spin, Tabs } from "antd";
// import { stringLimt } from "src/helper/helper";
import CareerUniversity from "../CareerUniversity";
import "./ContentTabs.scss";
import { memo, useState } from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCareerById } from "src/redux/actions/careerAction";
import { TOOLTIP } from "src/constant/Tooltip";
import CustomTooltip from "../CustomTooltip";

interface IContentTabs {
  item?: any;
  image?: any;
  index?: number;
  onArrayChange?: any;
  progress?: any;
  onOracle?: any;
}
const ContentTabs = ({ item, onOracle }: IContentTabs) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [progress, setProgress] = useState({
    over: 0,
    cost: 0,
    internet: 0,
    fun: 0,
    saftey: 0,
    status: 0,
    team: 0,
    health: 0,
    precision_work: 0,
    work_hours: 0,
    job_enviroment: 0,
    repetitive_tedious: 0,
    people_interations: 0,
    autonomy: 0,
    life_risk: 0,
    physical_stress: 0,
    mental_stress: 0,
    job_stress: 0,
    job_satisfaction: 0,
  });
  const { careerById = {}, loader = false } = useSelector(
    (store: any) => store.career
  );

  useEffect(() => {
    if (id?.toString()) {
      dispatch(getCareerById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    setProgress({
      ...progress,
      cost: careerById?.attributes?.admission_rank || 1,
      internet: careerById?.attributes?.job_help_people,
      over: careerById?.attributes?.work_life_balance,
      fun: careerById?.attributes?.potential,
      saftey: careerById?.attributes?.scope_of_skill,
      status: careerById?.attributes?.status_in_company,
      team: careerById?.attributes?.team_reliance,
      health:
        careerById?.attributes?.risk_to_health ||
        Math.floor(Math.random() * 4 + 1),
      precision_work: careerById?.attributes?.precision_work,
      work_hours: careerById?.attributes?.work_hours,
      job_enviroment: careerById?.attributes?.job_help_environment,
      repetitive_tedious:
        careerById?.attributes?.repetitive_tedious ||
        Math.floor(Math.random() * 3 + 1),
      people_interations: careerById?.attributes?.people_interaction,
      autonomy: careerById?.attributes?.autonomy,
      life_risk: careerById?.attributes?.risk_to_life,
      physical_stress: careerById?.attributes?.physical_stress,
      mental_stress: careerById?.attributes?.mental_stress,
      job_stress: careerById?.attributes?.job_stress,
      job_satisfaction: careerById?.attributes?.job_satisfaction,
    });
  }, [careerById]);
  const cat =
    careerById?.attributes?.education_categories &&
    careerById?.attributes?.education_categories[0] &&
    careerById?.attributes?.education_categories[0]?.attributes?.name;

  const youtube = careerById?.attributes?.youtube;

  const tabArray = [
    {
      label: <CustomTooltip title={TOOLTIP.T34}>Descriptions</CustomTooltip>,
      key: "1",
      children: (
        <Row>
          <Col md={24} xs={24}>
            {/* <h4 className="my-3 pb-5 text-center">Descriptions</h4> */}
            <div className="px-2">
              <h6 className="mb-2 pb-0 text-left">
                <CustomTooltip title={TOOLTIP.T26}>
                  Job Descriptions
                </CustomTooltip>
              </h6>
              <p className="text-left desc">
                {careerById?.attributes?.job_description
                  ?.replace(36, "education")
                  ?.replace(37, "Health ")}
              </p>
              <h6 className="mb-2 pb-0 text-left">
                <CustomTooltip title={TOOLTIP.T27}>
                  Study Description
                </CustomTooltip>
              </h6>
              <p className="text-left desc">
                {careerById?.attributes?.description_study
                  ?.replace(36, "education")
                  ?.replace(37, "Health ")}
              </p>
              <h6 className="mb-2 pb-0 text-left">
                <CustomTooltip title={TOOLTIP.T28}>
                  Student Interest Ideal for this Career
                </CustomTooltip>
              </h6>
              <p className="text-left desc">
                {careerById?.attributes?.student_intrest}
              </p>
              <h6 className="mb-2 pb-0 text-left">
                <CustomTooltip title={TOOLTIP.T29}>
                  Skill Transferable
                </CustomTooltip>
              </h6>
              <p className="text-left desc">
                {careerById?.attributes?.skills_transferable}
              </p>
              <h6 className="mb-2 pb-0 text-left">
                <CustomTooltip title={TOOLTIP.T30}>
                  Average Salary in Australia
                </CustomTooltip>
              </h6>
              <p className="text-left desc">
                {careerById?.attributes?.average_salary_aud?.includes("$")
                  ? careerById?.attributes?.average_salary_aud
                  : `$${careerById?.attributes?.average_salary_aud}`}
              </p>
              {/* <h6 className="mb-2 pb-0 text-left">
              Average Salary
              <p className="text-left desc">
              </h6>
                {careerById?.attributes?.average_salary}
              </p> */}
              <h6 className="mb-2 pb-0 text-left">
                <CustomTooltip title={TOOLTIP.T31}>Course Cost</CustomTooltip>
              </h6>
              <p className="text-left desc">
                ${careerById?.attributes?.cost_course}
              </p>
              <h6 className="mb-2 pb-0 text-left">
                <CustomTooltip title={TOOLTIP.T32}>
                  Course Duration
                </CustomTooltip>
              </h6>
              <p className="text-left desc mb-0">
                {careerById?.attributes?.years_needed}
              </p>
              <span className="note">
                FT/PT = Full Time or Part Time in years
              </span>
              <h6 className="mb-2 pb-0 text-left">
                <CustomTooltip title={TOOLTIP.T33}>
                  Internship Duration
                </CustomTooltip>
              </h6>
              <p className="text-left desc mb-0">
                {careerById?.attributes?.internship_needed}
              </p>
              <span className="note">
                FT/PT = Full Time or Part Time in years
              </span>
            </div>
          </Col>
        </Row>
      ),
    },
    {
      label: <CustomTooltip title={TOOLTIP.T35}>University</CustomTooltip>,
      key: "2",
      children: (
        <Row>
          <Col md={24} xs={24}>
            {/* <h4 className="my-3 pb-5 text-center">
              Universities / Institutions
            </h4> */}
            <CareerUniversity
              count={20}
              universities={careerById?.attributes?.universities}
              customClass="details"
            />
          </Col>
        </Row>
      ),
    },
    youtube && {
      label: <CustomTooltip title={TOOLTIP.T36}>Video</CustomTooltip>,
      key: "3",
      children: (
        <div className="d-flex justify-content-center align-items-center">
          <iframe
            width="95%"
            height="315"
            src={youtube}
            title="video-frame"
          ></iframe>
        </div>
      ),
    },
  ];
  return (
    <Spin spinning={loader}>
      <div
        className="content-tabs d-flex flex-column justify-content-between position-relative"
        key={careerById?.id}
      >
        <div
          className="content-tabs__header d-flex flex-column align-items-center justify-content-center "
          style={{
            backgroundImage: `url("${
              careerById?.attributes?.image
                ? careerById?.attributes?.image
                : careerImage
            }")`,
          }}
        >
          <h3 className="text-center m-0">
            {careerById?.attributes?.title
              ?.replace(36, "education")
              ?.replace(37, "Health ")}
          </h3>
          <p className="text-center m-0">
            {cat?.replace(36, "education")?.replace(37, "Health ")}
          </p>
          {/* <p className="text-center desc">
          {stringLimt(careerById?.attributes?.job_description, 400)}
        </p> */}
        </div>
        <Row>
          <Col md={10} xs={24}>
            <h4 className="my-2 my-md-3 text-center">
              {" "}
              <CustomTooltip title={TOOLTIP.T37}>Details</CustomTooltip>
            </h4>

            <div className="content-tabs__detail">
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T8}>🥇 ATAR</CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.cost}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={100}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T20}>
                    ✌️ Autonomy & Freedom
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.autonomy}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T17}>
                    🏢 Helping Environment
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.internet}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>

              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T24}>
                    😓 Job Stress
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.mental_stress}
                  // variant="success"
                  bgColor="#ffc81c"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T25}>
                    ✌️ Job Satisfaction
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.job_satisfaction}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T23}>
                    😑 Mental Stress
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.mental_stress}
                  // variant="success"
                  bgColor="#ffc81c"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T10}>
                    🔀 Potential to Switch
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.fun}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T22}>
                    😞 Physical Stress
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.physical_stress}
                  // variant="success"
                  bgColor="#ffc81c"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T19}>
                    🤩 People Interation
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.people_interations}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T15}>
                    🔍 Precision Work
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.precision_work}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T21}>
                    👤 Risk to Life
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.life_risk}
                  // variant="success"
                  bgColor="#ff3027"
                  maxCompleted={10}
                />
              </div>

              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T13}>
                    ⚠️ Risk to health
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.health?.toString()}
                  // variant="success"
                  bgColor="#ff3027"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T18}>
                    😩 Repetitive or Tedious
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.repetitive_tedious?.toString()}
                  // variant="success"
                  bgColor="#ffc81c"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T12}>
                    🙌 Status in Company
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.status}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>

              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T11}>
                    🌐 Scope World wide
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.saftey}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>

              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T14}>
                    👥 Team Reliance
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.team}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>

              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T16}>
                    ⏰ Work Hours
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.work_hours}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>
              <div className="content-tabs__detail__progress d-flex justify-content-between align-items-center">
                <h3>
                  <CustomTooltip title={TOOLTIP.T9}>
                    🌟 Work-Life Balance
                  </CustomTooltip>
                </h3>
                <ProgressBar
                  baseBgColor="#ffffff36"
                  animateOnRender
                  className="progress"
                  completed={progress.over}
                  // variant="success"
                  bgColor="#00eb75"
                  maxCompleted={10}
                />
              </div>

              {/* <p>Still an amazing island</p> */}
              <div className="d-flex justify-content-end">
                <IoShareOutline color="#fff" size={20} />
              </div>
            </div>
          </Col>
          <Col md={14} xs={24}>
            <div className="d-flex justify-content-end my-2">
              <span className="btn btn-primary" onClick={onOracle}>
                Oracle
              </span>
            </div>
            <Tabs items={tabArray} />
          </Col>
        </Row>
      </div>
    </Spin>
  );
};
export default memo(ContentTabs);
