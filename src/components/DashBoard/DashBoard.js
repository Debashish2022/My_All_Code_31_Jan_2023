import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Modal,
} from "react-bootstrap";
import "./DashBoard.css";
import profile from "../../assets/DashboardComp/dashboardimg.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserId,
  getUserToken,
  getUserFirstname,
  getUserLastname,
  getUserPannumber,
  getUserDob,
  getCompanyname,
  getUserDesignation,
} from "../../redux/Slice/userSlice";

import {
  setUserFirstname,
  setUserLastname,
  setUserCompanyname,
  setUserDesignation,
  setUserPannumber,
  setUserDob,
} from "../../redux/Slice/userSlice";

import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { apicaller } from "../../utils/api";
import { FiEdit } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DashBoard() {
  // to show edit profile modal(line )
  const [showModal, setShowModal] = useState(false);

  // loader
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoadingAllData, setIsLoadingAllData] = useState(true);

  // for testimonial
  const [fullName, setFullName] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [selectedPhotoImgpath, setSelectedPhotoImgpath] = useState();
  const [testimonials, setTestimonials] = useState("");

  const [empty, setEmpty] = useState("");

  // get all projects by user
  const [getallProjectsByUser, setGetallProjectsByUser] = useState([]);

  // get all finalized projects
  const [getFinalisedProjects, setGetFinalisedProjects] = useState([]);

  // data from redux
  const token = useSelector(getUserToken);
  const userId = useSelector(getUserId);
  const getfirstName = useSelector(getUserFirstname);
  const getlastName = useSelector(getUserLastname);
  const getpanNumber = useSelector(getUserPannumber);
  const getDob = useSelector(getUserDob);
  const getCompany = useSelector(getCompanyname);
  const getDesignation = useSelector(getUserDesignation);

  // console.log('get dob from redux ', getDob?.toISOString()?.slice(0, 10));

  useEffect(() => {
    getallProjectsByUserFun();
    getFinalisedProjectsFun();
  }, []);

  const getallProjectsByUserFun = () => {
    apicaller(`project/get/${userId}`, null, "get", token)
      .then((res) => {
        setGetallProjectsByUser(res?.data?.result);
        setIsLoadingAllData(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getFinalisedProjectsFun = () => {
    apicaller(
      `project/finalize-projects?id=${userId}`,
      null,
      "GET",
      token,
      null
    ).then((res) => {
      setIsLoadingAllData(false);
      setGetFinalisedProjects(res?.data?.result);
    });
  };

  const getDobFromRedux = new Date(getDob).toISOString().slice(0, 10);
  const newDay = getDobFromRedux?.slice(8, 10);
  const newMonth = getDobFromRedux?.slice(5, 7);
  const newYear = getDobFromRedux?.slice(0, 4);

  const newDob = [newMonth, newDay, newYear].join("-");

  // for toast
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

  //  select photo for testimonial
  const SelectPhotoForTestimonialFun = (e) => {
    console.log(e?.target?.files);
    setSelectedPhoto(e?.target?.files[0]);
    setEmpty(e.target.value);
  };

  // upload selected photo for testimonial
  const uploaPhotoForTestimonial = async () => {
    if (selectedPhoto.length === 0) {
      eToast("Select an Image for Testimonial");
      return false;
    } else {
      setIsLoading(true);
      var data = new FormData();
      data.append("img", selectedPhoto);

      await apicaller(
        "upload/image",
        data,
        "POST",
        token,
        "multipart/form-data"
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setIsLoading(false);
            sToast("Image Uploaded!");
            const img_path = res?.data?.url;
            setSelectedPhotoImgpath(img_path);
          }
        })
        .catch((err) => {
          eToast("Couldn't uploaded!");
          console.log("error while image upload is ", err);
        })
        .finally(() => setIsLoading(false));
    }
  };

  // submit datas for testimonial
  const SubmitTestimonialFun = async () => {
    if (fullName.length < 3) {
      eToast("Enter Full Name");
      return false;
    } else if (selectedPhoto.length === 0) {
      eToast("Select an Image for testimonial");
      return false;
    } else if (selectedPhotoImgpath === undefined) {
      eToast("Upload The Image");
      return false;
    } else if (testimonials.length < 5) {
      eToast("Share your testimonials");
      return false;
    } else if (testimonials.length > 180) {
      eToast("Testimonials should contain max of 200 characters");
      return false;
    } else {
      setIsLoading1(true);
      var data = {
        name: fullName,
        photo: selectedPhotoImgpath,
        testimonial: testimonials,
      };

      await apicaller(
        "testimonial/add",
        data,
        "POST",
        token,
        "application/json"
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setIsLoading1(false);
            sToast("Testimonial added!");
            setFullName("");
            setSelectedPhoto("");
            setTestimonials("");
            setEmpty("");
          }
        })
        .catch((err) => {
          eToast("Couldn't Added!");
          console.log("error in add testimonial is ", err);
        })
        .finally(() => setIsLoading1(false));
    }
  };

  return (
    <div>
      {isLoadingAllData ? (
        <div
          style={{
            marginTop: 200,
            marginBottom: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader animation="border" size="md" variant="secondary" />
        </div>
      ) : (
        <Container>
          <Row id="dahboard3">
            <Col id="dahboard1" md={2} sm={4} xs={4} lg={2}>
              {/* <Image src={profile} /> */}
              <div id="profileImgDiv">
                {getfirstName?.slice(0, 1)}
                {getlastName?.slice(0, 1)}
              </div>
            </Col>
            <Col id="dahboard2" md={5} sm={8} xs={8} lg={5}>
              <Row id="dahboard4">
                <Col md={6} xs={10} style={{ padding: "0px" }}>
                  {getfirstName} {getlastName}
                </Col>
                <Col md={3} xs={2}>
                  <Button
                    id="editBtnDashboard"
                    onClick={() => setShowModal(true)}
                  >
                    <FiEdit />
                  </Button>
                </Col>
              </Row>
              <Row id="dashboard5">
                {getDesignation}, {getCompany}
              </Row>
              <Row id="dashboard5">DOB: {newDob}</Row>
              {/* <Row id="dashboard5">DOB: {new Date(getDobFromRedux).toLocaleDateString("en-US")}</Row> */}
              <Row id="dashboard5">PAN NUMBER : {getpanNumber}</Row>
            </Col>
            <Col id="dahboard2" md={4} sm={12} xs={12} lg={4}>
              <Row id="dashboard6">Bid Records</Row>
              <Row id="dashboard5">
                Total Project Bids : {getallProjectsByUser?.length}
              </Row>
              <Row id="dashboard5">
                Finalised Projects : {getFinalisedProjects?.length}
              </Row>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={2} lg={3}></Col>
            <Col lg={6} md={8}>
              <div id="testimonialTxt">Testimonial Section</div>
              <div id="testimonialParaTxt">
                We would love to hear your experience, about our product ,
                please share your thoughts{" "}
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label id="inputLabelsDashboard">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    id="addInputFieldsDashboard"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </Form.Group>

                <Form.Label id="inputLabelsDashboard">
                  Upload your photo
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="file"
                        accept="application/png, application/jpg, application/jpeg"
                        id="addInputFieldsDashboard"
                        value={empty}
                        onChange={SelectPhotoForTestimonialFun}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={3} md={4} xs={4}>
                    <Button
                      id="uploadBtnDashboard"
                      onClick={() => uploaPhotoForTestimonial()}
                    >
                      {isLoading ? (
                        <Loader animation="border" size="sm" variant="light" />
                      ) : (
                        "Upload"
                      )}
                    </Button>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label id="inputLabelsDashboard">
                    Share your testimonials here
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    rows={3}
                    id="addInputFieldsDashboard"
                    value={testimonials}
                    onChange={(e) => setTestimonials(e.target.value)}
                  />
                </Form.Group>

                <Button
                  id="uploadBtnDashboard"
                  onClick={() => SubmitTestimonialFun()}
                >
                  {isLoading1 ? (
                    <Loader animation="border" size="sm" variant="light" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form>
            </Col>
            <Col md={2} lg={3}></Col>
          </Row>
          <EditProfileModal
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </Container>
      )}
    </div>
  );
}

// Edit Profile Modal
function EditProfileModal(props) {

  // data from redux
  const fname = useSelector(getUserFirstname);
  const lname = useSelector(getUserLastname);
  const pannumber = useSelector(getUserPannumber);
  const dob = useSelector(getUserDob);
  const newDob = new Date(dob);
  const company = useSelector(getCompanyname);
  const design = useSelector(getUserDesignation);
  
  const userIdForEditProfile = useSelector(getUserId);
  const userTokenForEditProfile = useSelector(getUserToken);

  const [firstname, setFirstname] = useState(fname);
  const [lastname, setLastname] = useState(lname);
  const [panNum, setPanNum] = useState(pannumber);
  const [companyName, setCompanyName] = useState(company);
  const [designation, setDesignation] = useState(design);
  const [startdate, setStartdate] = useState(newDob);

  // to show loader
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

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
    if (firstname?.length === 0) {
      eToast("Enter your first name");
      return false;
    } else if (lastname?.length === 0) {
      eToast("Enter your last name");
      return false;
    } else if (panNum?.length === 0) {
      eToast("Enter your PAN number");
      return false;
    } else if (panNum?.length !== 10) {
      eToast("Enter Valid PAN Number");
      return false;
    } else if (startdate?.length === 0) {
      eToast("Choose Date of Birth");
      return false;
    } else if (companyName?.length === 0) {
      eToast("Enter the name of Your Company");
      return false;
    } else if (designation?.length === 0) {
      eToast("Enter Your Designation");
      return false;
    } else {
      return true;
    }
  }

  const updateUser = async (e) => {
    if (validation()) {
      setIsLoading(true);
      const data = {
        firstName: firstname,
        lastName: lastname,
        companyName: companyName,
        dob: startdate,
        panCard: panNum,
        designation: designation,
      };

      await apicaller(
        `user/update/${userIdForEditProfile}`,
        data,
        "PUT",
        userTokenForEditProfile,
        "application/json"
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            console.log("updated datas of user is ", res?.data);
            sToast("Profile Updated");
            props.onHide();
            dispatch(setUserFirstname(firstname));
            dispatch(setUserLastname(lastname));
            dispatch(setUserPannumber(panNum));
            dispatch(setUserDob(startdate));
            dispatch(setUserCompanyname(companyName));
            dispatch(setUserDesignation(designation));
          }
        })
        .catch((error) => {
          eToast("Sorry! Couldn't Update");
          console.log("error while profile updation is ", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="updateProfileTxt"
        >
          Update Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label id="inputLabelsDashboard">First Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  id="addInputFieldsDashboard"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label id="inputLabelsDashboard">Last Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  id="addInputFieldsDashboard"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label id="inputLabelsDashboard">PAN*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PAN Number"
                  id="addInputFieldsDashboard"
                  value={panNum}
                  onChange={(e) => setPanNum(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label id="inputLabelsDashboard">DOB* </Form.Label>
                <DatePicker
                  placeholderText="Select date"
                  showYearDropdown
                  scrollableYearDropdown
                  selected={startdate}
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
                  id="addDobDashboard"
                  dateFormat="MM-dd-yyyy"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label id="inputLabelsDashboard">Company Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Company Name"
                  id="addInputFieldsDashboard"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label id="inputLabelsDashboard">
                  Designationation*
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter here..."
                  id="addInputFieldsDashboard"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button id="editBtnDashboard" onClick={() => updateUser()}>
          {isLoading ? (
            <Loader animation="border" size="sm" variant="light" />
          ) : (
            "Update"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
