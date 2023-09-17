import { Button, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "src/redux/actions/authAction";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/02.webp";
import "./SignInModal.scss";

interface SiginProp {
  isModalOpen: any;
  signUpHandler: any;
  handleOk: any;
  handleCancel: any;
  forgotHandler: Function;
}
const SignInModal = ({
  isModalOpen = false,
  signUpHandler,
  handleOk,
  handleCancel,
  forgotHandler,
}: SiginProp) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const callBack = () => {
    navigate("/");
    handleCancel();
    window.location.reload();
  };
  const onFinish = (values: any) => {
    dispatch(login(values, callBack));
  };

  const { isDark = false } = useSelector((store: any) => store.theme);

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      width={"50%"}
    >
      <section className="signup-modal ">
        <div
          className="signup-image d-flex justify-content-center align-items-center mb-5"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h2>Log In</h2>
        </div>
        <div
          className={` ${
            isDark ? "dark " : "light "
          } signup-screen__wrapper d-flex flex-column justify-content-center align-items-center`}
        >
          <Form
            name="signin"
            form={form}
            className="signup-form"
            style={{ width: "100%" }}
            layout="vertical"
            onFinish={onFinish}
          >
            <Row>
              <Col md={12} xs={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email/username!",
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="Email or Username" />
                </Form.Item>
              </Col>

              <Col md={12} xs={12}>
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

              <Col md={12} xs={12}>
                <Form.Item className="text-center">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="signup-form-button w-100"
                    //   loading={loginLoader}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Col>
              <Col md={12}>
                <div className="text-end">
                  <span
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      console.log("click");

                      forgotHandler();
                    }}
                  >
                    Forgot Password?
                  </span>
                </div>
                <p className="text-center">
                  New to Rilati?{" "}
                  <span
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={signUpHandler}
                  >
                    Signup
                  </span>
                </p>
              </Col>
            </Row>
          </Form>
        </div>
      </section>
    </Modal>
  );
};

export default SignInModal;
