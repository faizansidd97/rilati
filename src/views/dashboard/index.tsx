import React, { useEffect } from "react";
import { Button, Modal, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { ExclamationCircleFilled } from "@ant-design/icons";
import GridView from "src/components/GridView/GridView";
import { useDispatch, useSelector } from "react-redux";
import { getCareer } from "src/redux/actions/careerAction";
import { stringLimt } from "src/helper/helper";
import { Link } from "react-router-dom";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function Dashboard() {
  const disptch = useDispatch();
  useEffect(() => {
    disptch(getCareer());
  }, []);
  const { confirm } = Modal;
  const showPromiseConfirm = () => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      okType: "danger",
      okText: "Delete",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.attributes?.title}>
          {stringLimt(res?.attributes?.title, 20)}
        </span>
      ),
    },
    {
      title: "Category",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.attributes?.career_category}>
          {stringLimt(JSON.parse(res?.attributes?.career_category || ""), 20)}
        </span>
      ),
    },
    {
      title: "Description",
      // dataIndex: "location",
      render: (res: any) => (
        <span title={res?.attributes?.job_description}>
          {stringLimt(res?.attributes?.job_description, 50)}
        </span>
      ),
    },
    {
      title: "Average Salary",
      // dataIndex: "study",
      render: (res: any) => (
        <span title={res?.attributes?.average_salary}>
          {stringLimt(res?.attributes?.average_salary, 22)}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      render(value, record) {
        return (
          <Space className="">
            <Link to={`career/${value?.id}`} className="btn-next">
              Edit
            </Link>
            <Button onClick={showPromiseConfirm} className="btn-danger">
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  const { career = [], loader = false } = useSelector(
    (store: any) => store.career
  );
  console.log(career);

  return (
    <div className="overflow-auto">
      <GridView data={career} columns={columns} loading={loader} />
    </div>
  );
}

export default Dashboard;
