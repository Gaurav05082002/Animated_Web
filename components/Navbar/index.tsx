import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import NavLinks from "./NavLink";
import ava from "../../public/mani.jpg";
import avalogo from "../../public/avalogo.jpg";
import { useEffect, useState } from "react";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  if (windowWidth < 800) {
    return (
      <div
        style={{
          textAlign: "center",
          paddingTop: "50vh",
          color: "black",
          border: "solid 2px blue",
          height: "1000vh",
        }}
      >
        currently not available for mobile , Please open on a laptop or monitor.
      </div>
    );
  }
  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <img
            src={avalogo.src}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "5%",
              marginRight: "30px",
            }}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              height: "10%",
              color: "black",
              fontWeight: "bold",
              marginLeft: "20%",
            }}
          >
            <NavLinks route="/">
              <Button
                style={{
                  color: "black",
                  display: "block",
                  height: "100%",
                  width: "40%",
                  fontWeight: "bold",
                }}
                // sx={{ my: 2, color: 'black' , width:'200%' }}
              >
                home
              </Button>
            </NavLinks>

            <NavLinks route="/eqiq">
              <Button
                style={{
                  color: "black",
                  display: "block",
                  height: "100%",
                  fontWeight: "bold",
                }}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
                Eqiq
              </Button>
            </NavLinks>
            <NavLinks route="/manifesto">
              <Button
                style={{
                  color: "black",
                  display: "block",
                  height: "100%",
                  fontWeight: "bold",
                }}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
                Manifesto
              </Button>
            </NavLinks>
            <NavLinks route="/task">
              <Button
                style={{
                  color: "black",
                  display: "block",
                  height: "100%",
                  fontWeight: "bold",
                }}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
                Task
              </Button>
            </NavLinks>
            <NavLinks route="/about">
              <Button
                style={{
                  color: "black",
                  display: "block",
                  height: "100%",
                  fontWeight: "bold",
                }}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
                About
              </Button>
            </NavLinks>
            <NavLinks route="/emotions">
              <Button
                style={{
                  color: "black",
                  display: "block",
                  height: "100%",
                  fontWeight: "bold",
                }}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
                Emotion
              </Button>
            </NavLinks>
          </Box>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              fontSize: "16px",
              cursor: "pointer",
              marginLeft: "5%",
            }}
          >
            Download
          </button>

          {/* <Box sx={{ flexGrow: 0, marginLeft: "5%" }}></Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
