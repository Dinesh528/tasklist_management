import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, TextField, Select, MenuItem, Button, Typography } from "@mui/material";
import { addTask } from "../actions/taskActions";
import Navigation from "./Navbar";

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [status, setStatus] = useState("scheduled");

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskId = Date.now().toString();

    // Create a new task object
    const newTask = {
      id: taskId,
      taskName,
      description,
      startTime,
      endTime,
      status,
    };

    // Call the addTask function passed as a prop to add the new task
    dispatch(addTask(newTask));
    navigate("/viewtasks");

    // Reset the form fields
    setTaskName("");
    setDescription("");
    setStartTime("");
    setEndTime("");
    setStatus("scheduled");
  };

  return (
    <div>
    <Navigation/>
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item md={6}>
      <Typography sx={{ typography: { md: "h2", xs: "h3" } }} className="text-center mb-4">
              Create a Task
            </Typography>        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                  <DateTimePicker
                    label="Start Time"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    fullWidth
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                  <DateTimePicker
                    label="End Time"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    fullWidth
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
              >
                <MenuItem value="scheduled">Scheduled</MenuItem>
                <MenuItem value="running">Running</MenuItem>
                <MenuItem value="expired">Expired</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
    </div>
  );
};

export default TaskForm;
