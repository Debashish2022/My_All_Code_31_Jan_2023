import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";
import { getToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import { Charts } from "../Charts/Charts";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./DashboardContent.css";

export default function DashboardContent() {
  const Token = useSelector(getToken);
  useEffect(() => {
    getData();
    turn();
    Approve();
  }, []);
  const [transaction, setTransaction] = React.useState([]);
  const [turnover, setTurnover] = React.useState([]);
  const [withdraw, setWithdraw] = React.useState([]);
  const getData = async () => {
    await apicaller(
      "payment/transactions/63e34fb1f0ddc6dda07865fb",
      null,
      "get",
      Token
    ).then((res) => {
      console.log("response...", res?.data?.result?.total);
      setTransaction(res?.data?.result?.total);
    });
  };

  const turn = async () => {
    await apicaller(
      "payment/payin/63e34fb1f0ddc6dda07865fb",
      null,
      "get",
      Token
    ).then((res) => {
      console.log("turn ...", res?.data?.payIn);
      setTurnover(res?.data?.payIn);
    });
  };

  const Approve = async () => {
    await apicaller(
      "payment/payout/63e1e14fd5892560aff864d2",
      null,
      "get",
      Token
    ).then((res) => {
      console.log("Approve...", res?.data?.payOut);
      setWithdraw(res?.data?.payOut);
    });
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <div id="dashboardcontent1">All Time</div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={4} lg={4} xs={12}>
              <DashboardCard
                colour="#1976D2"
                type="Transaction"
                quantity={transaction}
              />
            </Grid>
            <Grid item md={4} lg={4} xs={12}>
              <DashboardCard
                colour="#388E3C"
                type="Turnover"
                quantity={turnover}
              />
            </Grid>
            <Grid item md={4} lg={4} xs={12}>
              <DashboardCard
                colour="#EF6C00"
                type="Withdrawal"
                quantity={withdraw}
              />
            </Grid>
            {/* <Grid item md={3} lg={3} xs={12}>
              <DashboardCard colour="#F9A825" type="Coin" quantity="000000" />
            </Grid> */}
          </Grid>
        </Typography>
        <Typography paragraph >
          <Grid
           
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid  id="graph" item md={12} lg={12} xs={12} sm={12}>
              <Charts heading="This month" />
            </Grid>
          </Grid>
        </Typography>
      </Box>
    </>
  );
}
