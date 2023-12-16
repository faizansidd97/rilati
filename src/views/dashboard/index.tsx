import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Radio, Select, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { ExclamationCircleFilled } from "@ant-design/icons";
import GridView from "src/components/GridView/GridView";
import { useDispatch, useSelector } from "react-redux";
import { deleteCareer, getCareer } from "src/redux/actions/careerAction";
import { stringLimt } from "src/helper/helper";
import { Link } from "react-router-dom";
import "./dashboard.scss";
import { getCategory } from "src/redux/actions/categoryAction";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function Dashboard() {
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [activeRadio, setActiveRadio] = useState(0);
  const [careerParams, setCareerParams] = useState({
    atar: "ASC",
    job_help_environment: "ASC",
    job_help_people: "ASC",
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
    total: 10,
  });
  const disptch = useDispatch<any>();

  useEffect(() => {
    disptch(getCareer());
    disptch(getCategory(1, 1000, "", "CAREER"));
  }, [disptch]);

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
    disptch(getCareer({ title: value }));
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
        <span title={res?.attributes?.title}>{res?.attributes?.title}</span>
      ),
    },
    {
      title: "Description",
      // dataIndex: "location",
      render: (res: any) => (
        <span title={res?.attributes?.job_description}>
          {res?.attributes?.job_description}
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

  const {
    career = [],
    loader = false,
    metaData = {},
  } = useSelector((store: any) => store.career);
  const { category = [], loader: catLoader = false } = useSelector(
    (store: any) => store.category
  );
  const callback = (params: any) => {
    setPagination({ ...params });
    disptch(getCareer({ ...params, ...careerParams, categoryId: categoryId }));
  };
  const handleChange = (value: any) => {
    setCategoryId(value);
    disptch(getCareer({ categoryId: value }));
  };
  const onFilterChange = (params: any) => {
    setCareerParams({ ...params });

    disptch(getCareer({ ...params, page: 1, take: 20 }));
  };
  const clearFilterHandler = () => {
    setCareerParams({
      atar: "",
      job_help_environment: "",
      job_help_people: "",
    });
    setActiveRadio(0);
    setPagination({
      currentPage: 1,
      pageSize: 10,
      total: 10,
    });
    disptch(getCareer({ page: 1, take: 20 }));
  };
  return (
    <div className="overflow-auto">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <Select
            size={"middle"}
            placeholder="Please select type"
            // defaultValue={["a10", "c12"]}
            loading={catLoader}
            allowClear
            onChange={handleChange}
            style={{
              width: "100%",
            }}
            className="me-3"
            options={
              category?.length > 0
                ? category?.map((item: any) => {
                    return { label: item?.attributes?.name, value: item?.id };
                  })
                : []
            }
          />
        </div>
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
      <div className="d-flex align-items-center mb-3">
        <Radio.Group
          className="d-flex justify-content-start flex-wrap"
          value={Number(activeRadio)}
        >
          <Radio.Button
            className="radio-button mx-2"
            onClick={(e: any) => {
              onFilterChange({
                atar: careerParams?.atar === "ASC" ? "DESC" : "ASC",
              });
              setActiveRadio(e?.target?.value);
            }}
            value={1}
          >
            ATAR
            {careerParams?.atar === "ASC" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </Radio.Button>
          <Radio.Button
            value={5}
            className="radio-button mx-2"
            onClick={(e: any) => {
              onFilterChange({
                job_help_environment:
                  careerParams?.job_help_environment === "ASC" ? "DESC" : "ASC",
              });
              setActiveRadio(e?.target?.value);
            }}
          >
            Jobs That Help Environment
            {careerParams?.job_help_environment === "ASC" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </Radio.Button>
          <Radio.Button
            value={6}
            className="radio-button mx-2"
            onClick={(e: any) => {
              onFilterChange({
                job_help_people:
                  careerParams?.job_help_people === "ASC" ? "DESC" : "ASC",
              });

              setActiveRadio(e?.target?.value);
            }}
          >
            Jobs That Help People
            {careerParams?.job_help_people === "ASC" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </Radio.Button>
        </Radio.Group>
        <Button className="btn-close" onClick={clearFilterHandler}></Button>
      </div>
      <GridView
        data={career}
        columns={columns}
        loading={loader}
        listingCallback={callback}
        pagination={{
          total: metaData?.totalCount,
          currentPage: metaData?.currentPage,
        }}
      />
    </div>
  );
}

export default Dashboard;
