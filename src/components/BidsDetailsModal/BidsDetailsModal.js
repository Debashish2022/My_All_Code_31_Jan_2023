import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CardImage from "../../assets/bids/cardImg.png";
import { apicaller } from "../../utils/api";
import "./BidsDetailsModal.css";
import { getUserToken, getUserId } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

export default function BidsDetailsModal(props,{click}) {

  const [getAllBidsOfaProject, setGetAllBidsOfaProject] = useState([]);

  const [loadingTableData, setLoadingTableData] = useState(true);

  const [winnerChoosed, setWinnerChoosed] = useState(false);

  const userToken = useSelector(getUserToken);

  const [isLoading, setIsLoading] = useState();

  const [change, setChange] = useState(0);

  // toast
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

  const FinaliseAndChooseWinnerFun = async (winnerBidId) => {
    setIsLoading(winnerBidId);
    // console.log("winner bid id", winnerBidId);
    await apicaller(`bid/choose/${winnerBidId}`, null, "PUT", userToken, null)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          setIsLoading();
          sToast("Bid Is Finalized! Please Close This Project Now");
          setWinnerChoosed(true);
          // getAllBidsOfaProjectFun();
        }
      })
      .catch(() => eToast("Couldn't finalize!"))
      .finally(() => setIsLoading());
  };


  // useEffect(() => {
  //   getAllBidsOfaProjectFun();
  // }, []);


  // useEffect(()=> {
  //  console.log('Hii');
  // }, []);

  const getAllBidsOfaProjectFun = () => {
    console.log("project id .......", props.projectid  );
     apicaller(
      `bid/all-bids/${props?.projectid}`,
      null,
      "GET",
      userToken,
      null
    ).then((res) => {
      setLoadingTableData(false);
      setGetAllBidsOfaProject(res?.data?.result);
    });  
  };
  
if(props.click){
  if(change == 0){
    getAllBidsOfaProjectFun();
    setChange(1);
  }
}

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body id="bidsDetailsModalBody">
        <Row>
          <Col id="bidsdetails1ImgDiv">
            <img src={props.img} alt="CardImage" id="bidsdetails1" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails2">Project Name: {props.projectname}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails3">
              Owner Name: {props.ownerfirstname} {props.ownerlastname}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails3">Company Name: {props.companyname}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails4">Description: {props.description}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails5">Min. Bid Price: ${props.price}</div>
          </Col>
        </Row>

        {/* finalized project datas */}
        <Row>
          <Col>
            <div id={props.idddd}>
              {props.bidwinnerfirstname && props.bidwinnerlastname ? (
                <div id="bidwinnerlabel">
                  Winner Full Name :{" "}
                  <span id="bidwinnerlabel">
                    {props.bidwinnerfirstname} {props.bidwinnerlastname}
                  </span>
                </div>
              ) : null}

              {props.bidwinner ? (
                <div id="bidwinnerlabel">
                  Winner : <span id="bidwinnerlabel">{props.bidwinner}</span>
                </div>
              ) : null}

              {props.finaliseprice ? (
                <div id="bidwinnerlabel">
                  Finalised price :{" "}
                  <span id="bidwinnerlabel">${props.finaliseprice}</span>
                </div>
              ) : null}
            </div>
          </Col>
        </Row>
                  
        {/* donwload requirement sheet button */}
        <Row> 
          <Col>
            <div id={props.idd}>
              {props.details && (
                <Button id="bidsdetails6">
                  <a id="aTagDownloadSheet" href={props.sheet}>
                    {props.details}
                  </a>
                </Button>
              )}
            </div>
          </Col>
        </Row>
                    {/* {props.click && change ? getAllBidsOfaProjectFun(): null}
                    {props.click && setChange(!change)} */}
        {/* button */}
        {/* Add Table Here */}
        {props.table && (
          <Row id={props.iddd} style={{ overflow: "auto" }}>
            <Col>
              <Row>
                <Col id="bidsStatusDiv" md={3} className="mt-3">
                  {props.finalizedbtn ? "Bid Status: " : "Applied By: "}
                </Col>
              </Row>

              {/* bids details table started */}
              <Container id="tableForBidsDetailsModal" >
                 {/* table data is loading */}
                 {loadingTableData ? (
                    <tbody
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "centre",
                        marginTop: "2rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <Loader
                        animation="border"
                        size="md"
                        variant="secondary"
                      />
                    </tbody>
                  ) : (
                <Table striped>
                  <thead>
                    <tr>
                      <th id="bidsheader">Starting Price </th>
                      <th id="bidsheader">Current Price</th>
                      <th id="bidsheader">Email id</th>
                      <th id="bidsheader">Quotation</th>
                      {props.finalizedbtn && <th id="bidsheader">Interest</th>}
                    </tr>
                  </thead>

                 
                    <tbody>
                      {getAllBidsOfaProject?.map((item, ind) => (
                        <tr key={ind}>
                          <td id="bidsheader1">${item?.projectId?.price}</td>
                          <td id="bidsheader1">${item?.price}</td>
                          <td id="bidsheader1">{item?.appliedBy?.email}</td>
                          <td>
                            <Button size="sm" id="downloadBtnsBidsModal">
                              <a
                                id="aTagDownloadQuotation"
                                href={item?.document}
                              >
                                Download Quotation
                              </a>
                            </Button>
                          </td>
                          {props.finalizedbtn && (
                            <td>
                              <Button
                                size="sm"
                                id="tableBtnsBidsModal"
                                style={
                                  item?.resultStatus === "WINNER"
                                    ? { backgroundColor: "darkgreen" }
                                    : { backgroundColor: "#362989" }
                                }
                                disabled={
                                  item?.resultStatus === "LOOSER" ||
                                  item?.resultStatus === "WINNER"
                                    ? "disabled"
                                    : null
                                }
                                onClick={() =>
                                  FinaliseAndChooseWinnerFun(item?._id)
                                }
                              >
                                {isLoading ? (
                                  <Loader
                                    animation="border"
                                    size="sm"
                                    variant="light"
                                  />
                                ) : (
                                  <>
                                    {item?.resultStatus === "WINNER"
                                      ? "Winner"
                                      : "Finalize"}
                                  </>
                                )}
                              </Button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                 
                </Table>
                 )}
              </Container>
            </Col>
          </Row>
        )}

        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} id="closeBtnBidsModal">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
