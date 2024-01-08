import { Button, Card, CardActions, CardContent, CardHeader, Skeleton } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import Header from "~/src/components/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Attendify" },
    {
      name: "description",
      content:
        "Attendify is an online attendance application designed to simplify attendance management for companies or institutions. This application streamlines the process of recording employee or event participant attendance with high efficiency and accuracy.",
    },
  ];
};

export default function Index() {
  const [isSelected, setIsSelected] = useState<string>("weekly");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleOpen();
    setTimeout(() => {
      handleClose();
    }, 2000);
  }, [isSelected]);
  return (
    <>
      <Header title="Dashboard" desc="Here, you can effortlessly track real-time data and current activities." />
      <Card variant="outlined">
        <CardHeader title="Attendance Statistics" component="div" />
        <CardActions sx={{ paddingLeft: "1rem" }}>
          <Button sx={{ borderRadius: "15px" }} variant={isSelected == "weekly" ? "contained" : "outlined"} onClick={() => setIsSelected("weekly")} disableElevation>
            Weekly
          </Button>
          <Button sx={{ borderRadius: "15px" }} variant={isSelected == "monthly" ? "contained" : "outlined"} onClick={() => setIsSelected("monthly")} disableElevation>
            Monthly
          </Button>
          <Button sx={{ borderRadius: "15px" }} variant={isSelected == "yearly" ? "contained" : "outlined"} onClick={() => setIsSelected("yearly")} disableElevation>
            Yearly
          </Button>
        </CardActions>
        <CardContent>
          {open ? (
            <Skeleton animation="wave" variant="rectangular" sx={{ width: "100%", borderRadius: "5px" }} height={400} />
          ) : (
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
              series={[{ curve: "linear", data: [20, 55, 14, 26, 15, 47, 30] }]}
              height={400}
              sx={{
                width: "100%",
              }}
            />
          )}
        </CardContent>
      </Card>
    </>
  );
}
