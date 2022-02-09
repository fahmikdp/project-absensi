import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "#0000008A 1px solid",
  marginRight: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  borderRadius: 5,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    margin: "auto",
  },
}));

// Icon Costum
const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#0000008A",
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Input Base Costum
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // Color Search
  color: "#000",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "80ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, mt: -1 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
