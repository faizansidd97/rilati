import React, { useEffect } from "react";
import { Button, Col, Form, Input, Modal, Row, Space } from "antd";
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
      <Form name="career" form={form} layout="vertical">
        <Row className="">
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="average_salary" label="Average Salary">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="average_salary_aud" label="Average Salary Aud">
              <Input />
            </Form.Item>
          </Col>

          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="categories" label="Categories">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="career_category" label="Career Category">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="student_intrest" label="Student Intrest">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="skills_transferable" label="Skills Transferable">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="years_needed" label="Years Needed">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="description_study" label="Description Study">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="admission_rank" label="Admission Rank">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="average_gpa" label="Average GPA">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="internship_needed" label="Internship Needed">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="cost_course" label="Cost Course">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="precision_work" label="Precision Work">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="job_satisfaction" label="Job Satisfaction">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="job_stress" label="Job Stress">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="work_hours" label="Work Hours">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="work_life_balance" label="Work Life Balance">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="scope_of_skill" label="Scope of Skill">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="autonomy" label="Autonomy">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="repetitive_tedious" label="Repetitive Tedious">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="physical_stress" label="Physical Stress">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="mental_stress" label="Mental Stress">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="team_reliance" label="Team Reliance">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="status_in_company" label="Status in Company">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="risk_to_health" label="Risk to Health">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="risk_to_life" label="Risk to Life">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="people_interaction" label="People Interaction">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="job_help_people" label=" Job Help People">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="job_help_environment" label="Job Help Environment">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="potential" label="Potential">
              <Input />
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
          <Col md={8} sm={12} xs={24} className="px-2">
            <Form.Item name="image" label="image">
              <Input />
            </Form.Item>
          </Col>
          <Col md={24} sm={24} xs={24} className="px-2">
            <Form.Item name="job_description" label="Job Ddescription">
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddEditCareer;
