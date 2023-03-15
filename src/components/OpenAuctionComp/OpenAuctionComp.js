import React, { useState, useEffect } from "react";
import "./OpenAuctionComp.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import axios from "axios";

export default function OpenAuctionComp() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [biddingCover, setBiddingCover] = useState([]);
  const [biddingCoverImgPath, setBiddingCoverImgPath] = useState();
  const [bidStartDate, setBidStartDate] = useState("");
  const [bidEndDate, setBidEndDate] = useState("");
  const [minimumBidPrice, setMinimumBidPrice] = useState("");
  const [bidSheetFile, setBidSheetFile] = useState([]);
  const [bidSheetImgPath, setBidSheetImgPath] = useState();
  const [auctiondescription, setAuctiondescription] = useState("");
  const [coverimg , setCoverimg] = useState("");
  const [biddingSheet, setBiddingSheet] = useState("");

  // loaders
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoadingAllData, setIsLoadingAllData] = useState(false);

  const user = useSelector((state) => state.user);
  const userToken = user.token;
  const userId = user._id;

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

  //  select cover image bidding field start
  const selectcoverImageBidding = (e) => {
    console.log(e.target.files);
    setBiddingCover(e.target.files[0]);
    setCoverimg(e.target.value);
  };

  // select cover image bidding field upload
  const selectCoverImageBiddingUpload = async () => {
    console.log("selected cover img", biddingCover);

    if (biddingCover.length === 0) {
      eToast("Please Select a Cover Image");
      return false;
    } else {
      setIsLoading1(true);

      var FormData = require("form-data");

      const data = new FormData();
      data.append("img", biddingCover);

      if (userToken) {
        await apicaller(
          "upload/image",
          data,
          "POST",
          userToken,
          "multipart/form-data"
        )
          .then((res) => {
            if (res.status === 201 || res.status === 200) {
              setIsLoading1(false);

              sToast("Cover image uploaded");

              const img_path = res?.data?.url;
              setBiddingCoverImgPath(img_path);
            }
          })
          .catch((err) => {
            console.log("error while Cover image upload is ", err);
            eToast("Couldn't uploaded!")
          })
          .finally(() => setIsLoading1(false));
      }
      return true;
    }
  };

  //  select bidding sheet file
  const selectBiddingSheetFile = (e) => {
    console.log(e?.target?.files);
    setBidSheetFile(e?.target?.files[0]);
    setBiddingSheet(e.target.value);
  };

  // upload bidding sheet file
  const uploadBiddingSheetFile = async () => {
    console.log("selected bid sheet", bidSheetFile);

    if (bidSheetFile.length === 0) {
      eToast("Please Select Bidding Sheet");
      return false;
    } else {
      setIsLoading2(true);

      var data = new FormData();
      data.append("document", bidSheetFile);

      if (userToken) {
        await apicaller(
          "upload/document",
          data,
          "POST",
          userToken,
          "multipart/form-data"
        )
          .then((res) => {
            if (res.status === 201 || res.status === 200) {
              setIsLoading2(false);

              sToast("Bidding Sheet Uploaded!");

              const file_path = res?.data?.url;
              setBidSheetImgPath(file_path);
            }
          })
          .catch((err) => {
            console.log("error while bidsheet upload is ", err);
            eToast("Couldn't uploaded!");
          })
          .finally(() => setIsLoading2(false));
      }
      return true;
    }
  };

  // form validation
  function submitDataValidation() {
    if (name.length <= 3) {
      eToast("Enter your Project Name");
      return false;
    } else if (category.length <= 3) {
      eToast("Enter Project Category");
      return false;
    } else if (biddingCover?.length === 0) {
      eToast("Please Upload a Cover Image");
      return false;
    }else if(biddingCoverImgPath === undefined){
        eToast("Please Upload The Cover Image");
        return false;
    }else if (bidStartDate.length === 0) {
      eToast("Please Enter BidStartDate");
      return false;
    } else if (bidEndDate.length === 0) {
      eToast("Please Enter BidEndDate");
      return false;
    } else if (minimumBidPrice.length === 0) {
      eToast("Please Enter MinimumBidPrice");
      return false;
    } else if (bidSheetFile?.length === 0) {
      eToast("Please Upload Bidding Sheet");
      return false;
    } else if(bidSheetImgPath === undefined){
      eToast("Please Upload The Bidding Sheet");
      return false;
    } else if (auctiondescription.length === 0) {
      eToast("Please Enter The Description");
      return false;
    } else {
      return true;
    }
  }

  const submitData = async (e) => {
    // e.preventDefault();

    if (submitDataValidation()) {
      setIsLoadingAllData(true);
      const data = {
        name: name,
        startDate: bidStartDate,
        endDate: bidEndDate,
        category: category,
        image: biddingCoverImgPath,
        price: minimumBidPrice,
        sheet: bidSheetImgPath,
        descriptions: auctiondescription,
        createdBy: userId,
      };

      if (userToken) {
        await apicaller(
          "project/create",
          data,
          "POST",
          userToken,
          "application/json"
        )
          .then((res) => {
            if (res.status === 201 || res.status === 200) {
              setIsLoadingAllData(false);
              sToast("Auction Created! ");
              console.log("open auction datas ", JSON.stringify(res?.data));
              setName("");
              setCategory("");
              setBiddingCover("");
              setMinimumBidPrice("");
              setBidStartDate("");
              setBidEndDate("");
              setBidSheetFile("");
              setAuctiondescription("");
              setCoverimg("");
              setBiddingSheet("");
            }
          })
          .catch((err) => {
            eToast("Sorry! Couldn't create ");
            console.log("error while open auction is ", err);
          })
          .finally(() => setIsLoadingAllData(false));
      }
    }
  };

  return (
    <div>
      <Container>
        <Row id="OpenAuction3">
          <Col></Col>
          <Col md={10}>
            <Row className=" mt-3 mb-3">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="OpenAuction8">Project Name</Form.Label>
                  <Form.Control
                    id="OpenAuction2"
                    type="text"
                    placeholder="Enter Project Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="OpenAuction8">Category</Form.Label>
                  <Form.Control
                    id="OpenAuction2"
                    type="text"
                    placeholder="e.g. Real Estate Services"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Label>Cover image for Project Bid*</Form.Label>
            <Row>
              <Col lg={10} md={9} xs={8}>
                <Form.Group className="mb-3">
                  <Form.Control
                    id="OpenAuction2"
                    type="file"
                    value={coverimg}
                    accept="application/png, application/jpg, application/jpeg"
                    onChange={selectcoverImageBidding}
                  />
                </Form.Group>
              </Col>
              <Col lg={2} md={3} xs={4}>
                <Button
                  id="uploadBtnOpenauction"
                  onClick={() => selectCoverImageBiddingUpload()}
                >
                  {" "}
                  {isLoading1 ? (
                    <Loader animation="border" size="sm" variant="light" />
                  ) : (
                    "Upload"
                  )}
                </Button>
              </Col>
            </Row>

            
            <Row>
              <Col md={3}>
                <Form.Group className="mb-3">
                <Form.Label id="OpenAuction8">Choose Bid Start Date</Form.Label>
                  <Form.Control
                    id="OpenAuction2"
                    type="date"
                    placeholder="Bid Start Date"
                    value={bidStartDate}
                    onChange={(e) => setBidStartDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                <Form.Label id="OpenAuction8">Choose Bid End Date</Form.Label>
                  <Form.Control
                    id="OpenAuction2"
                    type="date"
                    placeholder="Bid End Date "
                    value={bidEndDate}
                    onChange={(e) => setBidEndDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={5} xs={12} id="OpenAuction7">
                <Form.Label id="OpenAuction8">Minimum Bid Price</Form.Label>
                <Row>
                  <Col md={5}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        id="OpenAuction2"
                        type="text"
                        placeholder="Currency in $"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={7}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        id="OpenAuction2"
                        type="text"
                        placeholder="2,85,68,678"
                        value={minimumBidPrice}
                        onChange={(e) => setMinimumBidPrice(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={7}>
                <Form.Label id="OpenAuction8">Upload Bidding sheet</Form.Label>
                <Row>
                  <Col md={9} xs={8}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        id="OpenAuction2"
                        type="file"
                        value={biddingSheet}
                        accept="application/pdf, application/docx, application/xlsx"
                        onChange={selectBiddingSheetFile}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={3} md={3} xs={4}>
                    <Button
                      id="uploadBiddingSheetBtn"
                      onClick={() => uploadBiddingSheetFile()}
                    >
                      {isLoading2 ? (
                        <Loader animation="border" size="sm" variant="light" />
                      ) : (
                        "Upload"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    id="OpenAuction2"
                    as="textarea"
                    rows={3}
                    value={auctiondescription}
                    onChange={(e) => setAuctiondescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col id="OpenAuction5">
                <div>
                  <Button id="OpenAuction4" onClick={() => submitData()}>
                    {isLoadingAllData ? (
                      <Loader size="sm" variant="light" />
                    ) : (
                      "Open Auction"
                    )}
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
