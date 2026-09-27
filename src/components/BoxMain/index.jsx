import Box from '@mui/material/Box';


export default function BoxMain({ children }) {

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