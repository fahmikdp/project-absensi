import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Card from "./FormAbsensi";
import Btn from "./Buttonfloating";
import lotsOfData from "../DataAnggota/DataAnggota";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export default function PrimarySearchAppBar() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(lotsOfData);

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(lotsOfData);
    else {
      const filteredData = lotsOfData.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowercasedValue);
        });
      });
      setData(filteredData);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar>Form Absensi</Navbar>
      {/* Search */}
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <TextField
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon
                      sx={{
                        fontSize: 22,
                        color: "grey",
                        "&:hover": { color: "#249EA0" },
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                fontSize: 15,
                height: 40,
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
          {data.length === 0 && <span>No records found to display!</span>}
          <br />
          <br />
          {/* Component Card */}
          <Card />
          {/* Button Floating */}
          <Link to="/absensi">
            <Btn />
          </Link>
        </Box>
      </Container>
    </div>
  );
}
