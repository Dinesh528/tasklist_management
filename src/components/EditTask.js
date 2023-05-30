import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editTask } from "../actions/taskActions";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Navigation from "./Navbar";

const EditTask = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskToBeEdited = tasks.find((task) => task.id === taskId);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(taskToBeEdited.taskName);
  const [description, setDescription] = useState(taskToBeEdited.description);
  const [startTime, setStartTime] = useState(taskToBeEdited.startTime);
  const [endTime, setEndTime] = useState(taskToBeEdited.endTime);
  const [status, setStatus] = useState(taskToBeEdited.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...taskToBeEdited,
      taskName,
      description,
      startTime,
      endTime,
      status,
    };
    dispatch(editTask(updatedTask));
    navigate("/viewtasks");
  };

  return (
    <div>
      <Navigation />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item md={6}>
          <Box p={2} textAlign="center">
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    multiline
                    rows={4}
                    variant="outlined"
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
                    variant="outlined"
                  >
                    <MenuItem value="scheduled">Scheduled</MenuItem>
                    <MenuItem value="running">Running</MenuItem>
                    <MenuItem value="expired">Expired</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    Update Task
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditTask;
