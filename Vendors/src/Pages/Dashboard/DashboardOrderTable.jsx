import { CancelOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Order from "../../Components/Data/Order";
import { tokens } from "../../themes";

function DashboardOrderTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();
  const data = Order;
  return (
    <>
      <Card sx={{ backgroundColor: undefined, height: "400px" }}>
        <CardContent>
          <table
            className="table table-sm"
            style={{ color: colors.blueAccent[100] }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{t("Table.Order ID")}</th>
                <th scope="col">{t("Table.Customer")}</th>
                <th scope="col">{t("Table.Total")}</th>
                <th scope="col">{t("Table.Status")}</th>
                <th scope="col">{t("Table.Time")}</th>
                <th scope="col">{t("Table.Action")}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.Order_id}</td>
                    <td>{item.user_id}</td>
                    <td>{item.Order_total}</td>
                    <td>{item.Order_status}</td>
                    <td>{item.Order_date}</td>
                    <td>
                      <Stack direction="row" spacing={0}>
                        <IconButton
                          size="small"
                          variant="outlined"
                          color="primary"
                        >
                          <RemoveRedEyeOutlined
                            sx={{ color: colors.blueAccent[500] }}
                          />
                        </IconButton>
                        <IconButton
                          size="small"
                          variant="outlined"
                          color="primary"
                        >
                          <CancelOutlined
                            sx={{ color: colors.redAccent[500] }}
                          />
                        </IconButton>
                      </Stack>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </>
  );
}

export default DashboardOrderTable;
