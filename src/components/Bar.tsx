import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {  ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import './css/bar.css'

export default function Bar() {

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ flexGrow: 1 }} color="primary">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color="#fff" id='title' style={{userSelect: 'none'}}>
            Todo List App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
