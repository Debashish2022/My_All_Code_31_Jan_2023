import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";

export function Charts(props) {
  const Token = useSelector(getToken);
  useEffect(() => {
    graphone();
    graphtwo();
  });
  const [payin, setPayin] = React.useState([]);
  const [payout, setPayout] = React.useState([]);
  const graphone = async () => {
    await apicaller(
      "payment/payin/63e34fb1f0ddc6dda07865fb",
      null,
      "get",
      Token
    ).then((res) => {
      console.log("response...", res.data.values);
      setPayin(res.data.values);
    });
  };
  const graphtwo = async () => {
    await apicaller(
      "payment/payout/63e1e14fd5892560aff864d2",
      null,
      "get",
      Token
    ).then((res) => {
      console.log("graphtwo...", res.data.values);
      setPayout(res.data.values);
    });
  };
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
      },
    },
    // series: [
    //   {
    //     name: "PayIn",
    //     data: { payin },
    //   },
    //   {
    //     name: "PayOut",
    //     data: {payout},
    //   },
    // ],
  });

  const series = [
    {
      name: "PayIn",
      data: payin,
    },
    {
      name: "PayOut",
      data: payout,
    },
  ];
  return (
    <Chart options={state.options} series={series} type="line" width="600" />
  );
}
