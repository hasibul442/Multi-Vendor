import { LocalGroceryStoreOutlined, LocalMallOutlined, PendingActionsOutlined, SellOutlined } from "@mui/icons-material";
import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../Components";
import { tokens } from "../../themes";
import DashboardOrderTable from "./DashboardOrderTable";
import Dashboard_Card from "./Dashboard_Card";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();
  return (
    <>
      <Box m="20px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Header
            title={t("Dashboard.Title")}
            subtitle={t("Dashboard.Subtitle")}
          />
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ flexGrow: 2}}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <Dashboard_Card
                  title="Card 1"
                  background={colors.blueAccent[900]}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Dashboard_Card title="Card 2" />
              </Grid>
              <Grid item xs={6} md={4}>
                <Dashboard_Card title="Card 3" />
              </Grid>
              <Grid item xs={6} md={8}>
                <Dashboard_Card title="Card 4" />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, ml:2 }}>
            <Grid container spacing={1}>
              <Grid item xs={6} md={12}>
                <table className="table" style={{ color:colors.blueAccent[100] }}>
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                    </tr>
                  </thead>

                  </table>
              </Grid>
            </Grid>
          </Box>
        </Box> */}

        <div>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <Dashboard_Card
                    title={t("Dashboard.Total Items")}
                    totalProduct={4507}
                    background={colors.blueAccent[700]}
                    icon={<LocalGroceryStoreOutlined sx={{ fontSize: 30 }} />}
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <Dashboard_Card
                    title={t("Dashboard.Total Orders")}
                    totalProduct={145}
                    background={colors.greenAccent[700]}
                    icon={<LocalMallOutlined sx={{ fontSize: 30 }} />}
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <Dashboard_Card
                    title={t("Dashboard.Total Sells")}
                    totalProduct={145052.45}
                    background={colors.redAccent[700]}
                    icon={<SellOutlined sx={{ fontSize: 30 }} />}
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <Dashboard_Card
                    title={t("Dashboard.Order Pending")}
                    totalProduct={3}
                    background={colors.primary[600]}
                    icon={<PendingActionsOutlined sx={{ fontSize: 30 }} />}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <DashboardOrderTable />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Dashboard;
