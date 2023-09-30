import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { getGraph } from "src/redux/actions/graphActions";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsTreeMap from "highcharts/modules/treemap";
import HighchartsTreeGraph from "highcharts/modules/treegraph";
import "./HighChartTree.scss";
import {
  graphData1,
  graphTemp,
  hightOptionConstant,
} from "src/constant/Tooltip";

const HighChartTree = ({ isOracle, onCareerClick }: any) => {
  const [graph, setGraph] = useState([]);
  const dispatch = useDispatch();
  try {
    HighchartsTreeMap(Highcharts);
    HighchartsTreeGraph(Highcharts);
  } catch (e) {}
  console.log("isOracle", graph);
  let isMounted = true;

  useEffect(() => {
    if (isMounted) {
      dispatch(getGraph());
    }
    return () => {
      isMounted = false;
    };
  }, [isMounted]);
  const { graphData = [], mailLoader = false } = useSelector(
    (store: any) => store.graph
  );

  useEffect(() => {
    setGraph(graphData);
  }, [graphData]);

  const hightOption = {
    title: {
      text: "Careers with matching your profile",
    },
    type: "tree",
    series: [
      {
        type: "treegraph",
        data: graphData?.length > 0 ? graphData : [],
        tooltip: {
          pointFormat: "{point.name}",
        },
        marker: {
          symbol: "square",
          width: "20%",
        },
        borderRadius: 10,
        dataLabels: {
          pointFormat: "{point.name}",
          style: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
        },
        levels: [
          {
            level: 1,
            levelIsConstant: true,
          },
          {
            level: 2,
            colorByPoint: true,
          },
          {
            level: 3,

            colorVariation: {
              key: "brightness",
              to: -0.5,
            },
          },
          {
            level: 4,
            colorVariation: {
              key: "brightness",
              to: 0.5,
            },
          },
          {
            level: 5,
            colorVariation: {
              key: "brightness",
              to: 0.5,
            },
          },
        ],
        point: {
          events: {
            click: function (e: any) {
              if (e?.point?.id) {
                const isCareer = e?.point?.id?.split("-")[0];
                if (isCareer === "career") {
                  onCareerClick(e?.point?.id);
                }
              }
            },
          },
        },
      },
    ],
  };

  return (
    <Spin spinning={mailLoader}>
      <div
        className="hightchart-div"
        style={{
          margin: "0 auto",
          maxWidth: "90%",
        }}
        id="chart-container"
      >
        <HighchartsReact
          containerProps={{ style: { height: "1200px", width: "100%" } }}
          highcharts={Highcharts}
          options={hightOption}
        />
      </div>
    </Spin>
  );
};

export default HighChartTree;
