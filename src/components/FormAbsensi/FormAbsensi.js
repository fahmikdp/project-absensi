import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Container,
  Skeleton,
} from "@mui/material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import Btn from "./Buttonfloating";
import lotsOfData from "../DataAnggota/DataAnggota";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import _ from "lodash";

export default function Media(props) {
  // const { loading = false } = props;

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

    let listdata = ["ava", "nama", "sabuk"].map((x, i) => {
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
    // const lowerCaseValue = value.toLowerCase().trim();
    // if (!lowerCaseValue) {
    //   setData(lotsOfData);
    // } else {
    //   const filteredData = lotsOfData.filter((item) => {
    // return Object.keys(item).some((key) => {
    //   return item[key].toString().toLowerCase().includes(lowerCaseValue);
    // });
    //     return item.nama == lowerCaseValue
    //   });
    //   setData(filteredData);
    // }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar>&nbsp;Form Absensi</Navbar>
      {/* Search */}
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <TextField
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search..."
            type="text"
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
          <br />
          <br />
          {/* Component Card */}
          {data.map((data, index) => (
            <Box key={index}>
              <Card
                sx={{
                  maxWidth: 520,
                  xs: 12,
                  width: "100%",
                  margin: "auto",
                  mb: 1,
                  height: 60,
                  boxShadow: "0px 0px 6px #a1a1a1",
                }}
              >
                <Grid container spacing={2}>
                  {/* Avatar */}
                  <Grid item xs={1.5} md={1} lg={0.5}>
                    {/* {data ? ( */}
                    <Avatar
                      sx={{ bgcolor: "#F78104", ml: 1, mt: 1 }}
                      src={data.img}
                    >
                      {data.ava}
                    </Avatar>
                    {/* ) : (
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                        sx={{ ml: 1, mt: 1 }}
                      />
                    )} */}
                  </Grid>
                  <Grid item xs={8.5} md={9} lg={10}>
                    <CardContent>
                      {/* Nama Peserta */}
                      {/* {data ? ( */}
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          fontSize: 16,
                          fontFamily: "Roboto",
                          fontWeight: "bold",
                          ml: 0,
                          mt: -1,
                        }}
                      >
                        {data.nama}
                      </Typography>
                      {/* ) : (
                        <Skeleton
                          animation="wave"
                          height={15}
                          width="80%"
                          style={{ marginBottom: 5, marginTop: -3 }}
                        />
                      )} */}
                      {/* Jenis Sabuk */}
                      {/* {data ? ( */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: 12, fontFamily: "Roboto" }}
                      >
                        {data.sabuk}
                      </Typography>
                      {/* ) : (
                        <Skeleton
                          animation="wave"
                          height={10}
                          width="40%"
                          style={{ marginBottom: 6 }}
                        />
                      )} */}
                    </CardContent>
                  </Grid>
                  {/* Checkbox */}
                  <Grid item xs={2} md={2} lg={1}>
                    {/* {data ? ( */}
                    <Checkbox />
                    {/* ) : (
                      <Skeleton
                        animation="wave"
                        height={40}
                        width="50%"
                        style={{ marginTop: 10, marginLeft: 10 }}
                      />
                    )} */}
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
          {/* Button Floating */}
          {data.length === 0 && <span>No records found to display!</span>}
          <Link to="/absensi">
            <Btn />
          </Link>
        </Box>
      </Container>
    </>
  );
}
