import Typography from '@mui/material/Typography';



export default function Title ({ children }) {

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