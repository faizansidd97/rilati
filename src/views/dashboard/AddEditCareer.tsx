import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCareerById } from "src/redux/actions/careerAction";
import { useNavigate, useParams } from "react-router-dom";
import { postCareer } from "src/redux/actions/careerAction";
import { updateCareer } from "src/redux/actions/careerAction";
import ImageUpload from "src/components/ImageUpload/ImageUpload";
import { uploadImage } from "src/redux/actions/mediaUpload";
import { getCategory } from "src/redux/actions/categoryAction";

function AddEditCareer() {
  const [image, setImage]: any = useState();
  const [uniCat, setUniCat]: any = useState();
  const [careerImage, setCareerImage]: any = useState();
  const [careerCat, setCareerCat]: any = useState();
  const disptch = useDispatch<any>();
  const params = useParams();
  const [form] = Form.useForm();
  const { id } = params;
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      await disptch(getCategory(1, 1000));
      if (id !== "new") {
        await disptch(getCareerById(id));
      } else {
        form.resetFields();
        setCareerImage(null);
      }
    }
    load();
  }, [disptch]);

  const { careerById = {}, loader = false } = useSelector(
    (store: any) => store.career
  );
  const { category = [] } = useSelector((store: any) => store.category);

  const { loader: mediaLoader = false } = useSelector(
    (store: any) => store.media
  );

  useEffect(() => {
    const uniCategory =
      category &&
      category
        ?.filter((items: any) => items?.attributes?.type === "UNIVERSITY")
        ?.map((items: any) => {
          return { label: items?.attributes?.name, value: items?.id };
        });
    const careerCategory =
      category &&
      category
        ?.filter((items: any) => items?.attributes?.type === "CAREER")
        ?.map((items: any) => {
          return { label: items?.attributes?.name, value: items?.id };
        });
    setUniCat(uniCategory);
    setCareerCat(careerCategory);
  }, [category]);

  useEffect(() => {
    let edu = careerById?.attributes?.education_categories?.map((item: any) => {
      return { label: item?.attributes?.name, value: item?.id };
    });
    let career = careerById?.attributes?.categories?.map((item: any) => {
      return { label: item?.attributes?.name, value: item?.id };
    });
    form.setFieldsValue({ education_category: edu, categories: career });
    setCareerImage(careerById?.attributes?.image);
    form.setFieldsValue(careerById?.attributes);
  }, [careerById]);

  const callback = () => {
    navigate("/dashboard");
  };
  const onFinish = (values: any) => {
    if (id !== "new") {
      if (!!image) {
        let formData = new FormData();
        formData.append("file", image);
        disptch(uploadImage(formData)).then((res: any) => {
          const payload = { ...values, image: res?.file_url };
          disptch(updateCareer(id, payload, callback));
        });
      } else {
        disptch(updateCareer(id, values, callback));
      }
    } else {
      let formData = new FormData();
      formData.append("file", image);
      disptch(uploadImage(formData)).then((res: any) => {
        const payload = { ...values, image: res?.file_url };
        disptch(postCareer(payload, callback));
      });
    }
  };

  const onChange = (value: any) => {
    console.log({ value });

    setImage(value);
  };
  const option = [
    {
      value: "0",
    },
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
    {
      value: "4",
    },
    {
      value: "5",
    },
    {
      value: "6",
    },
    {
      value: "7",
    },
    {
      value: "8",
    },
    {
      value: "9",
    },
    {
      value: "10",
    },
  ];
  const handleChange = (value: any) => {
    console.log({ value });

    // setImage(value);
  };
  return (
    <div className="overflow-auto">
      <Spin spinning={loader || mediaLoader}>
        <Form name="career" form={form} layout="vertical" onFinish={onFinish}>
          <Row className="">
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item name="image" label="Image">
                <ImageUpload imageURL={careerImage} onChange={onChange} />
              </Form.Item>
            </Col>
            <Col
              md={4}
              sm={12}
              xs={24}
              className="px-2 d-flex justify-content-start align-items-end"
            >
              <Form.Item
                name="career_number"
                label="Career Number"
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
            <Col
              md={12}
              sm={12}
              xs={24}
              className="px-2 d-flex justify-content-start align-items-end"
            >
              <Form.Item
                name="title"
                label="Title"
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
                name="average_salary"
                label="Average Salary"
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
                name="average_salary_aud"
                label="Average Salary Aud"
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
                name="education_category"
                className="flex-wrap mt-3"
                label="Uni Category"
              >
                <Select
                  mode="multiple"
                  size={"middle"}
                  placeholder="Please select"
                  // defaultValue={["a10", "c12"]}
                  allowClear
                  onChange={handleChange}
                  style={{
                    width: "100%",
                  }}
                  options={uniCat}
                />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item
                name="categories"
                label="Career Category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  size={"middle"}
                  placeholder="Please select"
                  // defaultValue={["a10", "c12"]}
                  allowClear
                  onChange={handleChange}
                  style={{
                    width: "100%",
                  }}
                  options={careerCat}
                />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item
                name="student_intrest"
                label="Student Intrest"
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
                name="skills_transferable"
                label="Skills Transferable"
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
                name="years_needed"
                label="Years Needed"
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
                name="description_study"
                label="Description Study"
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
                name="admission_rank"
                label="Admission Rank"
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
                name="average_gpa"
                label="Average GPA"
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
                name="internship_needed"
                label="Internship Needed"
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
                name="cost_course"
                label="Cost Course"
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
                name="precision_work"
                label="Precision Work"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="job_satisfaction"
                label="Job Satisfaction"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="job_stress"
                label="Job Stress"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="work_hours"
                label="Work Hours"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="work_life_balance"
                label="Work Life Balance"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="scope_of_skill"
                label="Scope of Skill"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="autonomy"
                label="Autonomy"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="repetitive_tedious"
                label="Repetitive Tedious"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="physical_stress"
                label="Physical Stress"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="mental_stress"
                label="Mental Stress"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="team_reliance"
                label="Team Reliance"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="status_in_company"
                label="Status in Company"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="risk_to_health"
                label="Risk to Health"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="risk_to_life"
                label="Risk to Life"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="people_interaction"
                label="People Interaction"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="job_help_people"
                label=" Job Help People"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="job_help_environment"
                label="Job Help Environment"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={4} sm={12} xs={24} className="px-2">
              <Form.Item
                name="potential"
                label="Potential"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select option"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={option}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item name="study_for_australia" label="Study for Australia">
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item name="fastest_growing" label="Fastest Growing">
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24} className="px-2">
              <Form.Item name="tags" label="Tags">
                <Input />
              </Form.Item>
            </Col>

            <Col md={24} sm={24} xs={24} className="px-2">
              <Form.Item name="job_description" label="Job Ddescription">
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col md={24} sm={24} xs={24} className="px-2">
              <Form.Item className="d-flex justify-content-end">
                <Button
                  className="btn btn-primary"
                  htmlType="submit"
                  loading={loader || mediaLoader}
                >
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

export default AddEditCareer;
