import React from 'react';
import { Box, TextField, Button, IconButton, AppBar, Toolbar } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import logo from './assets/logo.svg';

function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#f7f7f7',
        
      }}
    >
      {/* Header with logo on the top left */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#ffffff',
          height: 64,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <Toolbar
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            px: 2,
          }}
        >
          <img src={logo} alt="Logo" style={{ width: 100, height: 40 }} />
        </Toolbar>
      </AppBar>

      {/* Login Box */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 4,
         
        }}
      >
        {/* Form Container with blobs inside */}
        <Box
          sx={{
            position: 'relative',
            width: 360,
            height: 600,
            background: 'linear-gradient(90deg, #ffffff, #ffefeb)',
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            overflow: 'hidden', 
          }}
        >
          {/* Blob shapes inside the login box */}
          <Box
            sx={{
              position: 'absolute',
              width: 150,
              height: 170,
              backgroundColor: '#ffcc80',
              borderRadius: '20%',
              top: '-50px',
              left: '-50px',
              transform: 'rotate(5deg)',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 120,
              height: 120,
              backgroundColor: '#ff7043',
              borderRadius: '40%',
              bottom: '-40px',
              right: '-40px',
              transform: 'rotate(30deg)',
              zIndex: 0,
            }}
            />


          <form style={{ position: 'absolute', zIndex: 1 ,left:0.1}}> 
            {/* Username input */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <IconButton
                sx={{ 
                  p: 0, 
                  color: '#e67e22', 
                  pointerEvents: 'none', 
                }}
              >
                <AccountCircle />
              </IconButton>
              <TextField
                variant="standard"
                placeholder="User name / Email"
                sx={{
                  borderBottom: '1px solid #e67e22',
                  ml: 1,
                  width: '100%',
                  '& .MuiInput-underline:before': {
                    borderBottom: '1px solid #e67e22',
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottom: '1px solid #e67e22', 
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid #e67e22', 
                  },
                }}
              />
            </Box>

            {/* Password input */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <IconButton
                sx={{ 
                  p: 0, 
                  color: '#e67e22', 
                  pointerEvents: 'none',
                }}
              >
                <Lock />
              </IconButton>
              <TextField
                variant="standard"
                type="password"
                placeholder="Password"
                sx={{
                  borderBottom: '1px solid #e67e22',
                  ml: 1,
                  width: '100%',
                  '& .MuiInput-underline:before': {
                    borderBottom: '1px solid #e67e22', 
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottom: '1px solid #e67e22', 
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid #e67e22', 
                  },
                }}
              />
            </Box>

            {/* Submit button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#e86e04',
                color: '#ffffff',
                borderRadius: '20px',
                height: 48,
                width: '100%',
                boxShadow: '0px 2px 2px #e67e22',
                mt: 3,
                '&:hover': {
                  backgroundColor: '#ff9800',
                },
              }}
            >
              Log In Now
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
