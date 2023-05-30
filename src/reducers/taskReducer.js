import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../actions/taskActions';


const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      case EDIT_TASK:
      const updatedTask = action.payload;
      const updatedTaskList = state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      return {
        ...state,
        tasks: updatedTaskList,
      };
      case DELETE_TASK:
        const taskId = action.payload;
        const updatedTasks = state.tasks.filter((task) => task.id !== taskId);
        return {
          ...state,
          tasks: updatedTasks,
        };  
    default:
      return state;
  }
};

export default taskReducer;
