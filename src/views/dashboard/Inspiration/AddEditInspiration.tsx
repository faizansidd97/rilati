import { useEffect, useState } from "react";
import { Button, Col, Form, Input, InputNumber, Row, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ImageUpload from "src/components/ImageUpload/ImageUpload";
import { uploadImage } from "src/redux/actions/mediaUpload";
import "./Inspiration.scss";
import {
  addInspiration,
  getByIdInspiration,
  updateInspiration,
} from "src/redux/actions/inspirationsAction";

function AddEditInspiration() {
  const navigate = useNavigate();
  const [image, setImage]: any = useState();
  const [previewImage, setPreviewImage] = useState("");

  const disptch = useDispatch<any>();
  const params = useParams();
  const [form] = Form.useForm();
  const { id } = params;

  useEffect(() => {
    form.resetFields();
    if (id !== "new") {
      disptch(getByIdInspiration(id));
    }
  }, [disptch]);

  const callback = () => {
    navigate("/dashboard/inspiration");
  };

  const onFinish = (values: any) => {
    if (id !== "new") {
      let payload = { ...values };
      if (!!image) {
        let formData = new FormData();
        formData.append("file", image);
        disptch(uploadImage(formData)).then((res: any) => {
          payload = { ...payload, image: res?.file_url };
          disptch(updateInspiration(id, payload, callback));
        });
      } else {
        disptch(updateInspiration(id, values, callback));
      }
    } else {
      let payload = { ...values };
      if (!!image) {
        let formData = new FormData();
        formData.append("file", image);
        disptch(uploadImage(formData)).then((res: any) => {
          payload = { ...payload, image: res?.file_url };
          disptch(addInspiration(payload, callback));
        });
      } else {
        disptch(addInspiration(payload, callback));
      }
    }
  };

  const onChange = (value: any) => {
    setImage(value);
  };
  const { loader = false, inspirationById = {} } = useSelector(
    (store: any) => store.inspiration
  );
  useEffect(() => {
    form.setFieldsValue(inspirationById);
    setPreviewImage(inspirationById?.image);
  }, [inspirationById]);

  return (
    <div className="overflow-auto">
      <Spin spinning={loader}>
        <Form
          name="inspiration"
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Row className="">
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item name="image" label="Image">
                <ImageUpload imageURL={previewImage} onChange={onChange} />
              </Form.Item>
            </Col>

            <Col
              md={4}
              sm={12}
              xs={24}
              className="px-2 d-flex justify-content-start align-items-end"
            >
              <Form.Item
                name="inspirational_id"
                label="Inpirational Number"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber className="w-100" />
              </Form.Item>
            </Col>
            <Col
              md={12}
              sm={12}
              xs={24}
              className="px-2 d-flex justify-content-start align-items-end"
            >
              <Form.Item
                name="name"
                label="Name"
                className="w-100"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={24} sm={24} xs={24} className="px-2">
              <Form.Item
                name="occupation"
                label="Occupation"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col md={24} sm={24} xs={24} className="px-2">
              <Form.Item
                name="education"
                label="Education"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea rows={6} />
              </Form.Item>
            </Col>
            <Col md={24} sm={24} xs={24} className="px-2">
              <Form.Item
                name="career_path"
                label="Career Path"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea rows={6} />
              </Form.Item>
            </Col>

            <Col md={24} sm={24} xs={24} className="px-2">
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea rows={6} />
              </Form.Item>
            </Col>

            <Col md={24} sm={24} xs={24} className="px-2">
              <Form.Item className="d-flex justify-content-end">
                <Button className="btn btn-primary" htmlType="submit">
                  {id !== "new" ? "Update" : "Add"}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </div>
  );
}

export default AddEditInspiration;
