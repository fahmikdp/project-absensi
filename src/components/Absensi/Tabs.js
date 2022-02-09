import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Buttons from "./ButtonFilter";
import Search from "./Search2";
import Card from "./Card2";

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
      <TabPanel value={value} index={0} sx={{ width: "100%" }}>
        <Search />
        <Buttons />
        <Card />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Belum ada tsay
      </TabPanel>
    </Box>
  );
}
