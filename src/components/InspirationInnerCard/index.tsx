import { useState } from "react";
import imageCareer from "../../assets/images/placeholderCareer.jpeg";
import { Modal } from "antd";
import ContentTabs from "../ContentTabs";

interface IContentCards {
  item: any;
  index: number;
  image: any;
  onArrayChange?: any;
}
const ContentInnerCards = ({ item, index, image }: IContentCards) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log("item", item);

  return (
    <div
      className="content-card__wrapper d-flex flex-column gap-1 gap-md-3 justify-content-between position-relative"
      style={{ backgroundImage: `url("${image ? image : imageCareer}")` }}
      key={item?.id}
    >
      <div className="number">
        <h2>{index + 1}</h2>
      </div>
      <div className="content-card__wrapper__info d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center">{item?.name}</h3>
        {/* <p>{stringLimt(item?.attributes?.career_category, 18)}</p> */}
      </div>
      <div className="content-card__wrapper__pricing d-flex justify-content-between p-2">
        {/* <div className="content-card__wrapper__pricing__temp">
          <h2>{item?.attributes?.years_needed}</h2>
        </div> */}
      </div>
      <div className="mb-4 back py-3 px-2">
        <div className="back-header d-flex justify-content-between mb-3"></div>
        <div
          className="content-card__wrapper__back"
          onClick={() => setIsVisible(true)}
          key={index}
        >
          {/* <div className="d-flex justify-content-end">
            <IoShareOutline color="#fff" size={20} />
          </div> */}
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
          // progress={progress}
        />
      </Modal>
    </div>
  );
};
export default ContentInnerCards;
