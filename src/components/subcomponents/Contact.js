import { Button, styled, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#4f83cc',
        width: '75vw',
        maxWidth: '650px',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '350px',
          mt: 2,
          p: 2,
        }}
        component="form"
      >
        <CustomTextField label="Name" required />
        <CustomTextField label="Email" required />
        <CustomTextField
          label="Message"
          required
          multiline
          minRows={4}
          maxRows={4}
        />
        <Button sx={{ color: 'white' }}>Submit</Button>
      </Box>
    </Box>
  );
};

export default Contact;
