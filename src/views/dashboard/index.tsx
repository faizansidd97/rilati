import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { ExclamationCircleFilled } from "@ant-design/icons";
import GridView from "src/components/GridView/GridView";
import { useDispatch, useSelector } from "react-redux";
import { deleteCareer, getCareer } from "src/redux/actions/careerAction";
import { stringLimt } from "src/helper/helper";
import { Link } from "react-router-dom";
import "./dashboard.scss";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function Dashboard() {
  const [search, setSearch] = useState("");
  const disptch = useDispatch<any>();
  useEffect(() => {
    disptch(getCareer());
  }, []);
  const { confirm } = Modal;
  const showPromiseConfirm = (id: any) => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "When clicked the OK button, the selected item will be delete!",
      okType: "danger",
      okText: "Delete",
      onOk() {
        return new Promise((resolve, reject) => {
          disptch(deleteCareer(id))
            .then((res: any) => {
              resolve(res);
              disptch(getCareer());
            })
            .catch((err: any) => {
              reject(err);
            });
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };
  const onChange = (value: any) => {
    disptch(getCareer(1, 10, value));
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Career Number",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.attributes?.career_number}>
          {stringLimt(res?.attributes?.career_number, 20)}
        </span>
      ),
    },
    {
      title: "Category",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.attributes?.title}>
          {stringLimt(res?.attributes?.title, 20)}
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
            <Button
              onClick={() => showPromiseConfirm(value?.id)}
              className="btn-danger"
            >
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

  return (
    <div className="overflow-auto">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <Input onChange={(e) => setSearch(e.target.value)} />
          <Button className="mx-3" onClick={() => onChange(search)}>
            Search
          </Button>
        </div>
        <Link className="btn btn-primary" to={"/dashboard/career/new"}>
          Add new
        </Link>
      </div>
      <GridView data={career} columns={columns} loading={loader} />
    </div>
  );
}

export default Dashboard;
