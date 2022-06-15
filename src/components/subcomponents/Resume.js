import { Button, Card, CardContent, Link } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef } from 'react';
// import MichaelDeSantisResumePNG from ''

const Resume = forwardRef((props, ref) => {
  return (
    <>
      <Button
        variant="contained"
        size="small"
        sx={{
          position: 'absolute',
          top: '107px',
          left: '0',
          right: '0',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '180px',
        }}
      >
        Download
      </Button>
      <Card
        sx={{
          backgroundColor: '#4f83cc',
          width: '75vw',
          maxWidth: '650px',
          display: 'flex',
          flexDirection: 'column',
          p: 1,
        }}
        {...props}
        ref={ref}
      >
        <Box
          component="img"
          src={require('../../img/MichaelDeSantisResume.png')}
        />
      </Card>
    </>
  );
});

export default Resume;
