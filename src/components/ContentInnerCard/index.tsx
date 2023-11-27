import { useState, memo } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillInstagram } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { Button, Input, Modal, Tooltip, message } from "antd";
import { useDispatch } from "react-redux";
import { careerMeta, likePostCareer } from "src/redux/actions/careerAction";
import { useNavigate } from "react-router-dom";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  EmailShareButton,
} from "react-share";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCopy } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import Environment from "../../network/baseUrl";
import imageCareer from "../../assets/images/placeholderCareer.jpeg";
import _ from "lodash";

interface IContentCards {
  item: any;
  index: number;
  onArrayChange?: any;
  setSignUpToggle: Function;
}

const ContentInnerCards = ({ item, index, setSignUpToggle }: IContentCards) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [like, setLike] = useState(_.cloneDeep(item?.attributes?.userLike));
  const [likeCount, setLikeCount] = useState(
    _.cloneDeep(item?.attributes?.like_count)
  );
  const [shareCount, setShareCount] = useState<number>(
    item?.attributes?.share_count as number
  );

  const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
  const loginUser = getUser ? JSON.parse(getUser) : null;

  const IS_ADMIN = loginUser?.role?.type === "ADMIN";
  const [progress, setProgress] = useState({
    over: 0,
    cost: 0,
    fun: 0,
    saftey: 0,
    status: 0,
  });

  const shareCallback = async () => {
    setTimeout(() => {
      setShareCount(shareCount + 1);
    }, 3000);
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
  };

  const WhatsappShare = `
Hey there!
I came across this amazing resource that delves deep into a potential career path.
It covers everything from salary expectations to required skills and education. I thought you might find it as insightful as I did! 
Take a look. 
Click here 👉 `;

  const liekCallback = () => {
    setLike(!like);
    setLikeCount((likeCount: any) => {
      if (like) {
        return --likeCount;
      } else {
        return ++likeCount;
      }
    });
  };
  const likeHandler = () => {
    if (loginUser) {
      dispatch(
        likePostCareer(item?.id, { count_type: "LIKE_COUNT" }, liekCallback)
      );
    } else {
      setSignUpToggle(true);
    }
  };
  return (
    <div
      className="content-card__wrapper d-flex flex-column gap-1 gap-md-3 justify-content-between position-relative"
      style={{
        backgroundImage: `url("${
          item?.attributes?.image ? item?.attributes?.image : imageCareer
        }")`,
      }}
      onMouseEnter={() => {
        setProgress({
          ...progress,
          cost: item?.attributes?.admission_rank || 1,
          over: item?.attributes?.work_life_balance,
          fun: item?.attributes?.potential,
          saftey: item?.attributes?.scope_of_skill,
          status: item?.attributes?.status_in_company,
        });
      }}
      onMouseLeave={() =>
        setProgress({
          ...progress,
          over: 0,
          cost: 0,
          fun: 0,
          saftey: 0,
          status: 0,
        })
      }
    >
      <div className="number">
        <h2 style={{ fontSize: 0 }}>{index + 1}</h2>
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
        <div className="back-header d-flex justify-content-end mb-md-3 mb-1">
          {IS_ADMIN && (
            <span className="me-2 text-white" style={{ fontSize: "16px" }}>
              {likeCount}
            </span>
          )}
          {like ? (
            <AiFillHeart
              size={28}
              style={{ fill: "#ff4742" }}
              onClick={likeHandler}
            />
          ) : (
            <AiOutlineHeart
              className="heart-1"
              size={28}
              onClick={likeHandler}
            />
          )}
        </div>
        <div
          className="content-card__wrapper__back"
          onClick={() => navigate(`/career/${item?.id}`)}
          key={index}
        >
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🥇 ATAR</h3>
            <ProgressBar
              bgColor={"#00eb75"}
              animateOnRender
              completed={progress.cost}
              maxCompleted={100}
              className="progress"
              baseBgColor="#ffffff36"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>⚖️ Work Life Balance</h3>
            <ProgressBar
              bgColor={"#00eb75"}
              animateOnRender
              completed={progress.over}
              maxCompleted={10}
              baseBgColor="#ffffff36"
              className="progress"
            />
          </div>

          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🙌 Status in company</h3>
            <ProgressBar
              bgColor={"#00eb75"}
              animateOnRender
              completed={progress.status}
              maxCompleted={10}
              baseBgColor="#ffffff36"
              className="progress"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🔀 Potential to Switch</h3>
            <ProgressBar
              bgColor={"#00eb75"}
              animateOnRender
              completed={progress.fun}
              maxCompleted={10}
              baseBgColor="#ffffff36"
              className="progress"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>🌐 Scope World wide</h3>
            <ProgressBar
              bgColor={"#00eb75"}
              animateOnRender
              completed={progress.saftey}
              maxCompleted={10}
              baseBgColor="#ffffff36"
              className="progress"
            />
          </div>

          <div
            className="d-flex justify-content-between"
            style={{ zIndex: 999 }}
          >
            <h3 className="content-card__wrapper__back__click-text">
              Click for more
            </h3>
            <span>
              {IS_ADMIN && (
                <span className="me-2 text-white" style={{ fontSize: "16px" }}>
                  {shareCount}
                </span>
              )}
              <Tooltip placement="top" title={"Share link"} color="#ff4742">
                <IoShareOutline
                  color="#fff"
                  size={20}
                  onClick={(event: any) => {
                    setIsVisible(true);
                    event.stopPropagation();
                  }}
                />
              </Tooltip>
            </span>
          </div>
        </div>
      </div>
      <Modal
        open={isVisible}
        onCancel={() => setIsVisible(false)}
        footer={false}
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
          <FacebookShareButton
            quote={item?.attributes?.title}
            onShareWindowClose={() => {
              // if (isComponentMounted) {
              setShareCount(shareCount + 1);
              dispatch(
                careerMeta(
                  item?.id,
                  { count_type: "SHARE_COUNT" },
                  shareCallback
                )
              );
              // }
            }}
            url={shareLink}
            // onSubmitCapture={(e) => console.log("runddddddd", e)}
          >
            <BsFacebook size={32} color="#3b5998" />
          </FacebookShareButton>
          <WhatsappShareButton
            url={shareLink}
            onShareWindowClose={() =>
              dispatch(
                careerMeta(
                  item?.id,
                  { count_type: "SHARE_COUNT" },
                  shareCallback
                )
              )
            }
            title={WhatsappShare}
            separator=":: "
          >
            <BsWhatsapp size={32} color="#25D366" />
          </WhatsappShareButton>
          <TwitterShareButton
            url={shareLink}
            onShareWindowClose={() =>
              dispatch(
                careerMeta(
                  item?.id,
                  { count_type: "SHARE_COUNT" },
                  shareCallback
                )
              )
            }
            title={item?.attributes?.title}
            via="Rilati"
            className="Demo__some-network__share-button"
          >
            <BsTwitter size={32} color="#00acee" />
          </TwitterShareButton>
          <InstapaperShareButton
            url={shareLink}
            title={item?.attributes?.title}
            onShareWindowClose={() =>
              dispatch(
                careerMeta(
                  item?.id,
                  { count_type: "SHARE_COUNT" },
                  shareCallback
                )
              )
            }
            className="Demo__some-network__share-button"
          >
            <AiFillInstagram size={32} color="#fa7e1e " />
          </InstapaperShareButton>
          <EmailShareButton
            url={shareLink}
            onShareWindowClose={() =>
              dispatch(
                careerMeta(
                  item?.id,
                  { count_type: "SHARE_COUNT" },
                  shareCallback
                )
              )
            }
            subject={item?.attributes?.title}
            body="Hey there!
            I came across this amazing resource that delves deep into a potential career path. It covers everything from salary expectations to required skills and education. I thought you might find it as insightful as I did! 
            Take a look. 
            "
            className="Demo__some-network__share-button"
          >
            <GrMail size={32} />
          </EmailShareButton>
        </div>
      </Modal>
    </div>
  );
};
export default memo(ContentInnerCards);
