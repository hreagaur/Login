import React from 'react';
import { Box, TextField, Button, AppBar, Toolbar, GlobalStyles, Link, Typography } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import logo from '../assets/logo.svg';

function Login() {
  return (
    <>
      <GlobalStyles styles={{ 'html, body': { height: '100%', overflow: 'hidden', margin: 0, padding: 0 } }} />
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
          background: '#ffe8cc',
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
            mt: -8, 
          }}
        >
          {/* Form Container with shapes inside */}
          <Box
            sx={{
              position: 'relative',
              width: 360,
              height: 600,
              background: 'linear-gradient(90deg, #ffffff, #e67e22)',
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              overflow: 'hidden', 
            }}
          >
            {/* Shapes inside the login box */}
            <Box
              sx={{
                position: 'absolute',
                top: -14,
                right: -25,
                height: 500,
                width: 200,
                backgroundColor: '#e86e04',
                borderRadius: 10,
                transform: 'rotate(50deg)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: -30,
                right: 120,
                height: 500,
                width: 520,
                backgroundColor: '#ffff',
                borderRadius: 12,
                transform: 'rotate(-40deg)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: -89,
                right: 30,
                height: 150,
                width: 150,
                backgroundColor: '#7a4415',
                borderRadius: 7,
                transform: 'rotate(45deg)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -160,
                left: 120,
                height: 300,
                width: 300,
                backgroundColor: '#ba6316',
                borderRadius: 10,
                transform: 'rotate(-40deg)',
              }}
            />

            <form style={{ position: 'absolute', zIndex: 1, left: 25 }}> 
              {/* Username input */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AccountCircle sx={{ color: '#e67e22', fontSize: 24 }} />
                <TextField
                  variant="standard"
                  placeholder="User name / Email"
                  sx={{
                    ml: 1,
                    width: '100%',
                    '& .MuiInput-underline:hover:before': {
                      borderBottom: '1px solid orange', 
                    },
                    '& .MuiInput-underline:before': {
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
                <Lock sx={{ color: '#e67e22', fontSize: 24 }} />
                <TextField
                  variant="standard"
                  type="password"
                  placeholder="Password"
                  sx={{
                    ml: 1,
                    width: '100%',
                    '& .MuiInput-underline:hover:before': {
                      borderBottom: '1px solid orange', 
                    },
                    '& .MuiInput-underline:before': {
                      borderBottom: '1px solid #e67e22', 
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid #e67e22', 
                    },
                  }}
                />

              </Box>

              {/* Forgot Password Link */}
              <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' ,ml:1, }}>
                <Link href="#" underline="none" sx={{ color: '#e67e22', '&:hover': { textDecoration: 'underline' ,color:'#7a4415'} }}>
                  Forgot Password?
                </Link>
              </Typography>

              {/* Submit button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ffff',
                  color: '#e86e04',
                  borderRadius: '20px',
                  height: 45,
                  width: '100%',
                  boxShadow: '2px 2px 2px 2px #ba6316',
                  mt: 3,
                  '&:hover': {
                    backgroundColor: '#e38d42',
                    color: '#ffff',
                  },
                }}
              >
                Log In Now
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
