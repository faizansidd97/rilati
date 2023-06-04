import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Input, Modal, Select, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { ExclamationCircleFilled } from "@ant-design/icons";
import GridView from "src/components/GridView/GridView";
import { useDispatch, useSelector } from "react-redux";
import { stringLimt } from "src/helper/helper";
import { Link } from "react-router-dom";
import "./Category.scss";
import moment from "moment";
import {
  deleteCategory,
  getCategory,
  postCategory,
  updateCategory,
} from "src/redux/actions/categoryAction";
import { useForm } from "antd/es/form/Form";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function Category() {
  const [edit, setEdit]: any = useState(null);
  const [search, setSearch]: any = useState("");
  const [type, setType]: any = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const disptch = useDispatch<any>();
  useEffect(() => {
    disptch(getCategory());
  }, []);

  const [form] = useForm();
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
          disptch(deleteCategory(id))
            .then((res: any) => {
              disptch(getCategory());
              resolve(res);
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
      title: "Id",
      render: (res: any) => (
        <span title={res?.id}>{stringLimt(res?.id, 20)}</span>
      ),
    },
    {
      title: "Name",
      render: (res: any) => (
        <span title={res?.attributes?.name}>
          {stringLimt(res?.attributes?.name, 20)}
        </span>
      ),
    },
    {
      title: "Type",
      render: (res: any) => (
        <span title={res?.attributes?.type}>
          {stringLimt(res?.attributes?.type, 22)}
        </span>
      ),
    },
    {
      title: "Create At",
      render: (res: any) => (
        <span title={res?.attributes?.createdAt}>
          {moment(res?.attributes?.createdAt).format("MMM DD, YYYY")}
        </span>
      ),
    },

    {
      title: "Action",
      dataIndex: "",
      render(value, record) {
        return (
          <Space className="">
            <Button
              className="btn-next"
              onClick={() => {
                setEdit(value);
                setIsVisible(true);
                form.setFieldsValue(value?.attributes);
              }}
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

  const { category = [], loader = false } = useSelector(
    (store: any) => store.category
  );
  const options = [
    { label: "Career", value: "CAREER" },
    { label: "University", value: "UNIVERSITY" },
    { label: "Both", value: "BOTH" },
  ];
  const handleChange = (value: any) => {
    setType(value);
    disptch(getCategory(1, 10, search, value));
    // setImage(value);
  };
  const onFinish = (value: any) => {
    if (edit) {
      disptch(updateCategory(edit?.id, value)).then((res: any) => {
        setIsVisible(false);
        form.resetFields();
        disptch(getCategory());
        setEdit(null);
      });
    } else {
      disptch(postCategory(value)).then((res: any) => {
        setIsVisible(false);
        form.resetFields();
        disptch(getCategory());
      });
    }
  };
  const onChange = (value: string) => {
    disptch(getCategory(1, 10, value, type));
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
        <div className="d-flex">
          <Select
            size={"middle"}
            placeholder="Please select"
            // defaultValue={["a10", "c12"]}
            allowClear
            onChange={handleChange}
            style={{
              width: "100%",
            }}
            options={options}
          />
          <Button
            className="btn btn-primary"
            onClick={() => setIsVisible(true)}
          >
            Add new
          </Button>
        </div>
      </div>
      <GridView data={category} columns={columns} loading={loader} p />
      <Modal
        open={isVisible}
        footer={false}
        onCancel={() => {
          setIsVisible(false);
          setEdit(null);
          form.resetFields();
        }}
      >
        <Form
          className="py-4"
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Type" name="type" rules={[{ required: true }]}>
            <Select
              placeholder="Select option"
              style={{ width: "100%" }}
              onChange={handleChange}
              options={options}
            />
          </Form.Item>
          <Form.Item className="d-flex justify-content-end">
            <Button loading={loader} htmlType="submit">
              {edit ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Category;
