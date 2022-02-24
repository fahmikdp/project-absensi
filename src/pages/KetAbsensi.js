import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// Component Search, Button, Card
import Karateka from "../components/KetAbsensi/Karateka";
import Pelatih from "../components/KetAbsensi/Pelatih";
// import Navbar
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Link to="/formabsensi">
        <Navbar>&nbsp;Absensi</Navbar>
      </Link>
      <Box sx={{ width: "100%", mt: 6 }}>
        <Box sx={{ color: "grey" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <Tab label="Karateka" {...a11yProps(0)} />
            <Tab label="Pelatih" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* Tab Karateka */}
        <TabPanel value={value} index={0} sx={{ width: "100%" }}>
          {/* Search */}
          <Karateka />
        </TabPanel>
        {/* Tab Pelatih */}
        <TabPanel value={value} index={1}>
          <Pelatih />
        </TabPanel>
      </Box>
    </>
  );
}
