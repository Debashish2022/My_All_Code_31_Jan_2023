import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import logo from "../../assets/login/logo.png";

export default function Login() {
  return (
    <>
      {/* <Grid>
        <Paper elevation={10}>Login</Paper>
      </Grid> */}
      <div id="login3">
        <Card id="login1">
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid id="login7" xs={12} sm={12} md={12} lg={12} item>
                  <img src={logo} id="login7" />
                </Grid>
                <Grid id="login7" xs={12} sm={12} md={12} lg={12} item>
                  <Typography id="login2" gutterBottom variant="h5">
                    Login
                  </Typography>
                </Grid>
                <Grid id="login4" xs={12} sm={12} md={12} lg={12} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Name"
                    placeholder="Enter Full Name"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid>
                <Grid id="login4" xs={12} sm={12} md={12} lg={12} item>
                  <TextField
                    type="password"
                    fullWidth
                    required
                    id="outlined-required"
                    label="Password"
                    placeholder="Enter Password"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    id="login5"
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography id="login2" gutterBottom>
                    OR
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography id="login6" gutterBottom>
                    CREATE A NEW ACCOUNT
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
