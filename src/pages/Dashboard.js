import React from "react";
import { Box, Typography, Grid, Button, Card, Container } from "@mui/material";
import {
  styleBtn,
  styleBtn2,
  styleBtnStat,
} from "../components/Dashboard/styleButton";
import GroupsIcon from "@mui/icons-material/Groups";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import {
  StyledButton,
  StyledListbox,
  StyledPopper,
  StyledOption,
} from "../components/Dashboard/styleSelect";
import {
  dataSakit,
  dataAlpa,
  options,
} from "../components/Dashboard/dataChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

// Chart.js (Pie)
ChartJS.register(ArcElement, Tooltip, Legend);

// Select Button
const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

export default function Dashboard() {
  return (
    <>
      <Box
        style={{
          overflow: "hidden",
          backgroundColor: "#249EA0",
          height: "95px",
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography sx={{ color: "#fff", mt: 2, ml: 2 }}>
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <CustomSelect defaultValue={30} style={{ float: "right" }}>
              <StyledOption value={10}>2 Days Ago</StyledOption>
              <StyledOption value={20}>Yesterday</StyledOption>
              <StyledOption value={30}>Today</StyledOption>
            </CustomSelect>
          </Grid>
        </Grid>
      </Box>

      {/* Awal button */}
      <Box
        sx={{
          justifyContent: "space-evenly",
          display: "flex",
          mr: 2,
          ml: 2,
          mt: -4,
        }}
      >
        <Button variant="contained" sx={styleBtn}>
          <Link to="/formabsensi" style={{ textDecoration: "none" }}>
            <GroupsIcon sx={{ color: "red" }} />
            <Typography sx={{ fontSize: 12, color: "#000" }}>
              Karateka
            </Typography>
          </Link>
        </Button>
        <Button variant="contained" sx={styleBtn}>
          <GroupsIcon sx={{ color: "#f78104" }} />
          <Typography sx={{ fontSize: 12 }}>Pelatih</Typography>
        </Button>
      </Box>
      {/* Akhir button */}

      <Container>
        <Box>
          <Card
            sx={{
              maxWidth: 520,
              xs: 12,
              margin: "auto",
              mt: 2,
              mb: 2,
              height: 100,
              boxShadow: "0px 0px 6px #a1a1a1",
            }}
          >
            <Typography sx={{ m: 1, fontWeight: "bold" }}>
              Total Karateka :
              <Typography
                component="span"
                sx={{ color: "#f78104", fontWeight: "bold" }}
              >
                &nbsp;2.192
              </Typography>
            </Typography>
            <Box
              sx={{
                justifyContent: "space-evenly",
                display: "flex",
                mr: 2,
                ml: 2,
                mt: -1,
              }}
            >
              <Button variant="contained" sx={styleBtn2}>
                <Typography sx={{ color: "#249EA0" }}>12</Typography>
                <Typography sx={{ fontSize: 8 }}>Sakit</Typography>
              </Button>
              <Button variant="contained" sx={styleBtn2}>
                <Typography sx={{ color: "#249EA0" }}>20</Typography>
                <Typography sx={{ fontSize: 8 }}>Izin</Typography>
              </Button>
              <Button variant="contained" sx={styleBtn2}>
                <Typography sx={{ color: "#249EA0" }}>17</Typography>
                <Typography sx={{ fontSize: 8 }}>Tidak Hadir</Typography>
              </Button>
            </Box>
          </Card>
          <Card
            sx={{
              maxWidth: 520,
              xs: 12,
              margin: "auto",
              mt: 2,
              mb: 2,
              height: 100,
              boxShadow: "0px 0px 6px #a1a1a1",
            }}
          >
            <Typography sx={{ m: 1, fontWeight: "bold" }}>
              Total Pelatih :
              <Typography
                component="span"
                sx={{ color: "#f78104", fontWeight: "bold" }}
              >
                &nbsp;120
              </Typography>
            </Typography>
            <Box
              sx={{
                justifyContent: "space-evenly",
                display: "flex",
                mr: 2,
                ml: 2,
                mt: -1,
              }}
            >
              <Button variant="contained" sx={styleBtn2}>
                <Typography sx={{ color: "#249EA0" }}>5</Typography>
                <Typography sx={{ fontSize: 8 }}>Sakit</Typography>
              </Button>
              <Button variant="contained" sx={styleBtn2}>
                <Typography sx={{ color: "#249EA0" }}>10</Typography>
                <Typography sx={{ fontSize: 8 }}>Izin</Typography>
              </Button>
              <Button variant="contained" sx={styleBtn2}>
                <Typography sx={{ color: "#249EA0" }}>7</Typography>
                <Typography sx={{ fontSize: 8 }}>Tidak Hadir</Typography>
              </Button>
            </Box>
          </Card>

          {/* Statistik */}
          {/* {dataKarateka.map((value, index) => ( */}
          <Box>
            <Card
              sx={{
                maxWidth: 520,
                xs: 12,
                margin: "auto",
                mt: 2,
                mb: 2,
                height: 220,
                boxShadow: "0px 0px 6px #a1a1a1",
              }}
            >
              <Typography sx={{ m: 1, fontWeight: "bold" }}>
                Statistik
              </Typography>
              <Button sx={styleBtnStat}>Sakit</Button>
              <Box sx={{ maxWidth: "150px", m: "auto", mt: -3 }}>
                <Pie data={dataSakit} options={options} />
              </Box>
            </Card>
            <Card
              sx={{
                maxWidth: 520,
                xs: 12,
                margin: "auto",
                mt: 2,
                mb: 2,
                height: 220,
                boxShadow: "0px 0px 6px #a1a1a1",
              }}
            >
              <Typography sx={{ m: 1, fontWeight: "bold" }}>
                Statistik
              </Typography>
              <Button sx={styleBtnStat}>Tidak Hadir</Button>
              <Box sx={{ maxWidth: "150px", m: "auto", mt: -3 }}>
                <Pie data={dataAlpa} options={options} />
              </Box>
            </Card>
          </Box>
          {/* ))} */}
          {/* Akhir Statistik */}
        </Box>
      </Container>
    </>
  );
}
