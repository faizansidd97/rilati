import { useState } from "react";
import imageCareer from "../../assets/images/placeholderCareer.jpeg";
import { Modal } from "antd";
import { Col, Row } from "react-bootstrap";

interface IContentCards {
  item: any;
  index: number;
  image: any;
  onArrayChange?: any;
}
const ContentInnerCards = ({ item, index, image }: IContentCards) => {
  const [isVisible, setIsVisible] = useState(false);

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
          className="content-card__wrapper__back w-100 h-100 d-flex justify-content-center align-items-center"
          onClick={() => setIsVisible(true)}
          key={index}
        >
          <h3 style={{ color: "#fff" }}>View Details</h3>
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
        <div className="profile-modal-wrapper">
          <h3 className="text-center pb-4">Profile Details</h3>
          <Row>
            <Col md={4} sm={12}>
              <img src={image} className="w-100 profile-image" alt="people" />
            </Col>
            <Col md={8} sm={12}>
              <Row>
                <Col md={2}>
                  <h6>Name:</h6>
                </Col>
                <Col md={10}>
                  <p className="ms-2">{item?.name}</p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <h6>Description:</h6>
                </Col>
                <Col md={10}>
                  <p className="ms-2">
                    {item?.description?.replace(/\. {4}/g, ".\n")}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <h6>Education:</h6>
                </Col>
                <Col md={10}>
                  <p className="ms-2">
                    {item?.education?.replace(/\. {4}/g, ".\n")}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <h6>Occupation:</h6>
                </Col>
                <Col md={10}>
                  <p className="ms-2">{item?.occupation}</p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <h6>Career Path:</h6>
                </Col>
                <Col md={10}>
                  <p className="ms-2" style={{ whiteSpace: "pre-line" }}>
                    {item?.career_path?.replace(/\. {4}/g, ".\n")}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* </div> */}
        </div>
      </Modal>
    </div>
  );
};
export default ContentInnerCards;
