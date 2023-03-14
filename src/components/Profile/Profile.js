import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";
import "./Profile.css";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

export default function Profile() {
  const [timeZone, setTimeZone] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConformPassword, setShowConformPassword] = React.useState(false);

  const handleChange = (event) => {
    setTimeZone(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordd = () =>
    setShowConformPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordd = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        style={{padding: "1rem 2rem 0rem"}}
      >
        {/* <Toolbar /> */}
        <Typography paragraph>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* <Grid md={1} lg={1}></Grid> */}
            {/* <Grid item md={6} lg={6} xs={12}>
              <div id="profile1">
                <div id="profile2">User Details</div>

                <div>
                  <TextField
                    className="profile3"
                    id="standard-required"
                    label="Name"
                    defaultValue=""
                    variant="standard"
                  />
                  <TextField
                    className="profile3"
                    id="standard-required"
                    label="Username"
                    defaultValue=""
                    variant="standard"
                  />
                  <TextField
                    className="profile3"
                    id="standard-required"
                    label="Phone"
                    defaultValue=""
                    variant="standard"
                  />
                  <TextField
                    className="profile3"
                    id="standard-required"
                    label="Daily amount limit of payout"
                    defaultValue=""
                    variant="standard"
                  />

                  <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Time Zone
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={timeZone}
                      onChange={handleChange}
                      label="Time Zone"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Asia/Kolkata/NewDelhi">
                        Asia/Kolkata/NewDelhi
                      </MenuItem>
                      <MenuItem value="USA/Newyork">USA/Newyork</MenuItem>
                      <MenuItem value="Europe/Netherland">
                        Europe/Netherland
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <div id="profile4">
                    <Button variant="contained" id="profile5">
                      Update Info
                    </Button>
                  </div>
                </div>
              </div>
            </Grid> */}

            <Grid item md={6} lg={6} xs={12}>
              <Grid item xs={12} md={12} lg={12} id="account1">
                <div id="resellerProfileTxt">Profile</div>
              </Grid>

              <div id="profile1">
                <div id="profile2">User Stat</div>
                <div id="profile6">Agent</div>
                <div id="profile7">
                  <Grid item md={6} lg={6} xs={6}>
                    <div>Credit</div>
                    <div>Total commission</div>
                    <div id="profile8">Payin</div>
                    <div>Commission</div>
                    <div>Pending limit</div>
                    <div>Satus</div>
                    <div id="profile8">Payout</div>
                    <div>Commission</div>
                    <div>Peding limit</div>
                    <div>status</div>
                    <div>Currency</div>
                  </Grid>
                  <Grid item md={6} lg={6} xs={6}>
                    <div>100000.00</div>
                    <div>100000.00</div>
                    <div id="profile8">&nbsp;</div>
                    <div>1.5%</div>
                    <div>3</div>
                    <div>Active</div>
                    <div id="profile8">&nbsp;</div>
                    <div>1.5%</div>
                    <div>3</div>
                    <div>Active</div>
                    <div>INR</div>
                  </Grid>
                </div>
              </div>
            </Grid>

            {/* <Grid item md={6} lg={6} xs={12}>
              <div id="profile1">
                <div id="profile2">Update password</div>

                <FormControl
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                  style={{ width: "100%" }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    style={{ width: "100%" }}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    startAdornment={
                        <InputAdornment position="start">
                          <VpnKeyIcon />
                        </InputAdornment>
                      }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <FormControl
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                  style={{ width: "100%" }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Conform password
                  </InputLabel>
                  <OutlinedInput
                    style={{ width: "100%" }}
                    id="outlined-adornment-password"
                    type={showConformPassword ? "text" : "password"}
                    startAdornment={
                        <InputAdornment position="start">
                          <VpnKeyIcon />
                        </InputAdornment>
                      }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordd}
                          onMouseDown={handleMouseDownPasswordd}
                          edge="end"
                        >
                          {showConformPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Conform Password"
                  />
                </FormControl>
              </div>
            </Grid> */}
          </Grid>
        </Typography>
      </Box>
    </>
  );
}
