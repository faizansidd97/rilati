import { useState, useEffect, memo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DotChartOutlined } from "@ant-design/icons";
import { AiFillPlusCircle } from "react-icons/ai";
import { Dropdown, Input, MenuProps, Modal, Skeleton } from "antd";
import { contentData } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { getCareer } from "src/redux/actions/careerAction";
import ContentInnerCards from "../ContentInnerCard";
import Environment from "../../network/baseUrl";
import { getInspiration } from "src/redux/actions/inspirationsAction";
import debounce from "lodash/debounce";
import "./ContentCards.scss";
import InspirationInnerCard from "../InspirationInnerCard";
import ContentTabs from "../ContentTabs";
import { useNavigate, useParams } from "react-router-dom";

let page = 1;
let curretnInspirationPage = 1;
const ContentCards = () => {
  const [data, setData] = useState([...contentData]);
  const [career, setCareer]: any = useState([]);
  const [inspirations, setInspirations]: any = useState([]);
  const [isInspiration, setIsInspiration] = useState(false);
  const { id } = useParams();
  const disptach = useDispatch<any>();
  const [isVisible, setIsVisible] = useState(false);
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
    setCareer([]);
    let payload = {};
    if (loginUser) {
      payload = { title: value, page: 1, take: 20, user_id: loginUser?.id };
    } else {
      payload = { title: value, page: 1, take: 20 };
    }
    disptach(getCareer(payload));
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

  useEffect(() => {
    if (id) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [id]);
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
                Career
              </Button>
              <Button
                className={`btn btn-primary me-2 custom ${
                  isInspiration ? "active" : ""
                }`}
                onClick={inspirationHandler}
              >
                Inspirations
              </Button>
              <div className="d-md-none d-block">
                {/* <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  className="my-0 my-md-0 d-md-none d-block"
                > */}
                <Button className="btn-secondary me-2 d-md-none d-block sort-by">
                  Oracle{" "}
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
          <Input
            placeholder="Search or filter"
            prefix={<AiFillPlusCircle size={25} color="#ff4742" />}
            className="search-input"
            onPressEnter={(e: any) => onChange(e.target.value)}
          />
          <div className="d-none d-md-block">
            {/* <Dropdown
              menu={{dummy}}
              placement="bottomRight"
              className="my-3 my-md-0 "
            > */}
            <Button className="btn-secondary me-2 d-md-none d-block sort-by">
              Oracle{" "}
            </Button>
            {/* </Dropdown> */}
            <Dropdown
              menu={{ items }}
              placement="bottomRight"
              className="my-3 my-md-0 "
            >
              <Button className="btn-secondary sort-by">Sort By</Button>
            </Dropdown>
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
                />
              </li>
            ))
          : inspirations?.map((item: any, index: any) =>
              item?.name !== null && item?.image !== null ? (
                <li className="item" key={item?.id}>
                  <InspirationInnerCard
                    item={item}
                    index={index}
                    image={item?.image}
                    onArrayChange={onArrayChange}
                    key={item?.id}
                  />
                </li>
              ) : null
            )}
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
        zIndex={9999}
      >
        <ContentTabs />
      </Modal>
    </Container>
  );
};
export default memo(ContentCards);
