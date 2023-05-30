import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth);
  const { loggedIn, user, error } = authState;
  const handleCreateTask = () => {
    navigate('/createTask');
  };
  const handleLogin = () => {
    navigate('/Login');
  };

  if (loggedIn) {
    return <div>
      <Navbar/>
      <div className='text-center'>
      <div style={{marginTop:"200px"}}>
      <h2>Welcome, {user.name}!</h2>

      </div>
        <div>
        <button className='btn btn-outline-primary' onClick={handleCreateTask}>Create Task</button>
        </div>
      </div>
        
    </div>;
  } else {
    return <div>Please log in.
                <button onClick={handleLogin}>Login</button>

    </div>;
  }
};

export default Home