import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Modal, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "src/redux/actions/authAction";
import { Row, Col } from "react-bootstrap";
import { confidentSkills, myAtar, startWorking } from "./constant";
import { getIndustries, getSubjects } from "src/redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/02.webp";
import "./SignUpModal.scss";

const SignUpModal = ({
  isModalOpen = false,
  handleOk,
  handleCancel,
  signInOpen,
}: any) => {
  const [leastIndustries, setLeastIndustries] = useState([]);
  const [leastSubject, setLeastSubject] = useState([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects());
    dispatch(getIndustries());
  }, [dispatch]);

  const callBack = () => {
    message.success("Account Registered successfully");
    handleCancel();
    signInOpen();
    navigate("/");
  };
  const onFinish = (values: any) => {
    dispatch(register(values, callBack));
  };

  const { isDark = false } = useSelector((store: any) => store.theme);
  const { loginLoader = false } = useSelector((store: any) => store.auth);

  const {
    subjects = [],
    // loader = false,
    // industriesLoader = false,
    industries = [],
  } = useSelector((store: any) => store.subject);

  const leastHandler = (value: any) => {
    const updatedIndustries = industries?.map((item: any) => {
      return {
        value: item?.id,
        label: item?.name,
        disabled: !!value?.includes(item?.id) || false,
      };
    });
    const selectLeast = form.getFieldValue("least_industries_interest");
    const removeSelected = selectLeast?.filter(
      (item: any) => !value?.includes(item)
    );
    setLeastIndustries(updatedIndustries);
    form.setFieldsValue({ least_industries_interest: removeSelected });
  };
  const leastSubjectHandler = (value: any) => {
    const updatedIndustries = subjects?.map((item: any) => {
      return {
        value: item?.id,
        label: item?.name,
        disabled: !!value?.includes(item?.id) || false,
      };
    });

    const selectLeast = form.getFieldValue("least_favorite_subject");
    const removeSelected = selectLeast?.filter(
      (item: any) => !value?.includes(item)
    );
    setLeastSubject(updatedIndustries);

    form.setFieldsValue({ least_favorite_subject: removeSelected });
  };
  useEffect(() => {
    const indust = industries?.map((item: any) => {
      return {
        value: item?.id,
        label: item?.name,
      };
    });
    setLeastIndustries(indust);
  }, [industries]);
  useEffect(() => {
    const indust = subjects?.map((item: any) => {
      return {
        value: item?.id,
        label: item?.name,
      };
    });
    setLeastSubject(indust);
  }, [subjects]);
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      width={"80%"}
      // zIndex={9999}
    >
      <section className="signup-modal ">
        <div
          className="signup-image d-flex justify-content-center align-items-center mb-5"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h2>Create your Profile</h2>
        </div>
        <div
          className={` ${
            isDark ? "dark " : "light "
          } signup-screen__wrapper d-flex flex-column justify-content-center align-items-center`}
        >
          <p className="text-center text-black">
            We understand that choosing the right path can be daunting, which is
            why we have developed this form as a tool to guide you towards the
            best-suited career options. By providing us with your valuable
            information, you enable our advanced algorithm to analyze your
            strengths, interests, and aspirations effectively. This data serves
            as the foundation for our personalized career suggestions, ensuring
            that the recommendations you receive are tailored specifically to
            you. This form is not just another routine task; it is an
            opportunity for you to gain valuable insights that can shape your
            professional journey in a meaningful way. The time you invest in
            completing this form will prove to be a strategic investment in your
            future success. Allow us to empower you with the knowledge and
            guidance needed to make informed decisions and embark on a
            fulfilling career path
          </p>
          <Form
            name="signup"
            form={form}
            className="signup-form"
            style={{ width: "100%" }}
            layout="vertical"
            // initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Row>
              <Col md={3} xs={12}>
                <Form.Item
                  name="name"
                  label="Username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name/username!",
                    },
                  ]}
                >
                  <Input
                    // prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Name or Username"
                  />
                </Form.Item>
                <Form.Item name="first_name" hidden initialValue={"aaa"}>
                  <Input
                    // prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Name or Username"
                  />
                </Form.Item>
                <Form.Item name="last_name" hidden initialValue={"aaa"}>
                  <Input
                    // prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Name or Username"
                  />
                </Form.Item>
              </Col>

              <Col md={3} xs={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                      type: "email",
                    },
                  ]}
                >
                  <Input
                    // prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    // prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                  />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  name="confirm"
                  label="Congirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The new password that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  name="education_stage"
                  label="I'm in"
                  rules={[
                    { required: true, message: "Please input your study!" },
                  ]}
                >
                  <Select
                    placeholder="I am in"
                    options={[
                      { label: "High School", value: "HIGH_SCHOOL" },
                      { label: "University", value: "UNIVERSITY" },
                      { label: "Rather not say", value: "PREFER_NOT_TO_SAY" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  name="my_atar"
                  label="My ATAR is"
                  rules={[
                    {
                      required: true,
                      message: "Please input your least my atar!",
                    },
                  ]}
                >
                  <Select placeholder="My Atar" options={myAtar} />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  name="personal_trait"
                  label="My personality type is"
                  rules={[
                    {
                      required: true,
                      message: "Please input your personality!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Personality "
                    options={[
                      {
                        label: "Introvert",
                        value: "INTROVERT",
                      },
                      { label: "Extrovert", value: "EXTROVERT" },
                      {
                        label: "Somewhere in the middle",
                        value: "SOME_WHERE_MIDDLE",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  name="start_working"
                  label="Ready to start working"
                  rules={[
                    {
                      required: true,
                      message: "Please input your start working!",
                    },
                  ]}
                >
                  <Select placeholder="Start Working" options={startWorking} />
                </Form.Item>
              </Col>

              <Col md={12} xs={12}>
                <Form.Item
                  name="favorite_subject"
                  label="My Favourite subjects are"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                >
                  <Checkbox.Group
                    className="favorite-subject"
                    onChange={leastSubjectHandler}
                    options={subjects?.map((items: any) => {
                      return {
                        value: items?.id,
                        label: items?.name,
                      };
                    })}
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={12}>
                <Form.Item
                  name="least_favorite_subject"
                  label="My Least Favourite subjects are"
                  rules={[
                    {
                      required: true,
                      message: "Please input your least favorite subject!",
                    },
                  ]}
                >
                  <Checkbox.Group
                    className="favorite-subject least"
                    options={leastSubject}
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={12}>
                <Form.Item
                  name="industries_interest"
                  label="My favourite industries"
                  rules={[
                    {
                      required: true,
                      message: "Please input your least industries interest!",
                    },
                  ]}
                >
                  <Checkbox.Group
                    className="favorite-subject"
                    onChange={leastHandler}
                    options={industries?.map((items: any) => {
                      return {
                        value: items?.id,
                        label: items?.name,
                      };
                    })}
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={12}>
                <Form.Item
                  name="least_industries_interest"
                  label="My least favourite industries"
                  rules={[
                    {
                      required: true,
                      message: "Please input your least industries interest!",
                    },
                  ]}
                >
                  <Checkbox.Group
                    className="least favorite-subject"
                    options={leastIndustries}
                  />
                </Form.Item>
              </Col>
              <Form.Item
                name="role_id"
                initialValue={"USER"}
                rules={
                  [
                    // { required: true, message: "Please input your phone!" },
                  ]
                }
                hidden
              >
                <Input
                  // prefix={<UserOutlined className="site-form-item-icon" />}
                  value="USER"
                  // placeholder="Phone Number"
                />
              </Form.Item>
              {/* <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Input
                  // prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Phone Number"
                />
              </Form.Item>
              
              <Col md={12} xs={12}>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[
                    { required: true, message: "Please input your city!" },
                  ]}
                >
                  <Input placeholder="City" />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  name="state"
                  label="State"
                  rules={[
                    { required: true, message: "Please input your state!" },
                  ]}
                >
                  <Input placeholder="State" />
                </Form.Item>
              </Col>
              <Col md={3} xs={12}>
                <Form.Item
                  name="country"
                  label="Country"
                  rules={[
                    { required: true, message: "Please input your country!" },
                  ]}
                >
                  <Input placeholder="Country" />
                </Form.Item>
              </Col> */}
              {/* <Col md={12} xs={12}>
                <Form.Item
                  name="favorite_subject"
                  rules={[
                    {
                      required: true,
                      message: "Please input your favorite subject!",
                    },
                  ]}
                >
                  <Select
                    loading={loader}
                    mode="multiple"
                    placeholder="Favorite Subject"
                    allowClear
                    options={subjects?.map((items: any) => {
                      return {
                        value: items?.id,
                        label: items?.name,
                      };
                    })}
                  />
                </Form.Item>
              </Col> */}
              <Col md={12} xs={12}>
                <Form.Item
                  name="confident_skills"
                  label="Check the skills you feel confident in"
                  rules={[
                    {
                      required: true,
                      message: "Please check your Confident skill!",
                    },
                  ]}
                >
                  {/* <Select
                    options={confidentSkills?.map((items: any) => {
                      return {
                        value: items?.value,
                        label: items?.label,
                      };
                    })}
                  /> */}
                  <Checkbox.Group
                    className="least favorite-subject"
                    options={confidentSkills?.map((items: any) => {
                      return {
                        value: items?.value,
                        label: items?.label,
                      };
                    })}
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={12}>
                <Form.Item
                  name="newsletter"
                  label="Newsletter"
                  initialValue={false}
                  rules={[
                    {
                      required: true,
                      message: "Please input your newsletter!",
                    },
                  ]}
                >
                  <Checkbox value={true}>
                    Send email/newsletter, IF the content matches my profile
                  </Checkbox>
                  {/* <Select
                    placeholder="Newsletter"
                    options={[
                      {
                        label:
                          "Yes, send email/newsletter, IF the content matches my profile",
                        value: true,
                      },
                      { label: "No, maybe later.", value: false },
                    ]}
                  /> */}
                </Form.Item>
              </Col>

              <Col md={12} xs={12}>
                <Form.Item className="text-center">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="signup-form-button w-100"
                    loading={loginLoader}
                  >
                    Sign Up
                  </Button>
                </Form.Item>
              </Col>
              <Col md={12} xs={12}>
                <p className="text-center">
                  Already have an account?{" "}
                  <span
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      handleCancel();
                      signInOpen();
                    }}
                  >
                    Sign in
                  </span>
                </p>
              </Col>
              {/* <Form.Item>
                <div className="d-flex justify-content-center">
                  <Link to={RoutePaths.LOGIN} className="login-form-forgot ">
                    Back to Login
                  </Link>
                </div>
              </Form.Item> */}
            </Row>
          </Form>
        </div>
        {/* </div> */}
      </section>
    </Modal>
  );
};

export default SignUpModal;
