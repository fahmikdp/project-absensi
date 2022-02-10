import * as React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Card from "./Card";
import Btn from "./Buttonfloating";
import Navbar from "../Navbar";

export default function PrimarySearchAppBar() {
  return (
    <>
      {/* Navbar */}
      <Navbar>Form Absensi</Navbar>
      {/* Search */}
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <TextField
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon
                      sx={{
                        fontSize: 25,
                        color: "grey",
                        "&:hover": { color: "#249EA0" },
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                fontSize: 16,
                height: 42,
              },
            }}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey",
                borderRadius: 2,
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#249EA0",
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#249EA0",
                },
            }}
          />
          <br />
          <br />
          {/* Component Card */}
          <Card />
          {/* Button Floating */}
          <Btn />
        </Box>
      </Container>
    </>
  );
}
