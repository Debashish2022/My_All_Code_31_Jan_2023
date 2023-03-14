import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Payout.css";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import AddPaymentModal from "../AddPaymentModal/AddPaymentModal";

export default function Payout() {
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // mofalend

  return (
    <>
      <TableContainer component={Paper} id="payout4">
        <Grid container spacing={2} id="payout7">
          <Grid item md={2} lg={2} xs={12}>
            <TextField id="filled-basic" label="Order Id" variant="standard" />
          </Grid>
          <Grid item md={2} lg={2} xs={12}>
            <TextField id="filled-basic" label="Amount" variant="standard" />
          </Grid>
          <Grid item md={2} lg={2} xs={12}>
            <FormControl variant="standard" sx={{ minWidth: 170 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value=""
                onChange=""
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Pending</MenuItem>
                <MenuItem value={20}>Approved</MenuItem>
                <MenuItem value={30}>Rejected</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} lg={2} xs={12}>
            <TextField
              id="date"
              label="Created date"
              type="date"
              variant="standard"
              sx={{ width: 170 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={2} lg={2} xs={12}>
            <Button id="payout11" onClick={handleOpen}>Add Payment</Button>
            <AddPaymentModal
            open={open}
            handleClose={handleClose}/>
          </Grid>
        </Grid>
        <div id="payout10">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" id="payout3">
                  Order Id
                </TableCell>
                <TableCell align="left" id="payout3">
                  Channel
                </TableCell>
                <TableCell align="left" id="payout3">
                  Attributes
                </TableCell>

                <TableCell align="left" id="payout3">
                  Amount{" "}
                </TableCell>
                <TableCell align="left" id="payout3">
                  Status{" "}
                </TableCell>
                <TableCell align="left" id="payout3">
                  Payout Channel{" "}
                </TableCell>
                <TableCell align="left" id="payout3">
                  Reference Id{" "}
                </TableCell>
                <TableCell align="left" id="payout3">
                  Create Time{" "}
                </TableCell>
                <TableCell align="left" id="payout3">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">16746288120192144804</TableCell>
                <TableCell align="left">UPI</TableCell>
                <TableCell align="left">
                  <Typography id="payout5">ifsc_code:UBIN0574759</Typography>
                  <Typography id="payout5">account_name:MANI C</Typography>
                  <Typography id="payout5">account_name:MANI C</Typography>
                </TableCell>
                <TableCell align="left">5000.00</TableCell>
                <TableCell align="left" id="payin2">
                  <Typography id="payout1">APPROVED</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography id="payout6">NETBANK : 0812204740</Typography>
                </TableCell>
                <TableCell align="left">302520801095</TableCell>
                <TableCell align="left">2023-01-25 12:10:12</TableCell>
                <TableCell align="left">
                  <Button variant="contained" id="payout2">
                    RECIEPT
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">16746288120192144804</TableCell>
                <TableCell align="left">UPI</TableCell>
                <TableCell align="left">
                  <Typography id="payout5">ifsc_code:UBIN0574759</Typography>
                  <Typography id="payout5">account_name:MANI C</Typography>
                  <Typography id="payout5">account_name:MANI C</Typography>
                </TableCell>
                <TableCell align="left">5000.00</TableCell>
                <TableCell align="left" id="payin2">
                  <Typography id="payout1">APPROVED</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography id="payout6">NETBANK : 0812204740</Typography>
                </TableCell>
                <TableCell align="left">302520801095</TableCell>
                <TableCell align="left">2023-01-25 12:10:12</TableCell>
                <TableCell align="left">
                  <Button variant="contained" id="payout2">
                    RECIEPT
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">16746288120192144804</TableCell>
                <TableCell align="left">UPI</TableCell>
                <TableCell align="left">
                  <Typography id="payout5">ifsc_code:UBIN0574759</Typography>
                  <Typography id="payout5">account_name:MANI C</Typography>
                  <Typography id="payout5">account_name:MANI C</Typography>
                </TableCell>
                <TableCell align="left">5000.00</TableCell>
                <TableCell align="left" id="payin2">
                  <Typography id="payout1">APPROVED</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography id="payout6">NETBANK : 0812204740</Typography>
                </TableCell>
                <TableCell align="left">302520801095</TableCell>
                <TableCell align="left">2023-01-25 12:10:12</TableCell>
                <TableCell align="left">
                  <Button variant="contained" id="payout2">
                    RECIEPT
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">16746288120192144804</TableCell>
                <TableCell align="left">UPI</TableCell>
                <TableCell align="left">
                  <Typography id="payout5">ifsc_code:UBIN0574759</Typography>
                  <Typography id="payout5">account_name:MANI C</Typography>
                  <Typography id="payout5">account_name:MANI C</Typography>
                </TableCell>
                <TableCell align="left">5000.00</TableCell>
                <TableCell align="left" id="payin2">
                  <Typography id="payout1">APPROVED</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography id="payout6">NETBANK : 0812204740</Typography>
                </TableCell>
                <TableCell align="left">302520801095</TableCell>
                <TableCell align="left">2023-01-25 12:10:12</TableCell>
                <TableCell align="left">
                  <Button variant="contained" id="payout2">
                    RECIEPT
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count="10"
          rowsPerPage="10"
          page="10"
          // onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
