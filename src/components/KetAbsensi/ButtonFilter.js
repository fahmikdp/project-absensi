import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";

const DataButton = ["All", "Putih", "Kuning"];

const ButtonFilters = styled(Button)({
  transition: " 1ms smooth",
  marginTop: 10,
  marginBottom: 10,
  marginRight: 5,
  width: "25%",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 11,
  padding: "5px 22px",
  border: "1px solid",
  borderRadius: "20px",
  lineHeight: 1.5,
  backgroundColor: "#fff",
  color: "#25B8BB",
  borderColor: "#25B8BB",
  "&.clicked": {
    backgroundColor: "#25B8BB",
    color: "#fff",
  },
  fontFamily: [
    "Roboto",
    "poppins",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  "&:hover": {
    color: "#fff",
    padding: "5px 26px",
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
});

export default function ButtonFilter() {
  return (
    <Box>
      {DataButton.map((sabuk) => (
        <ButtonFilters variant="contained" disableRipple>
          {sabuk}
        </ButtonFilters>
      ))}
    </Box>
  );
}
