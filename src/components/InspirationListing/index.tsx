import { memo, useEffect, useState } from "react";
import InspirationInnerCard from "../InspirationInnerCard";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import { getInspiration } from "src/redux/actions/inspirationsAction";
import { debounce } from "lodash";

let curretnInspirationPage = 1;
const InspirationListing = ({ search, loginUser }: any) => {
  const disptach = useDispatch<any>();
  const [inspirations, setInspirations]: any = useState([]);

  const {
    inspiration = [],
    loader: inspirationsLoader = false,
    totalPage: inspirationPage = 0,
  } = useSelector((store: any) => store.inspiration);
  useEffect(() => {
    setInspirations([]);
    let payload = { search: search, page: 1, take: 20 };
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
          take: 20,
          user_id: loginUser?.id,
        };
      } else {
        payload = { page: curretnInspirationPage, take: 20 };
      }
      disptach(getInspiration(payload));
    }
  }, 300);
  return (
    <div className="career-cards">
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
