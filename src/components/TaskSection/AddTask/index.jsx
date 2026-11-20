import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';


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

