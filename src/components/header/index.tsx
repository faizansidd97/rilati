import { useState } from "react";
import { Button, Form, Input, MenuProps, Modal, message } from "antd";
import { Dropdown } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/mainLogo.png";
import "./header.scss";
import { senMail } from "src/redux/actions/mailActions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/es/form/Form";

const Header = () => {
  const dispatch = useDispatch<any>();
  const [form] = useForm();
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="d-flex justify-content-between">
          <div className="mt-3 me-4">
            <h5>Contact us</h5>
            <div
              className="menu-items mb-3"
              onClick={() => {
                showModal();
                form.setFieldsValue({ flag: "University" });
              }}
            >
              <h5>🏛️ Add A university</h5>
            </div>
            <div
              className="menu-items mb-3"
              onClick={() => {
                showModal();
                form.setFieldsValue({ flag: "Career" });
              }}
            >
              <h5>💵 Add A Career</h5>
            </div>

            <div
              className="menu-items mb-3"
              onClick={() => {
                showModal();
                form.setFieldsValue({ flag: "Suggestion" });
              }}
            >
              <h5>🧐 Have a suggestion?</h5>
            </div>
            <div
              className="menu-items mb-3"
              onClick={() => {
                showModal();
                form.setFieldsValue({ flag: "Other" });
              }}
            >
              <h5>🤔 Other</h5>
            </div>
          </div>
          {/* <div className="mt-3 me-4">
            <h5>Join us</h5>
            <div className="menu-items mb-3">
              <Link to="/login">👋 Log in</Link>
            </div>
          </div> */}
        </div>
      ),
    },
  ];
  const onFinish = (value: any) => {
    dispatch(senMail(value))
      .then(() => {
        form.resetFields();
        setIsModalOpen(false);
        message.success("Your Query has been submitted");
      })
      .catch((e: any) => {
        message.error("Something went wrong");
      });
  };
  const { loader } = useSelector((store: any) => store.mail);
  return (
    <header className="header">
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()} style={{ color: "#000" }}>
          <img src={logo} alt="logo" width={50} />
          <MdKeyboardArrowDown color="#fff" size={30} />
        </a>
      </Dropdown>
      <Modal
        title="Contacting Us"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form onFinish={onFinish} form={form}>
          <Form.Item name="email" rules={[{ type: "email", required: true }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item name="description" rules={[{ required: true }]}>
            <Input.TextArea rows={9} placeholder="Add your notes here" />
          </Form.Item>
          <Form.Item name="flag" hidden>
            <Input.TextArea rows={9} placeholder="Add your notes here" />
          </Form.Item>
          <Form.Item>
            <Button
              loading={loader}
              htmlType="submit"
              className="btn btn-primary"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </header>
  );
};

export default Header;
