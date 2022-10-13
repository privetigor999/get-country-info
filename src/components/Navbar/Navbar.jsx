import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

export default function ButtonAppBar({
  handleClearSelectedRegion,
  selectedRegion,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {selectedRegion && (
            <IconButton
              onClick={handleClearSelectedRegion}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Countries Information Application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
