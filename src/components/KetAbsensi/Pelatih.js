import React, { useState, useEffect } from "react";
// Import Search
import { IconButton, InputAdornment, TextField } from "@mui/material";
// Import Icon
import SearchIcon from "@mui/icons-material/Search";
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
  Skeleton,
} from "@mui/material";
import dataPelatih from "../DataAnggota/DataPelatih";
import _ from "lodash";
import "./Button.css";

// Data dan Style ButtonFilter
const DataButton = ["All", "DAN I", "DAN II", "DAN III", "DAN IV", "DAN V"];

const styleBtn = {
  transition: " 1ms smooth",
  marginTop: 1,
  marginBottom: 1.5,
  marginRight: 1,
  width: "100%",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 10,
  padding: "1px 40px",
  border: "1px solid",
  borderRadius: "20px",
  lineHeight: 1.2,
  backgroundColor: "#fff",
  color: "#25B8BB",
  borderColor: "#25B8BB",
  // fontFamily: "Roboto",
  "&:hover": {
    color: "#fff",
    boxShadow: "none",
    backgroundColor: "#25B8BB",
  },
  "&:active": {
    color: "#fff",
    backgroundColor: "#25B8BB",
  },
  "&:focus": {
    color: "#fff",
    backgroundColor: "#25B8BB",
  },
};

export default function Karateka() {
  // Skeleton State
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Search and FilterButton State
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataPelatih);

  // FilterButton
  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === "All") {
      setData(dataPelatih);
    } else if (word === "DAN I") {
      const filtered = dataPelatih.filter((item) => item.dan === "I");
      setData(filtered);
    } else if (word === "DAN II") {
      const filtered = dataPelatih.filter((item) => item.dan === "II");
      setData(filtered);
    } else if (word === "DAN III") {
      const filtered = dataPelatih.filter((item) => item.dan === "III");
      setData(filtered);
    } else if (word === "DAN IV") {
      const filtered = dataPelatih.filter((item) => item.dan === "IV");
      setData(filtered);
    } else if (word === "DAN V") {
      const filtered = dataPelatih.filter((item) => item.dan === "V");
      setData(filtered);
    }
  };

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
      return dataPelatih.filter((el) => {
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
      <Box className="box">
        {DataButton.map((dan) => (
          <>
            {loading ? (
              <Button value={dan} onClick={handleBtns} sx={styleBtn}>
                {dan}
              </Button>
            ) : (
              <Skeleton
                animation="wave"
                width={207}
                height={30}
                sx={{ mr: 1, mt: 1, mb: 1, borderRadius: 10 }}
              />
            )}
          </>
        ))}
      </Box>

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
              <Grid item xs={1.4}>
                {loading ? (
                  <Avatar
                    sx={{
                      bgcolor: "#F78104",
                      ml: 1,
                      mt: 1,
                      width: 37,
                      height: 37,
                      fontSize: 17,
                    }}
                    src={data.img}
                  >
                    {data.ava}
                  </Avatar>
                ) : (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={37}
                    height={37}
                    sx={{ ml: 1, mt: 1 }}
                  />
                )}
              </Grid>
              <Grid item xs={8.6}>
                <CardContent>
                  {loading ? (
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
                  ) : (
                    <Skeleton
                      animation="wave"
                      height={12}
                      width="80%"
                      style={{ marginBottom: 3, marginTop: -4 }}
                    />
                  )}
                  {/* Jenis Sabuk */}
                  {loading ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: 9, fontFamily: "Roboto" }}
                    >
                      {data.sabuk}
                    </Typography>
                  ) : (
                    <Skeleton
                      animation="wave"
                      height={9}
                      width="40%"
                      style={{ marginBottom: 6 }}
                    />
                  )}
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
              {loading ? (
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
                    <Typography sx={{ fontSize: 14 }}>
                      {data.present}
                    </Typography>
                  </Button>
                </ButtonGroup>
              ) : (
                <Skeleton
                  animation="wave"
                  height={65}
                  width="70%"
                  style={{ marginTop: -10 }}
                />
              )}
            </Box>
          </Card>
        </Box>
      ))}
      {data.length === 0 && <span>No records found to display!</span>}
    </>
  );
}
