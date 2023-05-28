import { useState } from "react";
import { Button, Form, Input, MenuProps, Modal } from "antd";
import { Dropdown } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/mainLogo.png";
import "./header.scss";

const Header = () => {
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
          <div className="mt-3 me-4" onClick={showModal}>
            <h5>Contact us</h5>
            <div className="menu-items mb-3">
              <h5>🏛️ Add A university</h5>
            </div>
            <div className="menu-items mb-3">
              <h5>💵 Add A Career</h5>
            </div>
            <div className="menu-items mb-3">
              <h5>🙂 Have a complaint?</h5>
            </div>
            <div className="menu-items mb-3">
              <h5>🧐 Have a suggestion?</h5>
            </div>
            <div className="menu-items mb-3">
              <h5>🤔 Other</h5>
            </div>
          </div>
          <div className="mt-3 me-4">
            <h5>Join us</h5>
            <div className="menu-items mb-3">
              <Link to="/login">👋 Log in</Link>
            </div>
          </div>
        </div>
      ),
    },
  ];
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
        <Form>
          <Form.Item>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item>
            <Input.TextArea rows={9} placeholder="Add your notes here" />
          </Form.Item>
          <Form.Item>
            <Button className="btn btn-primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </header>
  );
};

export default Header;
