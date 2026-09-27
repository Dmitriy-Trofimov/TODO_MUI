import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';





export default function AddTask () {

  const [taskName, setTaskName] = useState('');
  const isEmpty = !taskName.trim();
  const cleanInput = '';

  const handleShowTask = () => {
    alert(taskName);
    setTaskName(cleanInput);
  }
 

  return (
    <Box  sx={{  m: 1, display: 'flex'  }} >
      <TextField 
        id="outlined-basic" 
        label="Имя новой задачи" 
        variant="standard" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)}
        sx={{
          width: '50ch',
          ml: '32px',
          mt: '8px'
        }}


        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  disabled={isEmpty} 
                  onClick={handleShowTask} 
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