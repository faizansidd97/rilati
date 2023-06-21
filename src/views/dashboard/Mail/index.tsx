import React, { useEffect } from "react";
import { Spin } from "antd";
import { ColumnsType } from "antd/es/table";
import GridView from "src/components/GridView/GridView";
import { useDispatch, useSelector } from "react-redux";
import { stringLimt } from "src/helper/helper";
import { getMails } from "src/redux/actions/mailActions";
import moment from "moment";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function Mail() {
  const disptch = useDispatch<any>();

  useEffect(() => {
    disptch(getMails());
  }, [disptch]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Email",
      // dataIndex: "name",
      render: (res: any) => <span title={res?.email}>{res?.email}</span>,
    },
    {
      title: "Description",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.description}>{stringLimt(res?.description, 20)}</span>
      ),
    },
    {
      title: "About",
      // dataIndex: "name",
      render: (res: any) => (
        <span title={res?.flag}>{stringLimt(res?.flag, 20)}</span>
      ),
    },
    {
      title: "Date",
      // dataIndex: "name",
      render: (res: any) => (
        <span>
          {res?.created_at && moment(res?.created_at).format("YYYY-MM-DD")}
        </span>
      ),
    },
    // {
    //   title: "State",
    //   // dataIndex: "location",
    //   render: (res: any) => (
    //     <span title={res?.attributes?.state}>
    //       {stringLimt(res?.attributes?.state, 50)}
    //     </span>
    //   ),
    // },
    // {
    //   title: "Action",
    //   dataIndex: "",
    //   render(value, record) {
    //     return (
    //       <Space className="">
    //         <Link
    //           to={`/dashboard/university/${value?.id}`}
    //           className="btn-next"
    //         >
    //           Edit
    //         </Link>
    //         <Button
    //           onClick={() => showPromiseConfirm(value?.id)}
    //           className="btn-danger"
    //         >
    //           Delete
    //         </Button>
    //       </Space>
    //     );
    //   },
    // },
  ];

  const { mail = [], loader = false } = useSelector((store: any) => store.mail);
  console.log("mail", mail, loader);

  return (
    <div className="overflow-auto">
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* <div className="d-flex">
          <Input onChange={(e) => setSearch(e.target.value)} />
          <Button className="mx-3" onClick={() => onChange(search)}>
          Search
          </Button>
        </div> */}
        {/* <Link className="btn btn-primary" to={"/dashboard/university/new"}>
          Add new
        </Link> */}
      </div>
      <GridView data={mail} columns={columns} loading={loader} />
    </div>
  );
}

export default Mail;
