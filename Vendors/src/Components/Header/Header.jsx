import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../themes";

function Header(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box mb="30px">
        <Typography
          variant="h2"
          color={colors.gray[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="h6"
          color={colors.greenAccent[400]}
          fontWeight="bold"
        >
          {props.subtitle}
        </Typography>
      </Box>
    </>
  );
}

export default Header;
