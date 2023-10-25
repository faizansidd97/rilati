import { memo, useEffect, useState } from "react";
import InspirationInnerCard from "../InspirationInnerCard";
import { useDispatch, useSelector } from "react-redux";
import { Radio, Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import { getInspiration } from "src/redux/actions/inspirationsAction";
import { debounce } from "lodash";
import CustomTooltip from "../CustomTooltip";

let curretnInspirationPage = 1;
const InspirationListing = ({ search, loginUser }: any) => {
  const disptach = useDispatch<any>();
  const [careerParams, setCareerParams] = useState({});
  const [inspirations, setInspirations]: any = useState([]);

  const {
    inspiration = [],
    loader: inspirationsLoader = false,
    totalPage: inspirationPage = 0,
  } = useSelector((store: any) => store.inspiration);
  useEffect(() => {
    setInspirations([]);
    let payload = { search: search, page: 1, take: 50 };
    disptach(getInspiration(payload));
  }, [search]);
  useEffect(() => {
    setInspirations([...inspirations, ...inspiration]);
  }, [inspiration]);

  window.onscroll = debounce((e) => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        500 <=
        document.documentElement.clientHeight &&
      inspirationPage >= inspirationPage
    ) {
      curretnInspirationPage++;
      let payload = {};
      if (loginUser) {
        payload = {
          page: curretnInspirationPage,
          take: 50,
          user_id: loginUser?.id,
        };
      } else {
        payload = { page: curretnInspirationPage, take: 50 };
      }
      disptach(getInspiration({ ...payload, ...careerParams }));
    }
  }, 300);

  const onFilterChange = (params: object) => {
    setInspirations([]);
    curretnInspirationPage = 1;
    setCareerParams(params);
    disptach(getInspiration({ ...params, page: 1, take: 50 }));
  };

  return (
    <div className="career-cards">
      <div
        className={`mb-3 mb-md-0 filter-section d-flex align-items-center flex-md-row flex-column justify-content-around active`}
      >
        <CustomTooltip title={""}>
          <h5
            className="mx-3 mb-md-0 mb-3 text-center"
            style={{ width: "max-content" }}
          >
            Sort By
          </h5>
        </CustomTooltip>
        <Radio.Group className="w-100 d-flex justify-content-start gap-3 flex-wrap">
          <Radio.Button
            className="radio-button "
            onClick={() => onFilterChange({ sort_by: "NAME", sort: "DESC" })}
            value={1}
          >
            Name DESC
          </Radio.Button>
          <Radio.Button
            value={5}
            className="radio-button "
            onClick={() => onFilterChange({ sort_by: "NAME", sort: "ASC" })}
          >
            Name ASC
          </Radio.Button>
          <Radio.Button
            value={6}
            className="radio-button "
            onClick={() =>
              onFilterChange({ sort_by: "OCCUPATION", sort: "DESC" })
            }
          >
            Occupation DESC
          </Radio.Button>
          <Radio.Button
            value={4}
            className="radio-button "
            onClick={() =>
              onFilterChange({ sort_by: "OCCUPATION", sort: "ASC" })
            }
          >
            Occupation ASC
          </Radio.Button>
        </Radio.Group>
      </div>

      <ul className="grid ps-0 pb-5 justify-content-center">
        {inspirations?.map((item: any, index: any) => (
          <li className="item" key={item?.id + Math.random()}>
            <InspirationInnerCard
              key={item?.id + 100}
              index={index}
              image={item?.image}
              item={item}
            />
          </li>
        ))}
        {inspirationsLoader &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (index) => (
              <li className="item mb-4" key={index + Math.random()}>
                <Skeleton.Node active={inspirationsLoader}>
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

export default memo(InspirationListing);
