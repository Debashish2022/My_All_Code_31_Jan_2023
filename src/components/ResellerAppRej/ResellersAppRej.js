import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./ResellerAppRej.css";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Resellers from "../Resellers/Resellers";

export default function ResellersAppRej() {

  const [toggleee, setToggleee] = useState(true);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const columns = [
    {
      id: "name",
      label: "Name",
      minWidth: 170,
      align: "left",
    },
    {
      id: "userid",
      label: "User Id",
      minWidth: 100,
      align: "left",
    },
    {
      id: "phone",
      label: "Phone",
      minWidth: 170,
      align: "left",
    },
    {
      id: "paylimit",
      label: "Pay Limit",
      minWidth: 170,
      align: "left",
    },
    {
      id: "timezone",
      label: "Time Zone",
      minWidth: 170,
      align: "left",
    },
    {
      id: "password",
      label: "Password",
      minWidth: 170,
      align: "left",
    },
    {
      id: "operation",
      label: "Operations",
      minWidth: 170,
      align: "left",
    },
  ];

  function createData(
    name,
    userid,
    phone,
    paylimit,
    timezone,
    password,
    operation
  ) {
    return { name, userid, phone, paylimit, timezone, password, operation };
  }

  const rows = [
    createData(
      "Bhabani",
      "bhabani@codekart.com",
      7008585787,
      50000,
      "Asia/Newdelhi/Kolkata",
      <div>
        <FormControl sx={{ width: "15ch" }} variant="standard">
          <Input
            disableUnderline="true"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  width="0.7em"
                  height="0.7em"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value="123456"
          />
        </FormControl>
      </div>,
      <div id="resellers11">
        <Button variant="contained" id="reseller14">
          Approve
        </Button>{" "}
        <Button id="reseller13">Decline</Button>
      </div>
    ),
    createData(
      "Bhabani",
      "bhabani@codekart.com",
      7008585787,
      50000,
      "Asia/Newdelhi/Kolkata",
      <div>
        <FormControl sx={{ width: "15ch" }} variant="standard">
          <Input
            disableUnderline="true"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value="123456"
          />
        </FormControl>
      </div>,
      <div id="resellers11">
        <Button variant="contained" id="reseller14">
          Approve
        </Button>{" "}
        <Button id="reseller13">Decline</Button>
      </div>
    ),
  ];

  return (
    <>
    {toggleee ? (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer style={{ padding: "1rem", marginTop: "3rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12} id="resellers1">
              <div id="resellers3">Resellers</div>
              <div id="resellers2">
                <Button variant="outlined" id="resellers8" onClick={()=>setToggleee(false)}>
                  Return <KeyboardReturnIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
          <div id="reseller12">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontWeight: "600",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.userid}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      ) : (
        <Resellers />
      )}
    </>
  );
}
