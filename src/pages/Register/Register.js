import React from "react";
import {
  Button,
  Card,
  CardContent,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./Register.css";
import logo from "../../assets/login/logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MuiMenuItem from '@mui/material/MenuItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/material/styles';

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      {/* <Grid>
        <Paper elevation={10}>Login</Paper>
      </Grid> */}
      <div id="register3">
        <Card id="register1">
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid id="register6" xs={12} sm={12} md={12} lg={12} item>
                  <img src={logo} id="register6" />
                </Grid>
                <Grid id="register6" xs={12} sm={12} md={12} lg={12} item>
                  <Typography id="register2" gutterBottom variant="h5">
                    Signup
                  </Typography>
                </Grid>
                <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Name"
                    placeholder="Enter Name"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                  <TextField
                    type="email"
                    fullWidth
                    required
                    id="outlined-required"
                    label="email"
                    placeholder="Enter Email"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                  <TextField
                    type="phone"
                    fullWidth
                    required
                    id="outlined-required"
                    label="phone"
                    placeholder="Enter phoneno"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocalPhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>


                <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                  <FormControl
                    fullWidth  >
                    <InputLabel id="demo-simple-select-label">
                      Currency
                    </InputLabel>
                    <Select
                    style={{height:'3rem'}}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Currency"
                      placeholder="Currency"
                      
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      inputProps={{
                        style: {
                          height: "1rem",
                        },
                      }}
                      startAdornment={
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      }
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      placeholder="Enter Password"
                    />
                  </FormControl>
                </Grid>

                <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      inputProps={{
                        style: {
                          height: "1rem",
                        },
                      }}
                      startAdornment={
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      }
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                      placeholder="Confirm Password"
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    id="register5"
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    CREATE ACCOUNT
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
