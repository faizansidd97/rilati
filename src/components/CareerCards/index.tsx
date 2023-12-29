import { memo, useEffect, useState } from "react";
import ContentInnerCards from "../ContentInnerCard";
import { Radio, Skeleton } from "antd";
import { getCareer } from "src/redux/actions/careerAction";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";
import { DotChartOutlined } from "@ant-design/icons";
import CustomTooltip from "../CustomTooltip";
import Environment from "../../network/baseUrl";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

let page = 1;
const CareerCards = ({ setSignUpToggle, search }: any) => {
  const disptach = useDispatch<any>();
  const [career, setCareer]: any = useState([]);
  const [careerParams, setCareerParams] = useState({
    atar: "ASC",
    job_help_environment: "ASC",
    job_help_people: "ASC",
  });

  const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
  const loginUser = getUser ? JSON.parse(getUser) : null;

  console.log("careerParams", careerParams);

  const onFilterChange = (params: any) => {
    setCareer([]);
    page = 1;

    setCareerParams({ ...params });

    disptach(getCareer({ ...params, page: 1, take: 20 }));
  };

  const {
    career: careerData = [],
    loader = false,
    totalPage = 0,
  } = useSelector((store: any) => store.career);

  useEffect(() => {
    setCareer([...career, ...careerData]);
  }, [careerData]);

  useEffect(() => {
    setCareer([]);
    let payload = {};
    if (loginUser) {
      payload = { title: search, page: 1, take: 20, user_id: loginUser?.id };
    } else {
      payload = { title: search, page: 1, take: 20 };
    }
    disptach(getCareer(payload));
  }, [search]);

  window.onscroll = debounce((e) => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        500 <=
        document.documentElement.clientHeight &&
      totalPage >= page
    ) {
      page++;
      let payload = {};
      if (loginUser) {
        payload = { page, take: 20, user_id: loginUser?.id, ...careerParams };
      } else {
        payload = { page, take: 20, ...careerParams };
      }
      disptach(getCareer(payload));
    }
  }, 300);
  const t6 = (
    <span>
      Tailor Your Vision! <br /> Click 'Sort' to arrange careers according to
      your preferences. Organize by ATAR score, Annual Salary, Cost of course,
      study duration, and more. Choose your sorting criteria and unlock a
      customized view of careers aligned with your goals.
    </span>
  );
  return (
    <div className="career-cards">
      <div
        className={`mb-3 mb-md-0 filter-section d-flex align-items-center flex-md-row flex-column justify-content-around active`}
      >
        <CustomTooltip title={t6}>
          <h5
            className="mx-3 mb-md-0 mb-3 text-center"
            style={{ width: "max-content" }}
          >
            Sort By
          </h5>
        </CustomTooltip>

        <Radio.Group className="w-100 d-flex justify-content-start  flex-wrap gap-2">
          {loginUser && (
            <Radio.Button
              className="radio-button mx-2"
              onClick={() => {
                setCareer([]);
                disptach(getCareer({ page, take: 20, user_id: loginUser?.id }));
              }}
              value={0}
            >
              Favorite
            </Radio.Button>
          )}
          <Radio.Button
            className="radio-button mx-2"
            onClick={() =>
              onFilterChange({
                atar: careerParams?.atar === "ASC" ? "DESC" : "ASC",
              })
            }
            value={1}
          >
            ATAR
            {careerParams?.atar === "ASC" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </Radio.Button>
          <Radio.Button
            value={5}
            className="radio-button mx-2"
            onClick={() =>
              onFilterChange({
                job_help_environment:
                  careerParams?.job_help_environment === "ASC" ? "DESC" : "ASC",
              })
            }
          >
            Jobs That Help Environment
            {careerParams?.job_help_environment === "ASC" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </Radio.Button>
          <Radio.Button
            value={6}
            className="radio-button mx-2"
            onClick={() =>
              onFilterChange({
                job_help_people:
                  careerParams?.job_help_people === "ASC" ? "DESC" : "ASC",
              })
            }
          >
            Jobs That Help People
            {careerParams?.job_help_people === "ASC" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </Radio.Button>
        </Radio.Group>
      </div>
      <ul className="grid ps-0 pb-5 justify-content-center">
        {career?.map((item: any, index: any) => (
          <li className="item" key={item?.id + Math.random()}>
            <ContentInnerCards
              key={item?.id + Math.random()}
              index={index}
              setSignUpToggle={setSignUpToggle}
              item={item}
            />
          </li>
        ))}
        {loader &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (index) => (
              <li className="item mb-4" key={index + Math.random()}>
                <Skeleton.Node active={loader}>
                  <DotChartOutlined
                    style={{ fontSize: 100, color: "#bfbfbf" }}
                  />
                </Skeleton.Node>
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default memo(CareerCards);
