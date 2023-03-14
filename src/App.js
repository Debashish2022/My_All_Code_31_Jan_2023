import React from "react";
import Header from "./components/Header/Header";
import Header2 from "./components/Header2/Header2";
import Attendance from "./pages/Attendance/Attendance";
import Dashboard from "./pages/Dashboard/Dashboard";
import Branchdetails from "./pages/Branchdetails/Branchdetails";
import Login from "./pages/Login/Login";
import LiveclassRecording from "./pages/ManageLiveClassRecording/LiveclassRecording";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseDetailsNewPage from "./pages/CourseDetailsNewPage/CourseDetailsNewPage";
import Student_Analysis from "./pages/Student_Analysis/Student_Analysis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LiveClasses from "./components/LiveClasses/LiveClasses";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { getUserToken } from "./Redux/Slice/UserSlice";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import AuthRoute from "./components/AuthRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageSubadmin from "./pages/ManageSubadmin/ManageSubadmin";
import SubadminDetails from "./pages/SubadminDetails/SubadminDetails";
import StudentList from "./pages/StudentList/StudentList";
import StudentDetails from "./pages/StudentDetails/StudentDetails";
import EnrolledCourseDetails from "./pages/EnrolledCourseDetails/EnrolledCourseDetails";
import Aboutus from "./pages/Aboutus/Aboutus";
import Privacy from "./pages/Privacy/Privacy";
import PrivacyPolicyEdit from "./pages/PrivacyPolicyEdit/PrivacyPolicyEdit";

export default function App() {
  const token = useSelector(getUserToken);

  return (
    <>
      <ToastContainer />
      <Router>
        {token ? <Header /> : null}
        <Routes>
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<CourseDetails />} />
            <Route path="/liveclass" element={<LiveClasses />} />
            <Route
              path="/liveclassrecordings"
              element={<LiveclassRecording />}
            />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/branchdetails" element={<Branchdetails />} />
            <Route path="/coursedetails" element={<CourseDetailsNewPage />} />
            <Route path="/studentanalysis" element={<Student_Analysis />} />
            <Route
              path="/enrolledcoursedetails"
              element={<EnrolledCourseDetails />}
            />
            <Route path="/managesubadmin" element={<ManageSubadmin />} />
            <Route path="/subadmindetail" element={<SubadminDetails />} />
            <Route path="/studentlist" element={<StudentList />} />
            <Route path="/studentdetail" element={<StudentDetails />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="PrivacyPolicyEdit" element={<PrivacyPolicyEdit />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}
