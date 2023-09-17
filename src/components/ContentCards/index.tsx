import { useState, useEffect, memo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DotChartOutlined } from "@ant-design/icons";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  Dropdown,
  Input,
  MenuProps,
  Modal,
  Radio,
  Skeleton,
  message,
} from "antd";
import { contentData } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { getCareer } from "src/redux/actions/careerAction";
import { getInspiration } from "src/redux/actions/inspirationsAction";
import { useNavigate, useParams } from "react-router-dom";
import ContentInnerCards from "../ContentInnerCard";
import Environment from "../../network/baseUrl";
import debounce from "lodash/debounce";
import InspirationInnerCard from "../InspirationInnerCard";
import ContentTabs from "../ContentTabs";
import CustomTooltip from "../CustomTooltip";
import HighChartTree from "../HighChartTree";
import "./ContentCards.scss";

let page = 1;
let curretnInspirationPage = 1;
interface ContentCards {
  setSignUpToggle: Function;
}
const ContentCards = ({ setSignUpToggle }: ContentCards) => {
  const [data, setData] = useState([...contentData]);
  const [career, setCareer]: any = useState([]);
  const [inspirations, setInspirations]: any = useState([]);
  const [isInspiration, setIsInspiration] = useState(false);
  const { id } = useParams();
  const disptach = useDispatch<any>();
  const [isVisible, setIsVisible] = useState(false);
  const [isOracle, setIsOracle] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
  const loginUser = getUser ? JSON.parse(getUser) : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (loginUser) {
      disptach(getCareer({ page, take: 20, user_id: loginUser?.id }));
    } else {
      disptach(getCareer({ page, take: 20 }));
    }
  }, [disptach]);
  const onCareerClick = (link: string) => {
    const career = link?.split("-")[2];
    setIsOracle(false);
    navigate(`/career/${career}`);
  };
  const arr = [];
  for (let index = 0; index < 100; index++) {
    arr.push(index);
  }
  const onArrayChange = (index: number, item: any) => {
    const temp = [...data];
    temp.splice(index, 1);
    temp.push(item);
    setData(temp);
  };
  const onChange = (value: any) => {
    page = 1;

    if (isInspiration) {
      setInspirations([]);
      let payload = { search: value, page: 1, take: 20 };
      disptach(getInspiration(payload));
    } else {
      let payload = {};
      setCareer([]);
      if (loginUser) {
        payload = { title: value, page: 1, take: 20, user_id: loginUser?.id };
      } else {
        payload = { title: value, page: 1, take: 20 };
      }
      disptach(getCareer(payload));
    }
  };

  const {
    career: careerData = [],
    loader = false,
    totalPage = 0,
  } = useSelector((store: any) => store.career);

  const {
    inspiration = [],
    loader: inspirationsLoader = false,
    totalPage: inspirationPage = 0,
  } = useSelector((store: any) => store.inspiration);

  if (isInspiration) {
    window.onscroll = debounce((e) => {
      if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop -
          651 <=
          document.documentElement.clientHeight &&
        totalPage >= inspirationPage
      ) {
        curretnInspirationPage++;
        let payload = {};
        if (loginUser) {
          payload = {
            page: curretnInspirationPage,
            take: 20,
            user_id: loginUser?.id,
          };
        } else {
          payload = { page: curretnInspirationPage, take: 20 };
        }
        disptach(getInspiration(payload));
      }
    }, 1000);
  } else {
    window.onscroll = debounce((e) => {
      if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop -
          651 <=
          document.documentElement.clientHeight &&
        totalPage >= page
      ) {
        page++;
        let payload = {};
        if (loginUser) {
          payload = { page, take: 20, user_id: loginUser?.id };
        } else {
          payload = { page, take: 20 };
        }
        disptach(getCareer(payload));
      }
    }, 1000);
  }

  const onFilterChange = (params: object) => {
    setCareer([]);
    page = 1;
    disptach(getCareer({ ...params, page: 1, take: 20 }));
  };

  useEffect(() => {
    setCareer([...career, ...careerData]);
  }, [careerData]);
  useEffect(() => {
    setInspirations([...inspirations, ...inspiration]);
  }, [inspiration]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span onClick={() => onFilterChange({ sort_by: "ASC" })}>
          Title ACS
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span onClick={() => onFilterChange({ sort_by: "DESC" })}>
          Title DESC
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <span onClick={() => onFilterChange({ years_needed: "YES" })}>
          Year Needed
        </span>
      ),
    },
    {
      key: "4",
      label: (
        <span onClick={() => onFilterChange({ admission_rank: "YES" })}>
          Admission Rank
        </span>
      ),
    },
  ];
  const inspirationHandler = () => {
    setIsInspiration(true);
    disptach(getInspiration({ page, take: 20 }));
  };
  const oracleHandler = () => {
    if (loginUser) {
      setIsOracle(true);
    } else {
      setSignUpToggle(true);
    }
  };
  useEffect(() => {
    if (id) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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
  const t6 = (
    <span>
      Tailor Your Vision! <br /> Click 'Sort' to arrange careers according to
      your preferences. Organize by ATAR score, Annual Salary, Cost of course,
      study duration, and more. Choose your sorting criteria and unlock a
      customized view of careers aligned with your goals.
    </span>
  );

  return (
    <Container className="content-card mb-3 px-0 " fluid>
      <Row className="px-md-3 px-0 m-0">
        <Col
          md={12}
          className="d-flex align-items-center  flex-wrap justify-content-end justify-content-md-between my-3"
        >
          <div className="button-wrapper d-flex align-items-center flex-wrap flex-md-row ">
            <div className="d-md-block d-flex justify-content-between ">
              <Button
                className={`btn btn-primary me-2 custom ${
                  isInspiration ? "" : "active"
                }`}
                onClick={() => setIsInspiration(false)}
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
              <div className="d-md-none d-block">
                {/* <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  className="my-0 my-md-0 d-md-none d-block"
                > */}
                <Button
                  className="btn-secondary me-2 d-md-none d-block sort-by"
                  onClick={oracleHandler}
                >
                  Oracles
                </Button>
                {/* </Dropdown> */}
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  className="my-0 my-md-0 d-md-none d-block"
                >
                  <Button className="btn-secondary d-md-none d-block sort-by">
                    Sort By
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
          <CustomTooltip title={t4}>
            <Input
              placeholder="Search or filter"
              prefix={<AiFillPlusCircle size={25} color="#ff4742" />}
              className="search-input"
              onPressEnter={(e: any) => onChange(e.target.value)}
            />
          </CustomTooltip>
          <div className="d-none d-md-block">
            {/* <Dropdown
              menu={{dummy}}
              placement="bottomRight"
              className="my-3 my-md-0 "
            > */}

            <Button
              className="btn-secondary me-2 d-md-none d-block sort-by"
              onClick={oracleHandler}
            >
              <CustomTooltip title={t5}>Oracle </CustomTooltip>
            </Button>
            {/* </Dropdown> */}
            {/* <Dropdown
              menu={{ items }}
              placement="bottomRight"
              className="my-3 my-md-0 "
            > */}
            <Button
              className="btn-secondary sort-by"
              // onClick={() => setIsSort(!isSort)}
            >
              Chat
            </Button>
            {/* </Dropdown> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div
            className={`filter-section d-flex align-items-center justify-content-around active`}
          >
            <CustomTooltip title={t6}>
              <h5 className="mx-3 mb-0" style={{ width: "max-content" }}>
                Sort By
              </h5>
            </CustomTooltip>
            <Radio.Group className="w-100 d-flex justify-content-around">
              <Radio.Button
                className="radio-button "
                onClick={() => onFilterChange({ sort_by: "ASC" })}
                value={0}
              >
                Title ACS
              </Radio.Button>
              <Radio.Button
                className="radio-button "
                value={1}
                onClick={() => onFilterChange({ sort_by: "DESC" })}
              >
                Title DESC
              </Radio.Button>
              <Radio.Button
                value={2}
                className="radio-button "
                onClick={() => onFilterChange({ years_needed: "YES" })}
              >
                Years Needed
              </Radio.Button>
              <Radio.Button
                value={3}
                className="radio-button "
                onClick={() => onFilterChange({ admission_rank: "YES" })}
              >
                Admission Rank
              </Radio.Button>
            </Radio.Group>
          </div>
        </Col>
      </Row>
      <ul className="grid ps-0 pb-5 justify-content-center">
        {!isInspiration
          ? career?.map((item: any, index: any) => (
              <li className="item" key={item?.id + Math.random()}>
                <ContentInnerCards
                  item={item}
                  index={index}
                  image={item?.attributes?.image}
                  key={item?.id + 100}
                  loginUser={loginUser}
                  setSignUpToggle={setSignUpToggle}
                />
              </li>
            ))
          : inspirations?.map((item: any, index: any) => (
              <li className="item" key={item?.id}>
                <InspirationInnerCard
                  item={item}
                  index={index}
                  image={item?.image}
                  onArrayChange={onArrayChange}
                  key={item?.id}
                />
              </li>
            ))}
        {(loader || inspirationsLoader) &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (index) => (
              <li className="item mb-4" key={index + Math.random()}>
                <Skeleton.Node active={loader || inspirationsLoader}>
                  <DotChartOutlined
                    style={{ fontSize: 100, color: "#bfbfbf" }}
                  />
                </Skeleton.Node>
              </li>
            )
          )}
      </ul>
      <Modal
        open={isVisible}
        footer={false}
        onCancel={() => navigate(`/`)}
        width={"80%"}
        zIndex={9}
      >
        <ContentTabs />
      </Modal>
      <Modal
        open={isOracle}
        footer={false}
        onCancel={() => setIsOracle(false)}
        width={"90%"}
        zIndex={9}
      >
        <HighChartTree isOracle={isOracle} onCareerClick={onCareerClick} />
      </Modal>
    </Container>
  );
};
export default memo(ContentCards);
