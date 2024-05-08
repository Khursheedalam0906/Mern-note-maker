import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <AppBar color="transparent" style={{ position: "static" }}>
      <Toolbar>
        <img src={Logo} alt="logo" style={{ width: 30, marginRight: 10 }} />
        <Typography>Evernote</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
