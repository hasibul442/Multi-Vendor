import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../Components";

function Orders() {
    const {t} = useTranslation();
  return (
    <>
      <Box m="20px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Header title={t("Orders.Title")} subtitle={t("Orders.Subtitle")} />
        </Box>
      </Box>
    </>
  );
}

export default Orders;
