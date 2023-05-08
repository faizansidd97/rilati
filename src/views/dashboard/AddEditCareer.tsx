import React, { useEffect } from "react";
import { Button, Form, Input, Modal, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { ExclamationCircleFilled } from "@ant-design/icons";
import GridView from "src/components/GridView/GridView";
import { useDispatch, useSelector } from "react-redux";
import { getCareerById } from "src/redux/actions/careerAction";
import { useParams } from "react-router-dom";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function AddEditCareer() {
  const disptch = useDispatch();
  const params = useParams();
  const [form] = Form.useForm();
  const { id } = params;
  useEffect(() => {
    if (id) {
      disptch(getCareerById(id));
    }
  }, []);

  const { careerById = {}, loader = false } = useSelector(
    (store: any) => store.career
  );
  console.log(careerById);
  useEffect(() => {
    form.setFieldsValue({
      title: careerById?.attributes?.title,
    });
  }, [careerById]);
  return (
    <div className="overflow-auto">
      <Form name="career" form={form}>
        <Form.Item name="title">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddEditCareer;
