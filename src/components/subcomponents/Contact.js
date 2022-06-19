import {
  Button,
  Card,
  CardContent,
  Snackbar,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef, useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [open, setOpen] = useState(false);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contact'), {
        name: input.name,
        email: input.email,
        message: input.message,
      });
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
    setInput({ name: '', email: '', message: '' });
    console.log('submit');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: '#4f83cc',
        width: '75vw',
        maxWidth: '650px',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        mt: 2,
      }}
    >
      <CardContent>
        <Typography variant="h4" textAlign="center">
          Let's talk!
        </Typography>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            color="success"
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Thanks! I will contact you soon.
          </Alert>
        </Snackbar>
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
          onSubmit={handleSumbit}
        >
          <CustomTextField
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            value={input.name}
            label="Name"
            required
          />
          <CustomTextField
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            type="email"
            value={input.email}
            label="Email"
            required
          />
          <CustomTextField
            value={input.message}
            label="Message"
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            required
            multiline
            minRows={4}
            maxRows={4}
          />
          <Button
            size="large"
            variant="outlined"
            onSubmit={handleSumbit}
            type="submit"
            sx={{
              color: 'white',
              width: '200px',
              alignSelf: 'center',
              border: ' solid white',
              '&:hover': { border: 'solid white' },
            }}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Contact;
