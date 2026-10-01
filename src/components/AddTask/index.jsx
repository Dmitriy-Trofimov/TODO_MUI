import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';





const initialTasks = [
  {id: 0, name: 'Say Hellow', isDone: false},
  {id: 1, name: 'Write text', isDone: false},
  {id: 2, name: 'Тренировать React', isDone: true},
  {id: 3, name: 'Рвать ебучие пределы', isDone: true}
]

let nextId = 525;

export default function AddTask () {

  const [inputText, setInputText] = useState('');
  const [task, setTask] = useState(initialTasks);


  const isEmpty = !inputText.trim();
  const cleanInput = '';

  const handleAddTask = () => {

    setTask([
      ...task,
      {id: nextId++, name: inputText, isDone: false}
    ]);

    console.log(task[task.length-1].name);
    setInputText(cleanInput);
  }
 

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
                  onClick={handleAddTask} 
                  sx={{ borderRadius: '11px' }}
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////     ДОБАВЛЕННЫЕ ЗАДАЧИ     ////////////////////////////////


const planList = initialTasks.filter(task => task.isDone === false);
const readyList = initialTasks.filter(task => task.isDone === true)




export function TaskSection () {

  return (
    <Box sx={{ mt: '40px', }}>
      <TaskPlan/>
      {/* <TaskReady/>  */} 
    </Box>
  )
} 






import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';




export function TaskPlan () {

  if (planList.length > 0) {
    return (
      <Box sx={{
        width: 490}}
      >

        <Typography variant='h4'
          sx={{
            color: 'gray',
            ml: '215px',
            fontSize: '15px'

          }}  
        >
            План: ({planList.length})
        </Typography>

        <List>
          {planList.map(task => 
            <ListItem 
              key={task.id}
              secondaryAction={
                <Box>
                  <IconButton edge="end">
                    <EditIcon color='primary'/>
                  </IconButton>
                  <IconButton edge="end">
                    <DeleteIcon color="error" />
                  </IconButton> 
                </Box>
              }                
            >

              <ListItemButton>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // checked={true}
                  />
                </ListItemIcon>
                <ListItemText primary={task.name} />
              </ListItemButton>

            </ListItem>
          )}
        </List>
      </Box>
    );
  }
}





// export function TaskReady () {


//   if (readyList.length > 0) {
//     return (
//       <Box sx={{border: '1px solid black', mt: '40px', }}>

//         <Typography variant='h4'
//           sx={{
//             color: 'gray',
//             ml: '215px',
//             fontSize: '15px'

//           }}  
//         >
//             План: ({readyList.length})
//         </Typography>

//           {readyList.map(task => 
//             <ul key={task.id}>
//               {task.name}

//             </ul>
//           )}
//       </Box>
//     );
//   }
// }













