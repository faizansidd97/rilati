import React from "react";
import { Button, Modal, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { ExclamationCircleFilled } from "@ant-design/icons";
import GridView from "src/components/GridView/GridView";

const data = [
  { name: "Alpha University", location: "USA", study: "Computer Science" },
  { name: "Alpha University", location: "USA", study: "Computer Science" },
  { name: "Alpha University", location: "USA", study: "Computer Science" },
  { name: "Alpha University", location: "USA", study: "Computer Science" },
  { name: "Alpha University", location: "USA", study: "Computer Science" },
  { name: "Alpha University", location: "USA", study: "Computer Science" },
];

function Dashboard() {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }
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
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Study",
      dataIndex: "study",
    },
    {
      title: "Action",
      dataIndex: "",
      render(value, record) {
        return (
          <Space className="">
            <Button className="btn-next">Edit</Button>
            <Button onClick={showPromiseConfirm} className="btn-danger">
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <GridView data={data} columns={columns} />
    </div>
  );
}

export default Dashboard;
