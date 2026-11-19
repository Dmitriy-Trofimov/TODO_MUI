import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';


const initialTasks = [
  {id: 0, name: 'Say Hellow', isDone: false},
  {id: 1, name: 'Write text', isDone: false},
  {id: 2, name: 'Тренировать React', isDone: true},
  {id: 3, name: 'Рвать ебучие пределы', isDone: true}
]

let nextId = 525;


export function TaskSection () {

  const [task, setTask] = useState(initialTasks);
  const planList = task.filter(task => task.isDone === false);
  const [editingTaskId, setEditingTaskId] = useState(null); 
  const [editText, setEditText] = useState(''); 

  const handleAddTask = (inputText) => {
    setTask([
      ...task,
      {id: nextId++, name: inputText, isDone: false}
    ]);
  }

  const handleSetIsDone = (id) => {
    const nextTasks = planList.map(task => 
      task.id === id
      ? { ...task, isDone: !task.isDone } 
      : task
    )
    setTask(nextTasks);
  }

  const handleDeleteTask = (id) => {
    const updatedPlanList = task.filter(task => task.id !== id);
    setTask(updatedPlanList);
  }

  const handleStartEdit = (task) => {
    setEditingTaskId(task.id);
    setEditText(task.name);
  };

  const handleSaveEdit = () => {
    if (!editText.trim()) return;

    const updatedList = task.map(task => 
      task.id === editingTaskId ? { ...task, name: editText } : task
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
      <TaskReady />  
    </Box>
  )
} 




export default function AddTask ({ handleAddTask }) {

  const [inputText, setInputText] = useState('');
  const isEmpty = !inputText.trim();

  return (
    <Box  sx={{  m: 1, display: 'flex'  }} >
      <TextField 
        id="outlined-basic" 
        label="Имя новой задачи" 
        variant="standard" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
        sx={{
          width: '55ch',
          ml: '32px',
          mt: '8px'
        }}


        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  disabled={isEmpty}
                  sx={{ borderRadius: '11px' }}
                  onClick={ () => {
                    handleAddTask(inputText); 
                    setInputText('');
                    }} 
                  >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}       
      /> 
    </Box>
  );
} 


export function TaskPlan ({ handleSetIsDone, handleDeleteTask, handleStartEdit, handleSaveEdit, planList, editingTaskId, editText, setEditText }) {
 

    if (planList.length === 0) {
      return null; 
    }

    return (
      <Box sx={{ width: 490 }}
      >

        <Typography variant='h4'
          sx={{
            color: 'gray',
            ml: '215px',
            fontSize: '15px'
          }}  
        >
          ПЛАН: ({planList.length})
        </Typography>

        <List>
          {planList.map(task => {
  
            const isEditingThisTask = task.id === editingTaskId;

            if (isEditingThisTask) 
              return (
                <ListItem key={task.id} sx={{ px: 2 }}>
                  <TextField 
                    id={`edit-input-${task.id}`}
                    variant="standard" 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus 
                    sx={{ width: '100%' }}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton 
                              onClick={handleSaveEdit} 
                              sx={{ borderRadius: '11px' }}
                            >
                              <DoneIcon color='primary' />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}       
                  /> 
                </ListItem>
              );
            

            return (
              <ListItem 
                key={task.id}
                secondaryAction={
                  <Box>
                    <IconButton 
                      edge="end" 
                      onClick={() => handleStartEdit(task)}
                    >
                      <EditIcon color='primary'/>
                    </IconButton>
                    <IconButton 
                      edge="end"  
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <DeleteIcon color="error"/>
                    </IconButton> 
                  </Box>
                }                
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={task.isDone}
                      onChange={() => handleSetIsDone(task.id)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={task.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

      </Box>
    );
  }




export function TaskReady () {

  const filteredReadyList = initialTasks.filter(task => task.isDone === true)

  const [readyList, setReadyList] = useState(filteredReadyList);

  const handleDeleteTask = (id) => {
    const updatedReadyList = readyList.filter(task => task.id !== id);
    setReadyList(updatedReadyList);
  } 

  if (readyList.length === 0) {
    return null; 
  }

  return (
    <Box sx={{ width: 490 }}
    >

      <Typography variant='h4'
        sx={{
          color: 'gray',
          ml: '215px',
          fontSize: '15px'
        }}  
      >
        ГОТОВО: ({readyList.length})
      </Typography>

      <List>
        {readyList.map(task => {

          return (
            <ListItem 
              key={task.id}
              secondaryAction={
                <Box>
                  <IconButton 
                    edge="end"  
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <DeleteIcon color="error"/>
                  </IconButton> 
                </Box>
              }                
            >
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.isDone}
                  />
                </ListItemIcon>
                <ListItemText primary={task.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

    </Box>
  );
}




















