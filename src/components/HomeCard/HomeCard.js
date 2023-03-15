import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./HomeCard.css";
import BidsDetailsModal from "../BidsDetailsModal/BidsDetailsModal";
import HomecardBg from "../../assets/homecard/timerbg.png";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

export default function HomeCard(props) {

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

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

  const user = useSelector((state) => state.user);
  const userId = user._id;
  const userToken = user.token;

  // project id that we got from active auction component through props
  const bidId = props.projectId;


 

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

  // console.log('image is.....', props.image);

  // counter started here
  const [countdownDate, setCountdownDate] = useState(
    new Date(`${props.bidLastDate}`).getTime()
  );

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

 

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setTime({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <>
      <Container>
        {/* <Row>
          <Col>{props.status}</Col>
        </Row> */}
        <Row>
          <Col style={{ position: "relative" }}>
            <Image
              src={props?.image ? props.image : HomecardBg}
              id="homecard"
            />
            {props.status === "completed" ? (
              <div id="homecard2">
                {props.status === "completed" ? (
                  <Row>
                    <Col id="bidClosedTxt">Bid Closed</Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>
                      <div id="homecard3">{time.days || "0"}</div>
                      <div id="homecard4">days</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.hours || "00"}</div>
                      <div id="homecard4">hours</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.minutes || "00"}</div>
                      <div id="homecard4">minutes</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.seconds || "00"}</div>
                      <div id="homecard4">seconds</div>
                    </Col>
                  </Row>
                )}
              </div>
            ) : null}
            {props.status === "inactive" ? (
              <div id="homecard2">
                {props.status === "inactive" ? (
                  <Row>
                    <Col id="bidClosedTxt">
                      Will Start From: {props.bidStartDate}
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>
                      <div id="homecard3">{time.days || "0"}</div>
                      <div id="homecard4">days</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.hours || "00"}</div>
                      <div id="homecard4">hours</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.minutes || "00"}</div>
                      <div id="homecard4">minutes</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.seconds || "00"}</div>
                      <div id="homecard4">seconds</div>
                    </Col>
                  </Row>
                )}
              </div>
            ) : null}
            {props.status === "active" ? (
              <div id="homecard2">
                {props.status === "active" ? (
                  <Row>
                    <Col>
                      <div id="homecard3">{time.days || "0"}</div>
                      <div id="homecard4">days</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.hours || "00"}</div>
                      <div id="homecard4">hours</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.minutes || "00"}</div>
                      <div id="homecard4">minutes</div>
                    </Col>
                    <Col>
                      <div id="homecard3">{time.seconds || "00"}</div>
                      <div id="homecard4">seconds</div>
                    </Col>
                  </Row>
                ) : null}
              </div>
            ) : null}
          </Col>
        </Row>

        <div id="homecard5">{props.bidName}</div>
        {props.bidPrice && (
          <div id="homecard6">
            Current bid : <span id="homecard7">${props.bidPrice}</span>
          </div>
        )}

        <div id="homecard9">
          {/* to show to show modal having table */}
          {props.details && (
            <Button
              id="homecard8"
              onClick={() => setShowBidsDetailsModal(!showBidsDetailsModal)}
            >
              {props.details}
            </Button>
          )}
          {/* to show modal having download sheet button  */}
          {props.details1 && (
            <Button
              id="homecard8"
              onClick={() => setShowBidsDetailsModal1(!showBidsDetailsModal1)}
            >
              {props.details1}
            </Button>
          )}
          {/* to show finalized datas */}
          {props.details2 && (
            <Button
              id="homecard8"
              onClick={() => setShowBidsDetailsModal2(!showBidsDetailsModal2)}
            >
              {props.details2}
            </Button>
          )}
          {/* to show completed projects with all datas */}
          {props.details3 && (
            <Button
              id="homecard8"
              onClick={() => setShowBidsDetailsModal3(!showBidsDetailsModal3)}
            >
              {props.details3}
            </Button>
          )}
          {/* to show close button */}
          {props.close && (
            <Button
              id="homecard10"
              onClick={() => CloseThisBidFun(props.projectId)}
            >
              {isLoading ? (
                <Loader animation="border" size="sm" variant="light" />
              ) : (
                props.close
              )}
            </Button>
          )}
        </div>

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
          finalizedbtn = "Finalize"
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

      </Container>
    </>
  );
}
