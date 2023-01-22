import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor : '#000'}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/' style={{color: '#fff', textDecoration: 'none', fontSize: '1.5rem'}} >Prime flix</Link>
          </Typography>
          <Link to='/favoritos' style={{color: '#000', backgroundColor: '#fff', textDecoration: 'none', fontSize: '1.2rem', padding: 3}} >Meus favoritos</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}