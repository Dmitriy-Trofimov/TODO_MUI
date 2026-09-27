
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


import InputAdornment from '@mui/material/InputAdornment';



export function BoxMain({ children }) {

  return (
      <Box
        sx={{
          width: 514,
          minHeight: 766,
          border: '1px solid black',
          borderRadius: 5,
          bgcolor: '#FFFFFF',
          ml: '100px'
        }}
      >
        {children}
      </Box>
  );
}


export function Title ({ children }) {

  return (
    <Typography variant='h4'
    sx={{
      color: 'primary.light',
      mt: '32px',
      ml: '32px',
      fontSize: '34px'

    }}
    >
      {children}
    </Typography>
  );

}




export function AddTask () {

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





export default function AppToDo() {

  return (
    <BoxMain>    

      <Title>
        TODO
      </Title>

      <AddTask/>
    </BoxMain>

  )
}

 




