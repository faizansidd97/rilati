import { useState } from "react";

import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import ProgressBar from "react-bootstrap/ProgressBar";
import imageCareer from "../../assets/images/placeholderCareer.jpeg";
import { IoShareOutline } from "react-icons/io5";
import { Modal } from "antd";
import ContentTabs from "../ContentTabs";
import { stringLimt } from "src/helper/helper";

interface IContentCards {
  item: any;
  index: number;
  image: any;
  onArrayChange?: any;
}
const ContentInnerCards = ({
  item,
  index,
  image,
  onArrayChange,
}: IContentCards) => {
  const [isVisible, setIsVisible] = useState(false);
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
  });

  return (
    <div
      className="content-card__wrapper d-flex flex-column gap-1 gap-md-3 justify-content-between position-relative"
      style={{ backgroundImage: `url("${image ? image : imageCareer}")` }}
      key={index}
      onMouseEnter={() => {
        setProgress({
          ...progress,
          cost: item?.attributes?.job_stress,
          internet: item?.attributes?.job_help_people,
          over: item?.attributes?.scope_of_skill,
          fun: item?.attributes?.potential,
          saftey: item?.attributes?.job_satisfaction,
          status: item?.attributes?.status_in_company,
          team: item?.attributes?.team_reliance,
          health: item?.attributes?.risk_to_health,
          precision_work: item?.attributes?.precision_work,
          work_hours: item?.attributes?.work_hours,
          job_enviroment: item?.attributes?.job_help_environment,
          repetitive_tedious: item?.attributes?.repetitive_tedious,
        });
      }}
      onMouseLeave={() =>
        setProgress({
          ...progress,
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
        })
      }
    >
      <div className="number">
        <h2>{index + 1}</h2>
      </div>
      <div className="content-card__wrapper__info d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center">
          {stringLimt(item?.attributes?.title, 50)}
        </h3>
        {/* <p>{stringLimt(item?.attributes?.career_category, 18)}</p> */}
      </div>
      <div className="content-card__wrapper__pricing d-flex justify-content-between p-2">
        {/* <div className="content-card__wrapper__pricing__temp">
          <h2>{item?.attributes?.years_needed}</h2>
        </div> */}
        <div className="content-card__wrapper__pricing__price">
          <h2>{stringLimt(item?.attributes?.average_salary_aud, 20)}/year</h2>
        </div>
      </div>
      <div className="mb-4 px-3 back p-3">
        <div className="back-header d-flex justify-content-between mb-3">
          <AiOutlineHeart className="heart-1" size={28} />
          <AiOutlineClose
            size={28}
            onClick={() => {
              onArrayChange(index, item);
            }}
          />
          {/* <AiTwotoneHeart size={28} className="heart-2" /> */}
        </div>
        <div
          className="content-card__wrapper__back"
          onClick={() => setIsVisible(true)}
          key={index}
        >
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🌟 Expertise</h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.over}
              variant="success"
              max={10}
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>😞 Work Load </h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.cost}
              variant="success"
              max={10}
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🤝 Help</h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.internet}
              variant="success"
              max={10}
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>😀 Potential</h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.fun}
              variant="success"
              max={10}
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>👮 Job Satisfaction</h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.saftey}
              variant="success"
              max={10}
            />
          </div>
          {/* <p>Still an amazing island</p> */}
          <div className="d-flex justify-content-end">
            <IoShareOutline color="#fff" size={20} />
          </div>
        </div>
      </div>
      <Modal
        open={isVisible}
        footer={false}
        onCancel={() => setIsVisible(false)}
        width={"80%"}
        zIndex={9999}
      >
        <ContentTabs
          image={image}
          item={item}
          index={index}
          progress={progress}
        />
      </Modal>
    </div>
  );
};
export default ContentInnerCards;
