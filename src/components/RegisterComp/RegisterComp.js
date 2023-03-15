import React, { useState } from "react";
import "./RegisterComp.css";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { apicaller } from "../../utils/api";
import Loader from "../Loader/Loader";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai";
import { getUserDob, setUserDob } from "../../redux/Slice/userSlice";
import PhoneInput, {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";

export default function RegisterComp() {
  const [slotDate, setSlotDate] = useState("");
  const [startdate, setStartdate] = useState(new Date());
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNum, setMobileNum] = useState();
  const [panNum, setPanNum] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const userDob = useSelector(getUserDob);
  const dispatch = useDispatch();

  // to show password
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  // to sahow confirm password
  const [isRevealConfirmPassword, setisRevealConfirmPassword] = useState(false);
  // to show loader
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const regPhoneno = /^\d{10}$/;

  const FormatMobilenumber = formatPhoneNumberIntl(mobileNum);

  // const validMobileNum = isValidPhoneNumber(mobileNum);

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
    if (firstname.length === 0) {
      eToast("Enter your first name");
      return false;
    } else if (lastname.length === 0) {
      eToast("Enter your last name");
      return false;
    } else if (email.length === 0) {
      eToast("Please enter your Email");
    } else if (!regEmail.test(email)) {
      eToast("Enter a valid Email");
      return false;
    } else if (password.length <= 5) {
      eToast("Enter your password");
      return false;
    } else if (confirmPassword !== password) {
      eToast("Confirm Password must be same above Password");
      return false;
    } else if (FormatMobilenumber.length <= 3) {
      eToast("Enter your mobile number");
      return false;
    } else if (!(mobileNum && isValidPhoneNumber(mobileNum))) {
      eToast("Enter a valid mobile number");
      return false;
    } else if (panNum.length === 0) {
      eToast("Enter your PAN number");
      return false;
    } else if (panNum.length !== 10) {
      eToast("Enter Valid PAN Number");
      return false;
    } else if (companyName.length === 0) {
      eToast("Enter the name of Your Company");
      return false;
    } else if (designation.length === 0) {
      eToast("Enter Your Designation");
      return false;
    } else if (startdate.length === 0) {
      eToast("Choose Date of Birth");
      return false;
    } else {
      return true;
    }
  }

  console.log("start date in register comp ", startdate);

  const RegisterNewUser = async () => {
    if (validation()) {
      setIsLoading(true);
      const data = {
        email: email,
        password: password,
        firstName: firstname,
        lastName: lastname,
        mobileNumber: mobileNum,
        companyName: companyName,
        // dob: dob,
        dob: startdate,
        panCard: panNum,
        designation: designation,
      };

      await apicaller("user/create", data, "POST", null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            console.log("registered new user is ", res?.data);
            sToast("Account created successfully! Please Login Now");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setFirstname("");
            setLastname("");
            setMobileNum("");
            setPanNum("");
            setCompanyName("");
            setDesignation("");
            setDob("");
            // dispatch(setUserDob(res.data.result.dob));
            setStartdate("");
          }
        })
        .catch((error) => {
          eToast(error?.response?.data?.message);
          console.log("error while register is ", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const cancelSignUp = () => {
    if (window.confirm("Are You Sure Want To Reset This Form")) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFirstname("");
      setLastname("");
      setMobileNum("");
      setPanNum("");
      setCompanyName("");
      setDesignation("");
      setDob("");
    }
  };

  return (
    <>
      <div id="registerTxt">Register</div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">First Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            id="registerInputFields"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">Last Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            id="registerInputFields"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">Email address*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="registerInputFieldsEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">Password*</Form.Label>
          <div id="registerPasswordInputFields">
            <Row style={{ display: "flex", alignItems: "center" }}>
              <Col md={11} xs={10}>
                <Form.Control
                  type={isRevealPassword ? "text" : "password"}
                  placeholder="Please enter min 5 characters"
                  id="passwordField"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col
                md={1}
                xs={2}
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
          <Form.Label id="registerInputLabels">Confirm Password*</Form.Label>
          <div id="registerPasswordInputFields">
            <Row style={{ display: "flex", alignItems: "center" }}>
              <Col md={11} xs={10}>
                <Form.Control
                  style={{ paddingRight: "0px" }}
                  type={isRevealConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  id="passwordField"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Col>
              <Col
                md={1}
                xs={2}
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
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">Mobile Number*</Form.Label>
          {/* <Form.Control
            type="text"
            placeholder="Enter Mobile Number"
            maxLength={10}
            id="registerInputFields"
            value={mobileNum}
            onChange={(e) => setMobileNum(e.target.value)}
          /> */}
          <div id="registerInputFieldsPhoneDiv">
            <PhoneInput
              placeholder="Select the country"
              defaultCountry="US"
              id="registerInputFieldsPhone"
              value={mobileNum}
              onChange={setMobileNum}
            />
          </div>

          {/* <div>{mobileNum}</div>
          <div>FormatMobilenumber: {FormatMobilenumber}</div> */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">PAN*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter PAN Number"
            id="registerInputFields"
            value={panNum}
            onChange={(e) => setPanNum(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">Company Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Company Name"
            id="registerInputFields"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">Designation*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter here..."
            id="registerInputFields"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="registerInputLabels">DOB* </Form.Label>
          {/* <Form.Control
            type="date"
            placeholder="mm/dd/yyyy"
            id="registerInputFields"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          /> */}
          <DatePicker
            placeholderText="Please select a date"
            selected={startdate}
            showYearDropdown
            scrollableYearDropdown
            value={startdate}
            onChange={(date) => {
              setStartdate(date);
              // const z =
              //   date.getMonth() +
              //   1 +
              //   "-" +
              //   date.getDate() +
              //   "-" +
              //   date.getFullYear();
              // setSlotDate(z);
            }}
            id="registerInputFieldsDob"
            dateFormat="MM-dd-yyyy"
          />
        </Form.Group>
      </Form>

      <div id="registerParaTxt">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our{" "}
        <span onClick={() => navigate("/privacypolicy")} id="privacyPolicyTxt">
          privacy policy
        </span>
        .
      </div>
      <Row className="mt-3 mb-5">
        <Col sm={2}></Col>
        <Col sm={3} xs={6}>
          <Button id="registerBtn" onClick={() => RegisterNewUser()}>
            {isLoading ? (
              <Loader animation="border" size="sm" variant="light" />
            ) : (
              "Submit"
            )}
          </Button>
        </Col>
        <Col sm={3} xs={6}>
          <Button
            id="resetBtn"
            onClick={() => cancelSignUp()}
            variant="danger"
            disabled={
              firstname !== "" ||
              lastname !== "" ||
              email !== "" ||
              password !== "" ||
              mobileNum !== ""
                ? false
                : true
            }
          >
            Reset
          </Button>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </>
  );
}
