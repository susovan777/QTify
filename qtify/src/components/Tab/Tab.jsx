import { Box, Tabs } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
// import Typography from '@mui/material';

function TabPanel(prop) {
  const { children, value, index, ...other } = prop;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>{/* <Typography>{children}</Typography> */}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ value, handleChange }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor=""
        >
          <Tab label="All" {...allyProps(0)} />
          <Tab label="Rock" {...allyProps(1)} />
          <Tab label="Pop" {...allyProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
}
