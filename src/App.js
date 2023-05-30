import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Login from './auth/Login';
import Home from './components/home';
import TaskForm from './components/TaskForm';
import ViewTasks from './components/viewTask';
import EditTask from './components/EditTask';
import JokesSpot from './components/JokesSpot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/createTask' element={<TaskForm/>}/>
          <Route path='/viewtasks' element={<ViewTasks/>}/>
          <Route path='/jokesSpot' element={<JokesSpot/>}/>
          <Route path="/editTask/:taskId" element={<EditTask />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
