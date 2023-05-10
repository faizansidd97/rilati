import { useEffect, useState } from "react";
import { Button, Col, Form, Input, InputNumber, Row, Select, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageUpload from "src/components/ImageUpload/ImageUpload";
import { uploadImage } from "src/redux/actions/mediaUpload";
import {
  getUniById,
  postUni,
  updateUni,
} from "src/redux/actions/universityAction";

function AddEditUni() {
  const [image, setImage]: any = useState();
  const disptch = useDispatch<any>();
  const params = useParams();
  const [form] = Form.useForm();
  const { id } = params;

  useEffect(() => {
    form.resetFields();
    if (id !== "new") {
      disptch(getUniById(id));
    }
  }, [disptch]);

  const { uniById = {}, loader = false } = useSelector(
    (store: any) => store.uni
  );
  useEffect(() => {
    console.log(uniById);

    form.setFieldsValue(uniById?.attributes);
  }, [uniById]);

  const onFinish = (values: any) => {
    if (id !== "new") {
      disptch(updateUni(id, values));
    } else {
      let formData = new FormData();
      formData.append("file", image);
      console.log({ formData });
      disptch(uploadImage(formData)).then((res: any) => {
        console.log(res);

        const payload = { ...values, image: res?.file_url };
        disptch(postUni(payload));
      });
    }
  };

  const onChange = (value: any) => {
    console.log({ value });

    setImage(value);
  };
  const handleChange = (value: any) => {
    console.log({ value });

    // setImage(value);
  };
  const options = [
    { value: "y", label: "Yes" },
    { value: "n", label: "No" },
  ];

  return (
    <div className="overflow-auto">
      <Spin spinning={loader}>
        <Form
          name="university"
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Row className="">
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item name="image" label="Image">
                <ImageUpload onChange={onChange} />
              </Form.Item>
            </Col>
            <Col
              md={16}
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
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item
                name="link"
                label="Link"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item
                name="uni_number"
                label="Uni Number"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item
                name="state"
                label="State"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                  },
                  {
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="agriculture_environment"
                label="Agriculture Environment"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="architecture"
                label="Architecture"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="creative_arts"
                label="Creative Arts"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="education"
                label="Education"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="admission_rank"
                label="Admission Rank"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="engineering"
                label="Engineering"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="health"
                label="Health"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>

            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="information_technology"
                label="Information Technology"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 160 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="management"
                label="Management"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="natural"
                label="Natural"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="society"
                label="Society"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="tourism"
                label="Ttourism"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="rto_provider"
                label="RTO Provider"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="cricos"
                label="Cricos"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="teqsa"
                label="Teqsa "
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={options}
                />
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

export default AddEditUni;
