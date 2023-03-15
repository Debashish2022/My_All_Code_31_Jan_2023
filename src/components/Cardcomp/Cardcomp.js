import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import cardimg from "../../assets/homecard/noimage.png";
import BidDateCalculateComp from "../BidCalculatorComp/BidCalculatorComp";
import "./Cardcomp.css";
import BidsDetailsModal from "../BidsDetailsModal/BidsDetailsModal";
import { apicaller } from "../../utils/api";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {IoClose} from "react-icons/io5";

export default function Cardcomp(props) {
  // to show table
  const [showBidsDetailsModal, setShowBidsDetailsModal] = useState(false);

  // to show requirement sheet btn
  const [showBidsDetailsModal1, setShowBidsDetailsModal1] = useState(false);

  // to show finalized project datas
  const [showBidsDetailsModal2, setShowBidsDetailsModal2] = useState(false);

  // to show completed project datas
  const [showBidsDetailsModal3, setShowBidsDetailsModal3] = useState(false);

  const [isLoading, setIsLoading] = useState();
  const [getAllBidsOfaProject, setGetAllBidsOfaProject] = useState([]);

  // for close this bid
  const CloseThisBidFun = async (projectCloseId) => {
    if (window.confirm("Do you sure want to close this project?")) {
      setIsLoading(projectCloseId);
      await apicaller(
        `project/close/${projectCloseId}`,
        null,
        "PUT",
        userToken,
        null
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setIsLoading();
            sToast("Bid is Closed!");
            window.location.reload();
          }
        })
        .catch(() => eToast("Sorry Couldn't Close This Bid!"))
        .finally(() => setIsLoading());
    }
  };

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

  const user = useSelector((state) => state?.user);
  const userId = user?._id;
  const userToken = user?.token;

  // project id that we got from active auction component through props
  const bidId = props?.projectId;

  return (
    <div id={props.status === "completed" ? "ccomp11" : "ccomp3"}>
      <Row>
        <Col>
          <Image id="ccomp1" src={props?.image ? props.image : cardimg} />
          {props?.close && (<div id="ccomp14" onClick={() => CloseThisBidFun(props.projectId)}><IoClose id="ccomp13"/></div> )}
        </Col>
      </Row>
      <Row id="ccomp2">
        {props?.status === "completed" && (
          <div>
            {props?.status === "completed" ? (
              <Row>
                <Col id="ccomp12">Bid Closed</Col>
              </Row>
            ) : null}
          </div>
        )}

        {props?.status === "inactive" && (
          <div >
            {props?.status === "inactive" ? (
              <Row>
                <Col id="ccomp12">Will Start From : {props.bidStartDate}</Col>
              </Row>
            ) : null}
          </div>
        )}

        {props?.status === "active" && (
          <div>
            {props?.status === "active" ? (
              <Row id="ccomp7">
                <Col md={12}>
                  <BidDateCalculateComp bidLastDate={props?.bidLastDate} />
                </Col>
              </Row>
            ) : null}
          </div>
        )}

        <Row id="ccomp6">
          <Col md={8} id="ccomp10">
            <div id="ccomp9">Project Name : </div>
            <div id="ccomp8">{props?.bidName} </div>
          </Col>
          {props.details && (
            <Col md={4} id="ccomp5">
              <Button
                id="ccomp4"
                onClick={() => setShowBidsDetailsModal(!showBidsDetailsModal)}
              >
                {props.details}
              </Button>
            </Col>
          )}
          {props.details1 && (
            <Col md={4} id="ccomp5">
              <Button
                id="ccomp4"
                onClick={() => setShowBidsDetailsModal1(!showBidsDetailsModal1)}
              >
                {props.details1}
              </Button>
            </Col>
          )}
          {props.details2 && (
            <Col md={4} id="ccomp5">
              <Button
                id="ccomp4"
                onClick={() => setShowBidsDetailsModal2(!showBidsDetailsModal2)}
              >
                {props.details2}
              </Button>
            </Col>
          )}
          {props.details3 && (
            <Col md={4} id="ccomp5">
              <Button
                id="ccomp4"
                onClick={() => setShowBidsDetailsModal3(!showBidsDetailsModal3)}
              >
                {props.details3}
              </Button>
            </Col>
          )}
        </Row>

        {/* <Row>
          {props.close && (
            <Button onClick={() => CloseThisBidFun(props.projectId)}>
              {isLoading ? (
                <Loader animation="border" size="sm" variant="light" />
              ) : (
                props.close
              )}
            </Button>
          )}
        </Row> */}

        {/* to show modal having table */}
        <BidsDetailsModal
          show={showBidsDetailsModal}
          onHide={() => setShowBidsDetailsModal(!showBidsDetailsModal)}
          img={props.image}
          projectname={props.projectname}
          projectid={props.projectId}
          ownerfirstname={props.ownerfirstname}
          ownerlastname={props.ownerlastname}
          companyname={props.companyname}
          description={props.descriptions}
          price={props.price}
          idd="bidsdetails9table"
          iddd="bidsdetails10table"
          table="table"
          click={showBidsDetailsModal}
          finalizedbtn="Finalize"
        />

        {/* to show modal having download sheet button */}
        <BidsDetailsModal
          show={showBidsDetailsModal1}
          onHide={() => setShowBidsDetailsModal1(!showBidsDetailsModal1)}
          img={props.image}
          sheet={props.sheet}
          projectname={props.projectname}
          projectid={props.projectId}
          ownerfirstname={props.ownerfirstname}
          ownerlastname={props.ownerlastname}
          companyname={props.companyname}
          description={props.descriptions}
          price={props.price}
          idd="bidsdetails8btn"
          iddd="bidsdetails9table"
          details="Download Requirement sheet"
        />

        {/* to show modal having finalized projects data */}
        <BidsDetailsModal
          show={showBidsDetailsModal2}
          onHide={() => setShowBidsDetailsModal2(!showBidsDetailsModal2)}
          img={props.image}
          sheet={props.sheet}
          projectname={props.projectname}
          projectid={props.projectId}
          ownerfirstname={props.ownerfirstname}
          ownerlastname={props.ownerlastname}
          companyname={props.companyname}
          description={props.descriptions}
          price={props.price}
          finaliseprice={props.finalisePrice}
          bidwinnerfirstname={props.bidWinnerFirstName}
          bidwinnerlastname={props.bidWinnerLastName}
          bidwinner={props.bidWinner}
          idd="bidsdetails9table"
          iddd="bidsdetails9table"
          idddd="bidsdetailsFinalizedDatas"
        />

        {/* to show completed datas */}
        <BidsDetailsModal
          show={showBidsDetailsModal3}
          onHide={() => setShowBidsDetailsModal3(!showBidsDetailsModal3)}
          img={props.image}
          projectname={props.projectname}
          projectid={props.projectId}
          ownerfirstname={props.ownerfirstname}
          ownerlastname={props.ownerlastname}
          companyname={props.companyname}
          description={props.descriptions}
          price={props.price}
          finaliseprice={props.finalisePrice}
          bidwinnerfirstname={props.bidWinnerFirstName}
          bidwinnerlastname={props.bidWinnerLastName}
          bidwinner={props.bidWinner}
          idd="bidsdetails8btn"
          iddd="bidsdetails10table"
          details="Download Requirement sheet"
          table="table"
          click={showBidsDetailsModal3}
        />
      </Row>
    </div>
  );
}
