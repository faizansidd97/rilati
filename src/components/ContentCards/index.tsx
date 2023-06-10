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
import { Link } from "react-router-dom";
import "./ContentCards.scss";

let page = 1;
const ContentCards = () => {
  const [data, setData] = useState([...contentData]);

  const disptach = useDispatch<any>();

  useEffect(() => {
    disptach(getCareer(page, 20));
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
    disptach(getCareer(1, 100, value));
  };

  const {
    career = [],
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
      disptach(getCareer(page));
    }
  }, 1000);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="#">
          ACS
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" to="#">
          DESC
        </Link>
      ),
    },
  ];
  return (
    <Container className="content-card mb-3 px-0 " fluid>
      <Row className="px-3">
        <Col
          md={12}
          className="d-flex align-items-center  flex-wrap justify-content-end justify-content-md-between my-3"
        >
          <div className="button-wrapper d-flex align-items-center flex-wrap flex-row ">
            <Button className="btn btn-primary custom">Filters</Button>
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
              <Button className="btn-secondary sort-by">Sory By</Button>
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
