import { useState, useEffect, memo, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { Input, Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Environment from "../../network/baseUrl";

import ContentTabs from "../ContentTabs";
import CustomTooltip from "../CustomTooltip";
import HighChartTree from "../HighChartTree";
import "./ContentCards.scss";
import CareerCards from "../CareerCards";
import InspirationListing from "../InspirationListing";

interface ContentCards {
  setSignUpToggle: Function;
}
const ContentCards = ({ setSignUpToggle }: ContentCards) => {
  const [search, setSearch] = useState("");
  const ref = useRef<any>(null);
  const [isInspiration, setIsInspiration] = useState(false);
  const { id } = useParams();
  // const disptach = useDispatch<any>();
  const [isVisible, setIsVisible] = useState(false);
  const [isOracle, setIsOracle] = useState(false);
  const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
  const loginUser = getUser ? JSON.parse(getUser) : null;
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed

    const handleMobileChange = (event: any) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  const onCareerClick = (link: string) => {
    const career = link?.split("-")[2];
    setIsOracle(false);
    navigate(`/career/${career}`);
  };
  const arr = [];
  for (let index = 0; index < 100; index++) {
    arr.push(index);
  }

  const inspirationHandler = () => {
    ref.current.input.value = "";
    setSearch("");
    setIsInspiration(true);
  };
  const oracleHandler = () => {
    if (loginUser) {
      setIsOracle(true);
    } else {
      setSignUpToggle(true);
    }
  };
  useEffect(() => {
    // if (!isMobile) {
    if (id) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    // }
  }, [id]);
  const t2 = (
    <span>
      Unlock your future! <br /> Click ‘Career’ to access comprehensive career
      details, including in-depth information, videos, educational paths, study
      descriptions and much more, all in one convenient popup window.
    </span>
  );
  const t3 = (
    <span>
      Unveil the path of greatness! <br /> Click ‘Inspiration’ to explore
      influential figures from diverse fields. Each thumbnail opens a popup
      showcasing their inspiring journey, career path, and educational
      background, offering insights into how your role models achieved their
      remarkable success.
    </span>
  );
  const t4 = (
    <span>
      Find your answers! <br /> Use the 'Search' option to discover specific
      career information or explore profiles of inspirational individuals
      tailored to your search query.
    </span>
  );
  const t5 = (
    <span>
      Unleash Your Destiny! <br /> The 'Oracle' button holds the key to your
      unique journey. Your profile's data paints a vivid career roadmap,
      reflecting your answers. Explore your personalized path in a stunning
      graphical presentation, unveiling the array of careers and opportunities
      destined for you.
    </span>
  );

  const onOracle = () => {
    if (loginUser) {
      setIsVisible(false);
      navigate("/");
      setIsOracle(true);
    } else {
      setIsVisible(false);
      navigate("/");
      setSignUpToggle(true);
    }
  };

  return (
    <Container className="content-card mb-3 px-0 " fluid>
      <Row className="px-md-3 px-0 m-0">
        <Col
          md={12}
          className="d-flex align-items-center  flex-wrap justify-content-end justify-content-md-between my-3"
        >
          <div className="button-wrapper d-flex justify-content-center align-items-center flex-wrap flex-md-row ">
            <div className="d-md-block d-flex justify-content-center flex-wrap">
              <Button
                className={`btn btn-primary me-2 custom ${
                  isInspiration ? "" : "active"
                }`}
                onClick={() => {
                  setIsInspiration(false);
                  ref.current.value = "";
                  setSearch("");
                }}
              >
                <CustomTooltip title={t2}>Career</CustomTooltip>
              </Button>
              <Button
                className={`btn btn-primary me-2 custom ${
                  isInspiration ? "active" : ""
                }`}
                onClick={inspirationHandler}
              >
                <CustomTooltip title={t3}>Inspiration</CustomTooltip>
              </Button>
              <div className="d-md-none d-block mb-3">
                <Button
                  className="btn-secondary me-2 d-md-none d-block sort-by"
                  onClick={oracleHandler}
                >
                  Oracle
                </Button>
              </div>
              <div className="d-md-none d-block mb-3">
                <Button className="btn-secondary sort-by">Internship</Button>
              </div>
              <div className="d-md-none d-block mb-3">
                <Button className="btn-secondary sort-by">Scholarship</Button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center search-wrapper">
            <CustomTooltip title={t4}>
              <Input
                ref={ref}
                placeholder="Search or filter"
                prefix={<AiFillPlusCircle size={25} color="#ff4742" />}
                className="search-input"
                onPressEnter={(e: any) => setSearch(e.target.value)}
              />
            </CustomTooltip>
          </div>
          <div className="d-none d-md-block">
            <Button
              className="btn-secondary me-2 d-md-none d-block sort-by"
              onClick={oracleHandler}
            >
              <CustomTooltip title={t5}>Oracle </CustomTooltip>
            </Button>

            <Button className="btn-secondary sort-by">Internship</Button>
            <Button className="btn-secondary sort-by">Scholarship</Button>
          </div>
        </Col>
      </Row>
      {!isInspiration && (
        <CareerCards
          loginUser={loginUser}
          setSignUpToggle={setSignUpToggle}
          search={search}
        />
      )}
      {isInspiration && (
        <InspirationListing
          // inspirations={inspirations}
          search={search}
          loginUser={loginUser}
        />
      )}
      <Modal
        open={isVisible}
        footer={false}
        onCancel={() => navigate(`/`)}
        width={isMobile ? "95%" : "80%"}
        zIndex={9}
      >
        <ContentTabs onOracle={onOracle} />
      </Modal>
      <Modal
        open={isOracle}
        footer={false}
        onCancel={() => setIsOracle(false)}
        width={isMobile ? "95%" : "80%"}
        zIndex={9}
      >
        <HighChartTree isOracle={isOracle} onCareerClick={onCareerClick} />
      </Modal>
    </Container>
  );
};
export default memo(ContentCards);
