import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom"; // Changed from useNavigate to useHistory
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login({ setUser }) {
  const history = useHistory(); // Changed from useNavigate to useHistory
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://haocute-brgeh5c6hsf7fpc5.eastus-01.azurewebsites.net/api/v1/accounts/signin",
        { email, password }
      );
      if (response.status === 200) {
        //setUser({email, password});
        const role = response.data.role;
        localStorage.setItem("Role", role);
        if (role === 2) {
          const customerId = response.data.customerId;
          const userName = response.data.userName;
          localStorage.setItem("Id", customerId);
          localStorage.setItem("Name", userName);
          history.push("/");
        }
        if (role === 3) {
            const customerId = response.data.helperId;
          const userName = response.data.userName;
          localStorage.setItem("Id", customerId);
          localStorage.setItem("Name", userName);
          history.push("/appointment");
        }
        if (role === 1) {
            const customerId = 0;
          const userName = response.data.userName;
          localStorage.setItem("Id", customerId);
          localStorage.setItem("Name", userName);
          history.push("/faqs");
        }
      } else {
        alert("Invalid email or password. Please try again!");
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("Invalid email or password. Please try again!");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "#f5f5f5", // Light gray background
            padding: 4, // Increased padding
            borderRadius: 4, // Rounded corners
            boxShadow: 3, // Box shadow for depth
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                marginBottom: 2,
                marginTop: 2,
                width: "calc(100%)",
                height: "calc(10%)",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2, width: "calc(100%)", height: "calc(10%)" }} // Added margin bottom and adjusted width
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              sx={{ marginBottom: 2 }} // Added margin bottom
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}