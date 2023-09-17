import { Button, Form, Input, Modal, Spin, Steps, message, theme } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/mainLogo.png";
import "./ForgotModal.scss";
import { InputOTP } from "antd-input-otp";
import {
  resetPassword,
  verifyEmail,
  verifyOTP,
} from "src/redux/actions/authAction";

const ForgotModal = ({
  isModalOpen = false,
  handleOk,
  handleCancel,
  signInHandler,
}: any) => {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const dispatch = useDispatch<any>();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    code: "",
  });

  const onFinish = (values: any) => {
    dispatch(verifyEmail(values)).then((res: any) => {
      setCurrent(current + 1);
      setPayload({ ...payload, email: values?.email });
    });
  };
  const onOtpFinish = (value: any) => {
    let code: any = "";
    value?.otp?.map((item: any) => (code += item));
    dispatch(verifyOTP({ code })).then((res: any) => {
      setCurrent(current + 1);
      setPayload({ ...payload, code });
    });
  };

  const onPasswordFinish = (values: any) => {
    let obj = { ...payload, password: values?.password };
    dispatch(resetPassword(obj)).then((res: any) => {
      message.success("Password has been successfully changed!");
      signInHandler();
    });
  };

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
    backgroundColor: "#f3f3f3",
  };

  const { resetLoader = false } = useSelector((store: any) => store.auth);
  const enterEmail = (
    <Spin spinning={resetLoader}>
      <Form onFinish={onFinish} layout="vertical" form={form2}>
        <Form.Item
          name="email"
          label="Enter your email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please Input you email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button htmlType="submit" className="btn btn-primary">
          Send
        </Button>
      </Form>
    </Spin>
  );
  const changePassword = (
    <Spin spinning={resetLoader}>
      <Form onFinish={onPasswordFinish} layout="vertical" form={form1}>
        <Form.Item
          name="password"
          label="Enter new password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="c-password"
          label="Enter new password"
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
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button htmlType="submit" className="btn btn-primary">
          Confirm
        </Button>
      </Form>
    </Spin>
  );
  const enterOTP = (
    <Spin spinning={resetLoader}>
      <Form onFinish={onOtpFinish} layout="vertical" form={form}>
        <Form.Item
          name="otp"
          className="center-error-message"
          rules={[{ validator: async () => Promise.resolve() }]}
        >
          <InputOTP
            autoFocus
            __EXPERIMENTAL_autoSubmit={form}
            inputType="numeric"
            length={4}
          />
        </Form.Item>
        <Form.Item className="text-center">
          <Button htmlType="submit" className="btn btn-primary">
            Verify
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
  const steps = [
    {
      title: "Your Email",
      content: enterEmail,
    },
    {
      title: "Verify OTP",
      content: enterOTP,
    },
    {
      title: "Change your password",
      content: changePassword,
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      width={"50%"}
    >
      <section className="signup-modal">
        <div className="d-flex justify-content-center mb-3">
          <img
            src={logo}
            className="login-logo"
            alt="logo"
            style={{ width: "15%" }}
          />
        </div>
        <>
          <Steps current={current} items={items} />
          <div style={contentStyle} className="px-5 py-3">
            {steps[current].content}
          </div>
          <div style={{ marginTop: 24 }}>
            {/* {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )} */}
            {/* {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )} */}
          </div>
        </>
      </section>
    </Modal>
  );
};

export default ForgotModal;
