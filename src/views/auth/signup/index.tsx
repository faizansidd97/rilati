import { useEffect } from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import logo from "../../../assets/images/mainLogo.png";
import thumbnail1 from "../../../assets/images/thumbnail (1).jpg";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "src/redux/actions/authAction";
import "./signup.scss";
import { Row, Col } from "react-bootstrap";
import { myAtar, startWorking } from "./constant";
import { getIndustries, getSubjects } from "src/redux/actions/userActions";
import { Link } from "react-router-dom";
import { RoutePaths } from "src/layout";

const Signup = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects());
    dispatch(getIndustries());
  }, [dispatch]);

  const onFinish = (values: any) => {
    dispatch(login(values));
  };

  const { isDark = false } = useSelector((store: any) => store.theme);

  const {
    subjects = [],
    loader = false,
    industriesLoader = false,
    industries = [],
  } = useSelector((store: any) => store.subject);

  console.log("industries", industries);

  return (
    <section
      className="signup-screen d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url("${thumbnail1}")` }}
    >
      <div className="overlay d-flex justify-content-center align-items-center">
        <div
          className={` ${
            isDark ? "dark " : "light "
          } signup-screen__wrapper d-flex flex-column justify-content-center align-items-center`}
        >
          <img src={logo} className="signup-logo" alt="logo" />

          <Form
            name="signup"
            className="signup-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Row>
              <Col md={6} xs={12}>
                <Form.Item
                  name="name"
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
              </Col>
              <Col md={6} xs={12}>
                <Form.Item
                  name="study"
                  rules={[
                    { required: true, message: "Please input your study!" },
                  ]}
                >
                  <Select
                    placeholder="I am in"
                    options={[
                      { label: "High School", value: "HIGH_SCHOOL" },
                      { label: "University", value: "UNIVERSITY" },
                      { label: "Rather not say", value: "RATHER_NOT_SAY" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={12}>
                <Form.Item
                  name="email"
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
              <Col md={6} xs={12}>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input.Password
                    // prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                  />
                </Form.Item>
              </Col>
              <Col md={6} xs={12}>
                <Form.Item
                  name="confirm"
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
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Input
                  // prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Phone Number"
                />
              </Form.Item>
              <Form.Item
                name="role_id"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
                hidden
              >
                <Input
                  // prefix={<UserOutlined className="site-form-item-icon" />}
                  value="USER"
                  // placeholder="Phone Number"
                />
              </Form.Item>
              <Col md={12} xs={12}>
                <Form.Item
                  name="address"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
              </Col>
              <Col md={4} xs={12}>
                <Form.Item
                  name="city"
                  rules={[
                    { required: true, message: "Please input your city!" },
                  ]}
                >
                  <Input placeholder="City" />
                </Form.Item>
              </Col>
              <Col md={4} xs={12}>
                <Form.Item
                  name="state"
                  rules={[
                    { required: true, message: "Please input your state!" },
                  ]}
                >
                  <Input placeholder="State" />
                </Form.Item>
              </Col>
              <Col md={4} xs={12}>
                <Form.Item
                  name="country"
                  rules={[
                    { required: true, message: "Please input your country!" },
                  ]}
                >
                  <Input placeholder="Country" />
                </Form.Item>
              </Col>
              <Col md={12} xs={12}>
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
              </Col>
              <Col md={12} xs={12}>
                <Form.Item
                  name="least_favorite_subject"
                  rules={[
                    {
                      required: true,
                      message: "Please input your least favorite subject!",
                    },
                  ]}
                >
                  <Select
                    loading={loader}
                    mode="multiple"
                    allowClear
                    placeholder="Least Favorite Subject"
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
                  name="industries_interest"
                  rules={[
                    {
                      required: true,
                      message: "Please input your least industries interest!",
                    },
                  ]}
                >
                  <Select
                    loading={industriesLoader}
                    mode="multiple"
                    allowClear
                    placeholder="Favorite Industries"
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
                  rules={[
                    {
                      required: true,
                      message: "Please input your least industries interest!",
                    },
                  ]}
                >
                  <Select
                    loading={industriesLoader}
                    mode="multiple"
                    allowClear
                    placeholder="Least Industries"
                    options={industries?.map((items: any) => {
                      return {
                        value: items?.id,
                        label: items?.name,
                      };
                    })}
                  />
                </Form.Item>
              </Col>
              <Col md={6} xs={12}>
                <Form.Item
                  name="my_atar"
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
              <Col md={6} xs={12}>
                <Form.Item
                  name="start_working"
                  rules={[
                    {
                      required: true,
                      message: "Please input your least start working!",
                    },
                  ]}
                >
                  <Select placeholder="Start Working" options={startWorking} />
                </Form.Item>
              </Col>
              <Col md={6} xs={12}>
                <Form.Item
                  name="newsletter"
                  rules={[
                    {
                      required: true,
                      message: "Please input your least newsletter!",
                    },
                  ]}
                >
                  <Select
                    placeholder="I am in"
                    options={[
                      {
                        label:
                          "Yes, send email/newsletter, IF the content matches my profile",
                        value: true,
                      },
                      { label: "No, maybe later.", value: false },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col md={6} xs={12}>
                <Form.Item
                  name="personality "
                  rules={[
                    {
                      required: true,
                      message: "Please input your  personality !",
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

              <Form.Item className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="signup-form-button w-100"
                  //   loading={loginLoader}
                >
                  Sign Up
                </Button>
              </Form.Item>
              <Form.Item>
                <div className="d-flex justify-content-center">
                  <Link to={RoutePaths.LOGIN} className="login-form-forgot ">
                    Back to Login
                  </Link>
                </div>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
