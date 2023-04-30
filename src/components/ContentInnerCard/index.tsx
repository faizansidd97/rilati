import { useState, useEffect } from "react";

import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import ProgressBar from "react-bootstrap/ProgressBar";

import { IoShareOutline } from "react-icons/io5";
import { Modal } from "antd";
import ContentTabs from "../ContentTabs";

interface IContentCards {
  item: any;
  index: number;
  onArrayChange?: any;
}
const ContentInnerCards = ({ item, index, onArrayChange }: IContentCards) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState({
    over: 0,
    cost: 0,
    internet: 0,
    fun: 0,
    saftey: 0,
  });

  return (
    <div
      className="content-card__wrapper d-flex flex-column justify-content-between position-relative"
      style={{ backgroundImage: `url("${item.image}")` }}
      key={index}
      onMouseEnter={() => {
        setProgress({
          ...progress,
          cost: 20,
          internet: 80,
          over: 50,
          fun: 40,
          saftey: 65,
        });
      }}
      onMouseLeave={() =>
        setProgress({
          ...progress,
          cost: 0,
          internet: 0,
          over: 0,
          fun: 0,
          saftey: 0,
        })
      }
    >
      <div className="number">
        <h2>{index + 1}</h2>
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
        <div className="back-header d-flex justify-content-between mb-3">
          <AiOutlineHeart className="heart-1" size={28} />
          <AiOutlineClose
            size={28}
            onClick={() => {
              onArrayChange(index, item);
              console.log(2);
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
            <h3>⭐️ Over All</h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.over}
              variant="success"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>💵 Cost </h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.cost}
              variant="success"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>📡 Internet</h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.internet}
              variant="success"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>😀 Fun</h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.fun}
              variant="success"
            />
          </div>
          <div className="content-card__wrapper__back__progress d-flex justify-content-between align-items-center">
            <h3>👮 Safety</h3>
            <ProgressBar
              color="#ffffff36"
              now={progress.saftey}
              variant="success"
            />
          </div>
          <p>Still an amazing island</p>
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
        <ContentTabs item={item} index={index} progress={progress} />
      </Modal>
    </div>
  );
};
export default ContentInnerCards;
