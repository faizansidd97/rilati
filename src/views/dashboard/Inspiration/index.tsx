import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { ExclamationCircleFilled } from "@ant-design/icons";
import GridView from "src/components/GridView/GridView";
import { useDispatch, useSelector } from "react-redux";
import "./Inspiration.scss";

import {
  deleteInspiration,
  getInspiration,
} from "src/redux/actions/inspirationsAction";
import { Link, useNavigate } from "react-router-dom";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function Inspiration() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const disptach = useDispatch<any>();

  useEffect(() => {
    disptach(getInspiration({ page: 1, take: 40 }));
  }, [disptach]);

  const { confirm } = Modal;
  const showPromiseConfirm = (id: any) => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "When clicked the OK button, this item will be delete",
      okType: "danger",
      okText: "Delete",
      onOk() {
        return new Promise((resolve, reject) => {
          disptach(deleteInspiration(id))
            .then((res: any) => {
              resolve(res);
              disptach(getInspiration({ page: 1, take: 40 }));
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
      title: "Name",
      // dataIndex: "name",
      render: (res: any) => <span title={res?.name}>{res?.name}</span>,
    },

    {
      title: "Occupation",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.career_path}>{res?.occupation}</span>
      ),
    },
    {
      title: "Description",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.description}>{res?.description}</span>
      ),
    },
    {
      title: "Education",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.education}>{res?.education}</span>
      ),
    },
    {
      title: "Career Path",
      // dataIndex: "location",
      render: (res: any) => (
        <span title={res?.career_path}>{res?.career_path}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      render(value, record) {
        return (
          <Space className="">
            <Button
              // to={`/dashboard/inspiration/${value?.id}`}
              onClick={() =>
                navigate(`/dashboard/inspiration/${value?.id}`, {
                  state: value,
                })
              }
              className="btn-next"
            >
              Edit
            </Button>
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
    disptach(getInspiration({ name: value }));
  };

  const {
    inspiration = [],
    loader: inspirationsLoader = false,
    metaData = {},
  } = useSelector((store: any) => store.inspiration);

  const callback = (params: any) => {
    disptach(getInspiration(params));
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
        data={inspiration}
        columns={columns}
        loading={inspirationsLoader}
        listingCallback={callback}
        pagination={{
          total: metaData?.totalCount,
          currentPage: metaData?.currentPage,
        }}
      />
    </div>
  );
}

export default Inspiration;
