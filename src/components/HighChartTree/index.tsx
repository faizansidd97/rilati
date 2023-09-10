import { memo, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsTreeMap from "highcharts/modules/treemap";
import HighchartsTreeGraph from "highcharts/modules/treegraph";
import "./HighChartTree.scss";
import { getGraph } from "src/redux/actions/graphActions";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

const HighChartTree = ({ isOracle, onCareerClick }: any) => {
  const dispatch = useDispatch();
  try {
    HighchartsTreeMap(Highcharts);
    HighchartsTreeGraph(Highcharts);
  } catch (e) {}

  useEffect(() => {
    dispatch(getGraph());
  }, [dispatch, isOracle]);
  const { graphData = [], mailLoader = false } = useSelector(
    (store: any) => store.graph
  );

  const hightOption = {
    title: {
      text: "Careers with matching your profile",
    },
    type: "tree",

    // colors: [
    //   "#89A54E",
    //   "#AA4643",
    //   "#4572A7",
    //   "#80699B",
    //   "#3D96AE",
    //   "#DB843D",
    //   "#92A8CD",
    //   "#A47D7C",
    //   "#B5CA92",
    // ],
    series: [
      {
        type: "treegraph",
        data: graphData?.length > 0 ? graphData : [],
        tooltip: {
          pointFormat: "{point.name}",
        },
        marker: {
          symbol: "square",
          width: "25%",
        },
        borderRadius: 10,
        dataLabels: {
          pointFormat: "{point.name}",
          style: {
            whiteSpace: "nowrap",
          },
        },
        levels: [
          {
            level: 1,
            levelIsConstant: false,
            color: "#000",
          },
          {
            level: 2,
            colorByPoint: true,
          },
          {
            level: 3,
            color: "#000",
            colorVariation: {
              key: "brightness",
              to: 0.5,
            },
          },
          {
            level: 4,
            color: "#000",
            colorVariation: {
              key: "brightness",
              to: 0.5,
            },
          },
        ],
        point: {
          events: {
            click: function (e: any) {
              // Open the URL in a new tab/window when a node is clicked
              console.log("e", e);

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
          maxWidth: "800px",
          minWidth: "360px",
          margin: "0 auto",
        }}
        id="chart-container"
      >
        <HighchartsReact
          containerProps={{ style: { height: "1200px" } }}
          highcharts={Highcharts}
          options={hightOption}
        />
      </div>
    </Spin>
  );
};

export default HighChartTree;
