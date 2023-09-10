import { useState, memo } from "react";

import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import imageCareer from "../../assets/images/placeholderCareer.jpeg";
import { IoShareOutline } from "react-icons/io5";
import { Button, Input, Modal, Tooltip, message } from "antd";
import { useDispatch } from "react-redux";
import { likeCareer } from "src/redux/actions/careerAction";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  EmailShareButton,
} from "react-share";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCopy } from "react-icons/bi";

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
}: // onArrayChange,
IContentCards) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [like, setLike] = useState(item?.attributes?.userLike);
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
  const callback = () => {
    setLike(!like);
  };
  const shareLink = `https://rilati.com/career/${item?.id}`;
  const shareWithMessage = `
  Hey there!
  I came across this amazing resource that delves deep into a potential career path.
  It covers everything from salary expectations to required skills and education. 
  I thought you might find it as insightful as I did! 
  Take a look.
  Click here 👉 :: https://rilati.com/career/${item?.id}`;
  const handleCopy = (text = shareWithMessage) => {
    const textToCopy = text;
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = textToCopy;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    message.info("Career Copied!");
    // setCopied(true);
  };
  const WhatsappShare = `
Hey there!
I came across this amazing resource that delves deep into a potential career path.
It covers everything from salary expectations to required skills and education. I thought you might find it as insightful as I did! 
Take a look. 
Click here 👉 `;

  return (
    <div
      className="content-card__wrapper d-flex flex-column gap-1 gap-md-3 justify-content-between position-relative"
      style={{ backgroundImage: `url("${image ? image : imageCareer}")` }}
      // key={item?.id}
      onMouseEnter={() => {
        setProgress({
          ...progress,
          cost: item?.attributes?.admission_rank || 1,
          internet: item?.attributes?.job_help_people,
          over: item?.attributes?.work_life_balance,
          fun: item?.attributes?.potential,
          saftey: item?.attributes?.scope_of_skill,
          status: item?.attributes?.status_in_company,
          team: item?.attributes?.team_reliance,
          health:
            item?.attributes?.risk_to_health ||
            Math.floor(Math.random() * 4 + 1),
          precision_work: item?.attributes?.precision_work,
          work_hours: item?.attributes?.work_hours,
          job_enviroment: item?.attributes?.job_help_environment,
          repetitive_tedious:
            item?.attributes?.repetitive_tedious ||
            Math.floor(Math.random() * 3 + 1),
          people_interations: item?.attributes?.people_interaction,
          autonomy: item?.attributes?.autonomy,
          life_risk: item?.attributes?.risk_to_life,
          physical_stress: item?.attributes?.physical_stress,
          mental_stress: item?.attributes?.mental_stress,
          job_stress: item?.attributes?.job_stress,
          job_satisfaction: item?.attributes?.job_satisfaction,
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
          people_interations: 0,
          autonomy: 0,
          life_risk: 0,
          physical_stress: 0,
          mental_stress: 0,
          job_stress: 0,
          job_satisfaction: 0,
        })
      }
    >
      <div className="number">
        <h2>{index + 1}</h2>
      </div>
      <div className="content-card__wrapper__info d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center">
          {item?.attributes?.title
            ?.replace(36, "education")
            ?.replace(37, "Health")}
        </h3>
        {/* <p>{stringLimt(item?.attributes?.career_category, 18)}</p> */}
      </div>
      <div className="content-card__wrapper__pricing d-flex justify-content-between p-2">
        {/* <div className="content-card__wrapper__pricing__temp">
          <h2>{item?.attributes?.years_needed}</h2>
        </div> */}
        <div className="content-card__wrapper__pricing__price">
          <h2>{item?.attributes?.average_salary_aud}/year</h2>
        </div>
      </div>
      <div className="mb-4 back py-3 px-2">
        <div className="back-header d-flex justify-content-between mb-3">
          {like ? (
            <AiFillHeart
              size={28}
              style={{ fill: "#ff4742" }}
              onClick={() =>
                dispatch(likeCareer({ career_id: item?.id }, callback))
              }
            />
          ) : (
            <AiOutlineHeart
              className="heart-1"
              size={28}
              onClick={() =>
                dispatch(likeCareer({ career_id: item?.id }, callback))
              }
            />
          )}
          {/* <AiOutlineClose
            size={28}
            onClick={() => {
              onArrayChange(index, item);
            }}
          /> */}
          {/* <AiTwotoneHeart size={28} className="heart-2" /> */}
        </div>
        <div
          className="content-card__wrapper__back"
          // onClick={() => setIsVisible(true)}
          onClick={() => navigate(`/career/${item?.id}`)}
          key={index}
        >
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🥇 ATAR</h3>
            <ProgressBar
              bgColor="#00eb75"
              animateOnRender
              completed={progress.cost}
              // variant="success"
              maxCompleted={100}
              className="progress"
              baseBgColor="#ffffff36"
              // customLabel="10"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>⚖️ Work Life Balance</h3>
            <ProgressBar
              bgColor="#00eb75"
              animateOnRender
              completed={progress.over}
              // variant="success"
              maxCompleted={10}
              baseBgColor="#ffffff36"
              className="progress"
            />
          </div>

          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🙌 Status in company</h3>
            <ProgressBar
              bgColor="#00eb75"
              animateOnRender
              completed={progress.status}
              // variant="success"
              maxCompleted={10}
              baseBgColor="#ffffff36"
              className="progress"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🔀 Potential to Switch</h3>
            <ProgressBar
              bgColor="#00eb75"
              animateOnRender
              completed={progress.fun}
              // variant="success"
              maxCompleted={10}
              baseBgColor="#ffffff36"
              className="progress"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🌐 Scope World wide</h3>
            <ProgressBar
              bgColor="#00eb75"
              animateOnRender
              completed={progress.saftey}
              // variant="success"
              maxCompleted={10}
              baseBgColor="#ffffff36"
              className="progress"
            />
          </div>
          {/* <p>Still an amazing island</p> */}
          <div className="d-flex justify-content-end" style={{ zIndex: 99999 }}>
            <Tooltip placement="top" title={"Share with link"} color="#ff4742">
              <IoShareOutline
                color="#fff"
                size={20}
                onClick={(event: any) => {
                  // handleCopy();
                  setIsVisible(true);
                  event.stopPropagation();
                }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <Modal
        open={isVisible}
        onCancel={() => setIsVisible(false)}
        footer={false}
        // width={"80%"}
      >
        <h2 className="text-center">Share Career</h2>
        <div>
          <div className="textarea">
            <span>
              Hey there!
              <br />I came across this amazing resource that delves deep into a
              potential career path. It covers everything from salary
              expectations to required skills and education. I thought you might
              find it as insightful as I did!
              <br />
              Take a look.
            </span>
          </div>
          <p className="my-1">Career Link</p>
          <div className="d-flex gap-2">
            <Input
              value={shareLink}
              readOnly
              color="#000"
              suffix={
                <BiCopy
                  className="cursor-pointer"
                  onClick={() => handleCopy(shareLink)}
                />
              }
            />
            <Button className="custom" onClick={() => handleCopy(shareLink)}>
              Copy
            </Button>
            <Button className="custom" onClick={() => handleCopy()}>
              Copy Message and Link
            </Button>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-between px-5 py-3">
          <FacebookShareButton quote={item?.attributes?.title} url={shareLink}>
            <BsFacebook size={32} color="#3b5998 " />
            {/* <span>Facebook</span> */}
          </FacebookShareButton>
          <WhatsappShareButton
            url={shareLink}
            title={WhatsappShare}
            separator=":: "
          >
            <BsWhatsapp size={32} color="#25D366" />
            {/* <span>Whatsapp</span> */}
          </WhatsappShareButton>
          <TwitterShareButton
            url={shareLink}
            title={item?.attributes?.title}
            via="Rilati"
            className="Demo__some-network__share-button"
          >
            <BsTwitter size={32} color="#00acee" />

            {/* <span>Twitter</span> */}
          </TwitterShareButton>
          <InstapaperShareButton
            url={shareLink}
            title={item?.attributes?.title}
            className="Demo__some-network__share-button"
          >
            <AiFillInstagram size={32} color="#fa7e1e " />
            {/* <span>Instagram</span> */}
          </InstapaperShareButton>
          <EmailShareButton
            url={shareLink}
            subject={item?.attributes?.title}
            body="Hey there!
            I came across this amazing resource that delves deep into a potential career path. It covers everything from salary expectations to required skills and education. I thought you might find it as insightful as I did! 
            Take a look. 
            "
            className="Demo__some-network__share-button "
          >
            <GrMail size={32} />
            {/* <span>Email</span> */}
          </EmailShareButton>
        </div>
        {/* <div className="d-flex mt-4 align-items-center justify-content-center">
          <h4 className="m-0 me-3">Share with link</h4>
          <h5
            className="m-0 cursor-pointer"
            color="red"
            style={{ color: "red" }}
            onClick={() => handleCopy()}
          >
            {shareLink}
          </h5>
        </div> */}
      </Modal>
    </div>
  );
};
export default memo(ContentInnerCards);
