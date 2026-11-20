import { useState } from 'react';
import Box from '@mui/material/Box';
import AddTask from './AddTask';
import TaskPlan from './TaskPlan';
import TaskReady from './TaskReady';



export default function TaskSection () {

  const [task, setTask] = useState(initialTasks);
  const planList = task.filter(task => task.isDone === false);
  const readyList = task.filter(task => task.isDone === true);
  const [editingTaskId, setEditingTaskId] = useState(null); 
  const [editText, setEditText] = useState(''); 

  const handleAddTask = (inputText) => {
    setTask([
      ...task,
      {id: nextId++, name: inputText, isDone: false}
    ]);
  }

  const handleSetIsDone = (id) => {
    const nextTasks = task.map(task => 
      task.id === id
      ? { ...task, isDone: !task.isDone } 
      : task
    )
    setTask(nextTasks);
  }

  const handleDeleteTask = (id) => {
    const updatedList = task.filter(task => task.id !== id);
    setTask(updatedList);
  }

  const handleStartEdit = (task) => {
    setEditingTaskId(task.id);
    setEditText(task.name);
  };

  const handleSaveEdit = () => {
    if (!editText.trim()) return;

    const updatedList = task.map(task => 
      task.id === editingTaskId ? { ...task, name: editText.trim() } : task
    );
    
    setTask(updatedList);
    setEditingTaskId(null); 
    setEditText('');        
  };


  return (
    <Box sx={{ mt: '40px' }}>
      <AddTask 
        handleAddTask={handleAddTask}
      />

      <TaskPlan 
        planList={planList}
        editText={editText}
        editingTaskId={editingTaskId}
        handleDeleteTask={handleDeleteTask} 
        handleStartEdit={handleStartEdit} 
        handleSaveEdit={handleSaveEdit}
        handleSetIsDone={handleSetIsDone}
        setEditText={setEditText}
        />
      <TaskReady 
          handleDeleteTask={handleDeleteTask} 
          readyList={readyList}
      />  
    </Box>
  )
} 


const initialTasks = [
  {id: 0, name: 'Say Hellow', isDone: false},
  {id: 1, name: 'Write text', isDone: false},
  {id: 2, name: 'Тренировать React', isDone: true},
  {id: 3, name: 'Рвать ебучие пределы', isDone: true}
]

let nextId = 525;
