import { Button, Card, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef, useState } from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Resume = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(true);
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
          top: '130px',
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
          mt: 3,
        }}
      >
        <Box
          onLoad={() => setLoading(false)}
          component="img"
          src={props.resume}
        />
        {loading ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        ) : null}
      </Card>
    </Box>
  );
});

export default Resume;
