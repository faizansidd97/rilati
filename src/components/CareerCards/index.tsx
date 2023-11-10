import { memo, useEffect, useState } from "react";
import ContentInnerCards from "../ContentInnerCard";
import { Radio, Skeleton } from "antd";
import { getCareer } from "src/redux/actions/careerAction";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";
import { DotChartOutlined } from "@ant-design/icons";
import CustomTooltip from "../CustomTooltip";
import Environment from "../../network/baseUrl";

let page = 1;
const CareerCards = ({ setSignUpToggle, search }: any) => {
  const disptach = useDispatch<any>();
  const [career, setCareer]: any = useState([]);
  const [careerParams, setCareerParams] = useState({});

  const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
  const loginUser = getUser ? JSON.parse(getUser) : null;
  // useEffect(() => {
  //   if (loginUser) {
  //     disptach(getCareer({ page, take: 20, user_id: loginUser?.id }));
  //   } else {
  //     disptach(getCareer({ page, take: 20 }));
  //   }
  // }, [disptach]);
  const onFilterChange = (params: object) => {
    setCareer([]);
    page = 1;
    setCareerParams(params);
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
  console.log("I'm run");
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

        <Radio.Group className="w-100 d-flex justify-content-start  flex-wrap">
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
            onClick={() => onFilterChange({ atar: "YES" })}
            value={1}
          >
            ATAR
          </Radio.Button>
          {/* <Radio.Button
            className="radio-button "
            value={2}
            onClick={() => onFilterChange({ course_cost: "YES" })}
          >
            Course Cost
          </Radio.Button> */}
          {/* <Radio.Button
            value={3}
            className="radio-button "
            onClick={() => onFilterChange({ status_in_company: "YES" })}
          >
            Status in Company
          </Radio.Button> */}
          {/* <Radio.Button
            value={4}
            className="radio-button "
            onClick={() => onFilterChange({ scope_of_skill: "YES" })}
          >
            Scope of Skill
          </Radio.Button> */}
          <Radio.Button
            value={5}
            className="radio-button mx-2"
            onClick={() => onFilterChange({ job_help_environment: "YES" })}
          >
            Job Help The Environment
          </Radio.Button>
          <Radio.Button
            value={6}
            className="radio-button mx-2"
            onClick={() => onFilterChange({ job_help_people: "YES" })}
          >
            Job Help The People
          </Radio.Button>
          {/* <Radio.Button
            value={6}
            className="radio-button "
            onClick={() => onFilterChange({ job_help_people: "YES" })}
          >
            Job Help The People
          </Radio.Button> */}
          {/* <Radio.Button
            value={7}
            className="radio-button "
            onClick={() => onFilterChange({ work_life_balance: "YES" })}
          >
            Work Life Balance
          </Radio.Button> */}
          {/* <Radio.Button
            value={8}
            className="radio-button "
            onClick={() => onFilterChange({ potential: "YES" })}
          >
            Potential
          </Radio.Button> */}
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
