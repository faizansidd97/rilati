import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { ExclamationCircleFilled } from "@ant-design/icons";
import GridView from "src/components/GridView/GridView";
import { useDispatch, useSelector } from "react-redux";
// import { stringLimt } from "src/helper/helper";
import { Link } from "react-router-dom";
import "./University.scss";
// import { deleteUni, getUser } from "src/redux/actions/universityAction";
import { deleteUsers, getUsers } from "src/redux/actions/userActions";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function Users() {
  const [search, setSearch] = useState("");

  const disptch = useDispatch<any>();

  useEffect(() => {
    disptch(getUsers());
  }, [disptch]);

  const { confirm } = Modal;
  const showPromiseConfirm = (id: any) => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      okType: "danger",
      okText: "Delete",
      onOk() {
        return new Promise((resolve, reject) => {
          disptch(deleteUsers(id))
            .then((res: any) => {
              resolve(res);
              disptch(getUsers());
            })
            .catch((err: any) => {
              reject(err);
            });
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Name/ UserName",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.attributes?.name}>{res?.attributes?.name}</span>
      ),
    },
    {
      title: "Name",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.attributes?.name}>{res?.attributes?.name}</span>
      ),
    },
    {
      title: "Email",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.attributes?.email}>{res?.attributes?.email}</span>
      ),
    },
    {
      title: "Link",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.attributes?.details?.phone}>
          <a href={`tel:${res?.attributes?.details?.phone}`}>
            {res?.attributes?.details?.phone}
          </a>
        </span>
      ),
    },
    {
      title: "State",
      // dataIndex: "location",
      render: (res: any) => (
        <span title={res?.attributes?.state}>{res?.attributes?.state}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      render(value, record) {
        return (
          <Space className="">
            {/* <Link
              to={`/dashboard/university/${value?.id}`}
              className="btn-next"
            >
              Edit
            </Link> */}
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

  const onChange = (value: any) => {
    disptch(getUsers({ name: value }));
  };

  const {
    users = [],
    userLoader = false,
    userMeta = {},
  } = useSelector((store: any) => store.subject);

  const callback = (params: any) => {
    disptch(getUsers(params));
  };

  return (
    <div className="overflow-auto">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <Input onChange={(e) => setSearch(e.target.value)} />
          <Button className="mx-3" onClick={() => onChange(search)}>
            Search
          </Button>
        </div>
      </div>
      <GridView
        data={users}
        columns={columns}
        loading={userLoader}
        listingCallback={callback}
        pagination={{
          total: userMeta?.totalCount,
          currentPage: userMeta?.currentPage,
        }}
      />
    </div>
  );
}

export default Users;