import HomeBanner from "src/components/HomeBanner";
import "./Home.scss";
import Logos from "src/components/Logos";

import ContentCards from "src/components/ContentCards";
import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";
import Header from "src/components/header";
import { useState } from "react";
import SignUpModal from "src/components/SignUpModal";
import SignInModal from "src/components/SignInModal";
import ForgotModal from "src/components/ForgotModal";
// import { BiUpArrow } from "react-icons/bi";

const Home = () => {
  const [signUpToggle, setSignUpToggle] = useState(false);
  const [signInToggle, setSignInToggle] = useState(false);
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [forgotToggle, setForgotToggle] = useState(false);
  const signUpHandler = () => {
    setSignInToggle(false);
    setSignUpToggle(true);
  };
  const forgotHandler = () => {
    setSignInToggle(false);
    setForgotToggle(true);
  };
  const signInHandler = () => {
    setSignInToggle(false);
    setForgotToggle(true);
  };
  const onProfileEdit = () => {
    setIsProfileEdit(true);
    setSignUpToggle(true);
  };

  return (
    <>
      <Header
        setSignUpToggle={setSignUpToggle}
        setSignInToggle={setSignInToggle}
        onProfileEdit={onProfileEdit}
      />
      <Layout className="site-layout">
        <Content>
          <HomeBanner />
          <Logos />
          <ContentCards setSignUpToggle={setSignUpToggle} />
        </Content>
      </Layout>
      <SignUpModal
        isModalOpen={signUpToggle}
        handleOk={() => {
          setSignUpToggle(false);
          setIsProfileEdit(true);
        }}
        handleCancel={() => {
          setSignUpToggle(false);
          setIsProfileEdit(true);
        }}
        signInOpen={() => setSignInToggle(true)}
        footer={false}
        isEdit={isProfileEdit}
      />

      <SignInModal
        isModalOpen={signInToggle}
        handleOk={() => setSignInToggle(false)}
        handleCancel={() => setSignInToggle(false)}
        // footer={false}
        signUpHandler={signUpHandler}
        forgotHandler={forgotHandler}
      />
      <ForgotModal
        isModalOpen={forgotToggle}
        handleOk={() => setForgotToggle(false)}
        handleCancel={() => setForgotToggle(false)}
        footer={false}
        signUpHandler={signUpHandler}
        signInHandler={signInHandler}
      />
    </>
  );
};
export default Home;
