import React, { useState } from "react";
// Import Component MUI
import { IconButton, InputAdornment, TextField } from "@mui/material";
// Import Icon
import SearchIcon from "@mui/icons-material/Search";
import Buttons from "./ButtonFilter";
// import Card
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Button,
  ButtonGroup,
} from "@mui/material";
import lotsOfData from "../DataAnggota/DataAnggota";
import _ from "lodash";

export default function SearchButtonCard() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(lotsOfData);

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    var searchQuery = value.toString().toLowerCase();

    let listdata = [
      "ava",
      "nama",
      "sabuk",
      "alpa",
      "sakit",
      "izin",
      "present",
    ].map((x, i) => {
      return lotsOfData.filter((el) => {
        if (el[x]) {
          return el[x].toString().toLowerCase().indexOf(searchQuery) !== -1;
        }
      });
    });

    var dataset = _.maxBy(listdata, function (o) {
      return o.length;
    });
    setData(dataset);
  };

  return (
    <>
      {/* Component Search */}
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
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#249EA0",
            },
        }}
      />
      {/* Component Button */}
      <Buttons />
      {/* <br />
      <br />
      <br /> */}
      {/* Component Card */}
      {data.map((data, index) => (
        <Box key={index}>
          <Card
            sx={{
              maxWidth: 520,
              xs: 12,
              margin: "auto",
              mb: 2,
              height: 100,
              boxShadow: "0px 0px 6px #a1a1a1",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={1.5}>
                <Avatar
                  sx={{
                    bgcolor: "#F78104",
                    ml: 1,
                    mt: 1,
                    width: 30,
                    height: 30,
                    fontSize: 12,
                  }}
                  src={data.img}
                >
                  {data.ava}
                </Avatar>
              </Grid>
              <Grid item xs={8.5}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: 13,
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      ml: 0,
                      mt: -1,
                    }}
                  >
                    {data.nama}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 9, fontFamily: "Roboto" }}
                  >
                    {data.sabuk}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            {/* Keterangan Absensi */}
            <Box
              sx={{
                mt: -3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ButtonGroup
                variant="text"
                aria-label="outlined button group"
                color="inherit"
              >
                <Button sx={{ display: "block", borderColor: "#a1a1a1" }}>
                  <Typography sx={{ fontSize: 8 }}>Tidak Hadir</Typography>
                  <Typography sx={{ fontSize: 14 }}>{data.alpa}</Typography>
                </Button>
                <Button
                  sx={{
                    display: "block",
                    borderColor: "#a1a1a1",
                    ml: 1,
                    pr: 2,
                  }}
                >
                  <Typography sx={{ fontSize: 8 }}>Sakit</Typography>
                  <Typography sx={{ fontSize: 14 }}>{data.sakit}</Typography>
                </Button>
                <Button
                  sx={{
                    display: "block",
                    borderColor: "#a1a1a1",
                    ml: 1,
                    pr: 2,
                  }}
                >
                  <Typography sx={{ fontSize: 8 }}>Izin</Typography>
                  <Typography sx={{ fontSize: 14 }}>{data.izin}</Typography>
                </Button>
                <Button
                  sx={{
                    display: "block",
                    borderColor: "#a1a1a1",
                    ml: 1,
                    pr: 2,
                  }}
                >
                  <Typography sx={{ fontSize: 8 }}>Presentase</Typography>
                  <Typography sx={{ fontSize: 14 }}>{data.present}</Typography>
                </Button>
              </ButtonGroup>
            </Box>
          </Card>
        </Box>
      ))}
      {data.length === 0 && <span>No records found to display!</span>}
    </>
  );
}
