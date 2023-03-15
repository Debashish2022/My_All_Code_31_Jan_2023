import React, { useState } from "react";
import "./LoginComp.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import ResetPassword from "../ResetPasswordComp/ResetPasswordComp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { apicaller } from "../../utils/api";
import {
  setUserEmail,
  setUserPassword,
  setUserToken,
  setUserFirstname,
  setUserLastname,
  setUserCompanyname,
  setUserDesignation,
  setUserId,
  setUserPannumber,
  setUserMobilenumber,
  setUserDob
} from "../../redux/Slice/userSlice";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginComp() {
  const [showRestPasswordComp, setShowResetPasswordComp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // to show password
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  // to show loader
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  function validation() {
    if (!regEmail.test(email)) {
      eToast("Enter a valid Email Id");
      return false;
    } else if (password.length === 0) {
      eToast("Enter a valid Password");
      return false;
    } else {
      return true;
    }
  }

  const UserLoginFun = async () => {
    if (validation()) {
      setIsLoading(true);
      const data = {
        email: email,
        password: password,
      };

      await apicaller("user/login", data, "POST", null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            var decoded = jwt_decode(res?.data?.result?.token);
            console.log("my token is ", decoded.data);

            const user = decoded.data;
            const token = res?.data?.result?.token;

            console.log("Userdata after login is ", JSON.stringify(user));
            dispatch(setUserToken(token));
            dispatch(setUserEmail(user?.email));
            dispatch(setUserPassword(user?.password));
            dispatch(setUserId(user?._id));
            dispatch(setUserFirstname(user?.firstName));
            dispatch(setUserLastname(user?.lastName));
            dispatch(setUserPannumber(user?.panCard));
            dispatch(setUserMobilenumber(user?.mobileNumber));
            dispatch(setUserCompanyname(user?.companyName));
            dispatch(setUserDesignation(user?.designation));
            dispatch(setUserDob(user?.dob));

            if (token) {
              navigate("/");
              sToast("Welocome to Lexone! ");
            }
          }
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
          console.log("error while login is ", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div id="loginTxt">Login</div>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label id="loginInputLabels">
            Username or email address*{" "}
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="loginInputFieldsEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label id="loginInputLabels">Password* </Form.Label>
          <div id="loginPasswordInputFields">
            <Row style={{ display: "flex", alignItems: "center" }}>
              <Col md={11} xs={10}>
                <Form.Control
                  type={isRevealPassword ? "text" : "password"}
                  placeholder="Password..."
                  id="loginPasswordInputField"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col
                md={1}
                xs={2}
                onClick={() => setIsRevealPassword(!isRevealPassword)}
              >
                <div>
                {isRevealPassword ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
                </div>
              </Col>
            </Row>
          </div>
        </Form.Group>
        <Button id="loginBtn" className="mt-3" onClick={() => UserLoginFun()}>
          {isLoading ? <Loader animation="border" size="sm" variant="light" /> : "Login"}
        </Button>
        <div
          className="mt-3 ms-2"
          id="lostYourPasswordTxt"
          onClick={() => setShowResetPasswordComp(!showRestPasswordComp)}
        >
          Lost your password ?
        </div>
      </Form>

      {/* to show reset password component */}
      {showRestPasswordComp ? <ResetPassword /> : null}
    </>
  );
}
