import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Container,
  Skeleton,
  Checkbox,
  Button,
} from "@mui/material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import Checkbox from "../components/FormAbsensi/Checkbox";
import { SaveButton } from "../components/FormAbsensi/Buttonfloating";
import lotsOfData from "../components/DataAnggota/DataKarateka";
import Navbar from "../components/Navbar";
import { Link, useHistory } from "react-router-dom";
import _ from "lodash";
import { ArrowBackTwoTone } from "@mui/icons-material";

export default function Media() {
  // Skeleton state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Checkbox state
  const [checkdata, setCheckdata] = useState([]);

  const handleChangeChecked = (c) => {
    let fselected = [...checkdata];
    let selectedtrue = checkdata.filter((x) => x.id === c.id);
    // console.log(fselected);

    if (selectedtrue.length > 0) {
      let withoutdouble = fselected.filter((x) => x.id !== c.id);
      setCheckdata(withoutdouble);
    } else {
      fselected.push(c);
      setCheckdata(fselected);
    }
  };

  //  Ambil data
  const [ambildata, setAmbildata] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    const ambildata = checkdata;
    history.push("/absensi");
    console.log(ambildata, "Telah di absen");
  };

  // SEARCH FILTER STATE
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
  };

  return (
    <>
      {/* Navbar */}
      <Navbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackTwoTone />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              &nbsp;Form Absensi
            </Typography>
          </IconButton>
        </Link>
      </Navbar>
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
          {data.map((value, index) => (
            <Box key={index}>
              <Card
                onClick={() => handleChangeChecked(value)}
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
                    {loading ? (
                      <Avatar
                        sx={{ bgcolor: "#F78104", ml: 1, mt: 1 }}
                        src={value.img}
                      >
                        {value.ava}
                      </Avatar>
                    ) : (
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                        sx={{ ml: 1, mt: 1 }}
                      />
                    )}
                  </Grid>
                  <Grid item xs={8.5} md={9} lg={10}>
                    <CardContent>
                      {/* Nama Peserta */}
                      {loading ? (
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
                          {value.nama}
                        </Typography>
                      ) : (
                        <Skeleton
                          animation="wave"
                          height={15}
                          width="80%"
                          style={{ marginBottom: 5, marginTop: -3 }}
                        />
                      )}
                      {/* Jenis Sabuk */}
                      {loading ? (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: 12, fontFamily: "Roboto" }}
                        >
                          {value.sabuk}
                        </Typography>
                      ) : (
                        <Skeleton
                          animation="wave"
                          height={10}
                          width="40%"
                          style={{ marginBottom: 6 }}
                        />
                      )}
                    </CardContent>
                  </Grid>
                  {/* Checkbox */}
                  <Grid item xs={2} md={2} lg={1}>
                    {loading ? (
                      <Checkbox
                        checked={
                          checkdata.filter((item) => item.id == value.id)
                            .length > 0
                            ? true
                            : false
                        }
                        onClick={() => handleChangeChecked(value)}
                        onchange={(e) => setAmbildata(e.target.checked)}
                        inputProps={{ "aria-label": "controlled" }}
                        sx={{ mt: 1, color: "#249EA0" }}
                      />
                    ) : (
                      <Skeleton
                        animation="wave"
                        height={40}
                        width="50%"
                        style={{ marginTop: 10, marginLeft: 10 }}
                      />
                    )}
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
          {/* Button Floating */}
          {data.length === 0 && <span>No records found to display!</span>}

          {/* Button Floating */}
          {/* <Link to="/absensi"> */}
          <Box sx={{ mt: 8 }}>
            <AppBar
              position="fixed"
              sx={{
                top: "auto",
                bottom: 0,
                bgcolor: "transparent",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  margin: "auto",
                  textAlign: "center",
                  width: "95%",
                }}
              >
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="contained"
                  disableRipple
                  sx={SaveButton}
                >
                  Simpan
                </Button>
              </Box>
            </AppBar>
          </Box>
          {/* </Link> */}
        </Box>
      </Container>
    </>
  );
}
