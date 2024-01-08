import { DateTime } from "luxon";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Button, Box, ButtonGroup, Card, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, TableFooter, TextField, Typography } from "@mui/material";
import { Visibility } from "@mui/icons-material";

function createData(date: string, nik: number, name: string, timein: string, timeout: string, shift: string) {
  return { date, nik, name, timein, timeout, shift };
}

const rows = [
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
  createData("05-01-2024", 2205, "Muhamad Fadli Aqil", "12:33:00", "25:22:00", "SHIFT 1"),
];

export default function AttendancePage() {
  const [isSelected, setIsSelected] = useState<number>(0);
  const [isCategory, setIsCategory] = useState("all");
  const [isShift, setIsShift] = useState("all");

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setIsCategory(event.target.value as string);
  };

  const handleChangeShift = (event: SelectChangeEvent) => {
    setIsShift(event.target.value as string);
  };

  const Category = ["all", "head office", "bubble", "jelly", "quality control", "quality assurance", "warehouse", "support", "maintenance", "office boy"];
  const Shift = ["all", "shift 1", "shift 2", "shift 3", "full time"];
  const Attendance = ["all", "presence", "absent", "permission"];
  const searchText = "MUI X Missing license key";
  return (
    <>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={7}>
          <Stack gap={2}>
            <TextField id="filled-search" label="Search Employee" type="search" variant="outlined" />
            <Box marginTop={1}>
              {Attendance.map((name, i) => (
                <Button key={i} sx={{ marginRight: "0.5rem", marginBottom: "0.2rem", borderRadius: "15px" }} disableElevation onClick={() => setIsSelected(i)} variant={isSelected == i ? "contained" : "outlined"}>
                  {name}
                </Button>
              ))}
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Stack gap={2}>
            <Grid>
              <DatePicker label="Start Date" sx={{ marginRight: "0.5rem", width: "49%" }} defaultValue={DateTime.local()} />
              <DatePicker label="End Date" maxDate={DateTime.local()} sx={{ width: "49%" }} defaultValue={DateTime.local()} />
            </Grid>
            <Grid>
              <FormControl sx={{ marginRight: "0.5rem", width: "49%" }}>
                <InputLabel id="shift-select-label">Shift</InputLabel>
                <Select labelId="shift-select-label" sx={{ textTransform: "uppercase" }} id="shift-select" value={isShift} label="Shift" onChange={handleChangeShift}>
                  {Shift.map((name, i) => (
                    <MenuItem key={i} value={name} sx={{ textTransform: "uppercase" }}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ width: "49%" }}>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select labelId="category-select-label" sx={{ textTransform: "uppercase" }} id="category-select" value={isCategory} label="Category" onChange={handleChangeCategory}>
                  {Category.map((name, i) => (
                    <MenuItem key={i} value={name} sx={{ textTransform: "uppercase" }}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Card variant="outlined">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>NIK</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Division</TableCell>
                <TableCell>In</TableCell>
                <TableCell>Out</TableCell>
                <TableCell>Shift</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell>{row.nik}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>Maintenance</TableCell>
                  <TableCell>{row.timein}</TableCell>
                  <TableCell>{row.timeout}</TableCell>
                  <TableCell>{row.shift}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" color="warning" onClick={() => alert(i)} startIcon={<Visibility />}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box paddingY={2} paddingX={5} sx={{ width: "100%", display: "flex", justifyContent: "end", alignItems: "end" }}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button disableElevation>Previous</Button>
              <Button disableElevation>1</Button>
              <Button disableElevation>Next</Button>
            </ButtonGroup>
          </Box>
        </TableContainer>
      </Card>
    </>
  );
}
