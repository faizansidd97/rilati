import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import thumbnail1 from "../../../assets/images/thumbnail (1).jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../assets/images/mainLogo.png";

import "./ResetPassword.scss";

const ResetPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const { isDark } = useSelector((storeState: any) => storeState.theme);
  return (
    <section
      className="login-screen d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url("${thumbnail1}")` }}
    >
      <div className="overlay d-flex justify-content-center align-items-center">
        <div
          className={` ${
            isDark ? "dark " : "light "
          } login-screen__wrapper d-flex flex-column justify-content-center align-items-center`}
        >
          <img src={logo} className="login-logo" />
          <h2 style={!isDark ? { color: "black" } : { color: "white" }}>
            Reset Password
          </h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button w-100"
                onClick={() => navigate("/login")}
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
