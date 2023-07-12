import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Spin,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ImageUpload from "src/components/ImageUpload/ImageUpload";
import { uploadImage } from "src/redux/actions/mediaUpload";
import {
  getUniById,
  postUni,
  updateUni,
} from "src/redux/actions/universityAction";
import { getCategory } from "src/redux/actions/categoryAction";
import "./University.scss";

function AddEditUni() {
  const navigate = useNavigate();
  const [image, setImage]: any = useState();
  const [previewImage, setPreviewImage] = useState("");
  const [option, setOption]: any = useState([]);
  const disptch = useDispatch<any>();
  const params = useParams();
  const [form] = Form.useForm();
  const { id } = params;

  useEffect(() => {
    disptch(getCategory(1, 1000, "", "UNIVERSITY"));
    form.resetFields();
    if (id !== "new") {
      disptch(getUniById(id));
    }
  }, [disptch]);

  const { uniById = {}, loader = false } = useSelector(
    (store: any) => store.uni
  );
  const { category = [], loader: cartLoader = false } = useSelector(
    (store: any) => store.category
  );
  useEffect(() => {
    const cat_ids = uniById?.attributes?.category?.map((items: any) => {
      return { checked: items?.id };
    });
    console.log("cat_ids", cat_ids);

    form.setFieldsValue({
      ...uniById?.attributes,
      link: uniById?.attributes?.link,
    });
    form.setFieldsValue({ category_id: [33, 39, 41, 42] });
    console.log(form.getFieldsValue());
    setPreviewImage(uniById?.attributes?.image);
  }, [uniById]);

  useEffect(() => {
    const temp =
      category &&
      category?.map((items: any) => {
        return { label: items?.attributes?.name, value: items?.id };
      });
    setOption(temp);
  }, [category]);

  const callback = () => {
    navigate("/dashboard/university");
  };

  const onFinish = (values: any) => {
    if (id !== "new") {
      let payload = { ...values };
      if (!!image) {
        let formData = new FormData();
        formData.append("file", image);
        disptch(uploadImage(formData)).then((res: any) => {
          payload = { ...payload, image: res?.file_url };
          disptch(updateUni(id, payload, callback));
        });
      } else {
        disptch(updateUni(id, values, callback));
      }
    } else {
      let payload = { ...values };
      if (!!image) {
        let formData = new FormData();
        formData.append("file", image);
        disptch(uploadImage(formData)).then((res: any) => {
          payload = { ...payload, image: res?.file_url };
          disptch(postUni(payload, callback));
        });
      } else {
        disptch(postUni(payload, callback));
      }
    }
  };

  const onChange = (value: any) => {
    console.log({ value });

    setImage(value);
  };
  // const options = [
  //   { value: "y", label: "Yes" },
  //   { value: "n", label: "No" },
  // ];

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
                name="uni_number"
                label="Uni Number"
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
                label="Email/Contact"
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
            <h4 className="w-100">Select Education Category</h4>
            <Col md={24} sm={24} xs={24} className="px-2">
              <Form.Item
                name="category_id"
                // valuePropName="checked"
                className="flex-wrap mt-3"
              >
                <Checkbox.Group
                  // defaultValue={[33, 39, 41, 42]}
                  options={option}
                />
              </Form.Item>
            </Col>

            {/* <Col md={4} sm={12} xs={24} className="px-2">
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
            </Col> */}

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
