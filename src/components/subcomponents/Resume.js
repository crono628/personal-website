import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef } from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Resume = forwardRef((props, ref) => {
  function handleDownload() {
    const link = document.createElement('a');
    link.download = 'MichaelDeSantisResume';
    link.href = props.resume;
    link.click();
  }

  return (
    <Box {...props} ref={ref}>
      <Button
        onClick={handleDownload}
        variant="contained"
        size="small"
        sx={{
          position: 'absolute',
          top: '107px',
          left: '0',
          right: '0',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '150px',
        }}
        startIcon={<FileDownloadIcon />}
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
      >
        <Box component="img" src={props.resume} />
      </Card>
    </Box>
  );
});

export default Resume;
