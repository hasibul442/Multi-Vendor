import { useTheme } from "@emotion/react";
import { Card, CardContent } from "@mui/material";
import React from "react";
import { tokens } from "../../themes";

function Dashboard_Card(props) {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  return (
    <>
      <Card sx={{ backgroundColor: props.background }}>
        <CardContent>
          <div className="row">
            <div className="col-sm-10">
              <h5>{props.title}</h5>
            </div>
            <div className="col-sm-2">{props.icon}</div>
          </div>
          <div>
            <h4 className="text-center m-0">{props.totalProduct}</h4>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Dashboard_Card;
