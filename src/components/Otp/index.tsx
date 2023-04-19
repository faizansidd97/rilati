import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./Otp.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Otp(props: any) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  return (
    <div className="otp-modal">
      <h2>We have sent you an OTP code on Email</h2>
      <p>Please enter to verify</p>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <Button
        className="btn btn-primary"
        onClick={() => {
          props.modalClose(false);
          navigate("/reset-password");
        }}
      >
        Confirm
      </Button>
    </div>
  );
}
