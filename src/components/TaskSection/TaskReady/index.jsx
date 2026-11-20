import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function TaskReady ({ handleDeleteTask, readyList }){
 
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

