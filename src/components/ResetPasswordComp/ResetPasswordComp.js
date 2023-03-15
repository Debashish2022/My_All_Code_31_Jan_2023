import React, { useState } from "react";
import "./ResetPasswordComp.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apicaller } from "../../utils/api";
import Loader from "../Loader/Loader";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [isRevealPassword, setIsRevealPassword] = useState(false);
  // to sahow confirm password
  const [isRevealConfirmPassword, setisRevealConfirmPassword] = useState(false);

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;

  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const forgotPasswordFun = async () => {
    if (email.length === 0) {
      eToast("Enter Your Email");
      return false;
    } else if (!regEmail.test(email)) {
      eToast("Enter a valid Email");
      return false;
    } else {
      setLoading1(true);

      var data = {
        email: email,
      };

      await apicaller("user/forgot", data, "POST", null, "application/json")
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setLoading1(false);
            sToast("Otp Sent Successfully");
          }
        })
        .catch(() => eToast("Send Email Again!"))
        .finally(() => setLoading1(false));
      return true;
    }
  };

  const resetPassword = async () => {
    if (email.length === 0) {
      eToast("Enter Your Email");
      return false;
    } else if (otp.length === 0) {
      eToast("Enter the OTP sent to your Email");
      return false;
    } else if (pass.length < 5) {
      eToast("Enter your password");
      return false;
    } else if (confirmPass !== pass) {
      eToast("Confirm Password must be same Previous Password");
      return false;
    } else {
      setLoading2(true);

      var data = {
        email: email,
        password: pass,
        token: otp,
      };
      await apicaller(
        "user/reset-password",
        data,
        "PUT",
        null,
        "application/json"
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setLoading2(false);
            sToast("Password changed successfully");
            setEmail("");
            setPass("");
            setConfirmPass("");
            setOtp("");
          }
        })
        .catch((err) => {
          eToast(err?.response?.data?.response?.message);
        })
        .finally(() => {
          setLoading2(false);
        });

      return true;
    }
  };
  return (
    <>
      <div id="ResetPasswordTxt">Reset Your Password</div>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label id="loginInputLabels">
            Username or email address*{" "}
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="loginInputFields"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Row>
            <Col xs={7} md={9}></Col>
            <Col xs={5} md={3} style={{ textAlign: "center" }}>
              <Button id="sendOtpTxt" onClick={() => forgotPasswordFun()}>
                {loading1 ? (
                  <Loader animation="border" size="sm" variant="info" />
                ) : (
                  "Send OTP"
                )}
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label id="loginInputLabels">Enter OTP </Form.Label>
          <Form.Control
            type="text"
            id="loginInputFields"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          {/* <Row>
            <Col xs={9} md={10}></Col>
            <Col xs={3} md={2}>
              <div id="sendOtpTxt" >Verify</div>
            </Col>
          </Row> */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">New Password*</Form.Label>
          <div id="resetPasswordInputFields">
            <Row style={{ display: "flex", alignItems: "center" }}>
              <Col md={10} xs={3}>
                <Form.Control
                  type={isRevealPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </Col>
              <Col
                md={2}
                xs={3}
                onClick={() => setIsRevealPassword(!isRevealPassword)}
              >
                {isRevealPassword ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </Col>
            </Row>
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">Re-enter Password*</Form.Label>
          <div id="resetPasswordInputFields">
            <Row style={{ display: "flex", alignItems: "center" }}>
              <Col md={10} xs={9}>
                <Form.Control
                  type={isRevealConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter the password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </Col>
              <Col
                md={2}
                xs={3}
                onClick={() =>
                  setisRevealConfirmPassword(!isRevealConfirmPassword)
                }
              >
                {isRevealConfirmPassword ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </Col>
            </Row>
          </div>
        </Form.Group>
        <Button
          id="resetPasswordBtn"
          className="mt-1 mb-5"
          onClick={() => resetPassword()}
        >
          {loading2 ? (
            <Loader animation="border" size="sm" variant="light" />
          ) : (
            "Save"
          )}
        </Button>
      </Form>
    </>
  );
}
