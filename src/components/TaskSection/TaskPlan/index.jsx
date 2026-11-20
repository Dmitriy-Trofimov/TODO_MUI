import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
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


export default function TaskPlan ({ 
  handleSetIsDone, 
  handleDeleteTask, 
  handleStartEdit, 
  handleSaveEdit, 
  planList, 
  editingTaskId, 
  editText, 
  setEditText 
}){
 

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


