import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../actions/taskActions';
import { TextField, Button, Box, Grid } from '@mui/material';
import Navigation from './Navbar';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ViewTasks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Filter tasks based on search term and selected date
  const filteredTasks = tasks.filter((task) => {
    const isMatchingSearch = task.taskName.toLowerCase().includes(searchTerm.toLowerCase());
    const isMatchingDate = selectedDate ? task.startTime.toString().includes(selectedDate.toString()) : true;
    return isMatchingSearch && isMatchingDate;
  });
  
  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle date selection change
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleEditTask = (taskId) => {
    navigate(`/editTask/${taskId}`);
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  const clearFilter = () => {
    setSearchTerm('');
    setSelectedDate('');
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'taskName', headerName: 'Task Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'status', headerName: 'Status', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div >
          <Button variant="outlined" onClick={() => handleEditTask(params.row.id)}>
            Edit
          </Button>
          <Button style={{marginLeft:"5px"}} variant="outlined" onClick={() => handleDeleteTask(params.row.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const rows = filteredTasks.map((task) => ({ id: task.id, ...task }));

  return (
    <div>
      <Navigation />
      <Box p={2}>
        <h2 className='text-center'>View Tasks</h2>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TextField
              type="text"
              label="Search Task"
              value={searchTerm}
              onChange={handleSearchChange}
              variant="outlined"
              size="large"
              sx={{padding:"15px"}}
            />
          </Grid>
          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Date Filter"
                value={selectedDate}
                onChange={handleDateChange}
                fullWidth
              />
            </LocalizationProvider>
            <Button variant="outlined" onClick={clearFilter} style={{padding:"15px",marginLeft:"10px"}}>Clear Filter</Button>
          </Grid>
        </Grid>
        <div style={{ height: 400, width: '100%',marginTop:"15px" }}>
          <DataGrid columns={columns} rows={rows} />
        </div>
      </Box>
    </div>
  );
};

export default ViewTasks;
