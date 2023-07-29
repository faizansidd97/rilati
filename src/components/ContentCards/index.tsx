import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DotChartOutlined } from "@ant-design/icons";
import { AiFillPlusCircle } from "react-icons/ai";
import { Dropdown, Input, MenuProps, Skeleton } from "antd";
import { contentData } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { getCareer } from "src/redux/actions/careerAction";
import ContentInnerCards from "../ContentInnerCard";
import debounce from "lodash/debounce";
import "./ContentCards.scss";

let page = 1;
const ContentCards = () => {
  const [data, setData] = useState([...contentData]);
  const [career, setCareer]: any = useState([]);

  const disptach = useDispatch<any>();

  useEffect(() => {
    disptach(getCareer({ page, take: 20 }));
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
    disptach(getCareer({ title: value, page: 1, take: 20 }));
  };

  const {
    career: careerData = [],
    loader = false,
    totalPage = 0,
  } = useSelector((store: any) => store.career);

  window.onscroll = debounce((e) => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop ===
        document.documentElement.clientHeight &&
      totalPage >= page
    ) {
      page++;
      disptach(getCareer({ page, take: 20 }));
    }
  }, 1000);

  const onFilterChange = (params: object) => {
    setCareer([]);
    page = 1;
    disptach(getCareer({ ...params, page: 1, take: 200 }));
  };

  useEffect(() => {
    setCareer([...career, ...careerData]);
  }, [careerData]);

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
  return (
    <Container className="content-card mb-3 px-0 " fluid>
      <Row className="px-md-3 px-0 m-0">
        <Col
          md={12}
          className="d-flex align-items-center  flex-wrap justify-content-end justify-content-md-between my-3"
        >
          <div className="button-wrapper d-flex align-items-center flex-wrap flex-md-row ">
            <div className="d-md-block d-flex justify-content-between ">
              <Button className="btn btn-primary me-2 custom">Filters</Button>
              <div className="d-md-none d-block">
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
            <Input
              placeholder="Search or filter"
              prefix={<AiFillPlusCircle size={25} color="#ff4742" />}
              className="search-input"
              onPressEnter={(e: any) => onChange(e.target.value)}
            />
          </div>
          <div className="d-none d-md-block">
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
        {career.map((item: any, index: any) => (
          // <Col
          //   key={index}
          //   className="mb-4 card-col d-flex flex-wrap justify-content-lg-start justify-content-center justify-content-md-center"
          // >
          <li className="item">
            <ContentInnerCards
              item={item}
              index={index}
              image={item?.attributes?.image}
              onArrayChange={onArrayChange}
            />
          </li>
          // </Col>
        ))}
        {loader &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (index) => (
              <li className="item mb-4" key={index}>
                <Skeleton.Node active={loader}>
                  <DotChartOutlined
                    style={{ fontSize: 100, color: "#bfbfbf" }}
                  />
                </Skeleton.Node>
              </li>
            )
          )}
      </ul>
    </Container>
  );
};
export default ContentCards;
