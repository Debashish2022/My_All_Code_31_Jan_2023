import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ProjectDashboard from "./pages/ProjectDashboard/ProjectDashboard";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Bids from "./pages/Bids/Bids";
// import BidsDetailsPage from "./pages/BidsDetailsPage/BidsDetailsPage";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Terms from "./pages/Terms/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Header from "./components/Header/Header";
import Contactus from "./pages/Contactus/Contactus";
import Faq from "./pages/Faq/Faq";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";
import { ToastContainer } from "react-toastify";
import PageNotAvailable from "./components/PagenotAvailable/PageNotAvailable";

export default function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProjectDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/bids" element={<Bids />} />
          <Route
            path="/loginregister"
            element={
              <AuthRoute>
                <LoginRegister />
              </AuthRoute>
            }
          />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<PageNotAvailable />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
