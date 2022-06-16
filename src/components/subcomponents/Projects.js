import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';

const Projects = () => {
  const fontStyles = { color: '#002f6c', fontSize: '1rem' };
  const boxStyles = {
    width: '75vw',
    maxWidth: '650px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#4f83cc',
    m: 2,
  };
  return (
    <Box>
      <Box sx={boxStyles}>
        <Card sx={{ m: 1 }}>
          <CardContent>
            <Typography sx={fontStyles}>Where's Waldo?</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://github.com/crono628/wheres-waldo"
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </Button>
            <Button
              href="https://waldo-ce529.web.app/"
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={boxStyles}>
        <Card sx={{ m: 1 }}>
          <CardContent>
            <Typography sx={fontStyles}>Weather Forecast</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://github.com/crono628/new-weather-app"
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </Button>
            <Button
              href="https://weather-4b046.web.app/"
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={boxStyles}>
        <Card sx={{ m: 1 }}>
          <CardContent>
            <Typography sx={fontStyles}>Jenna's List</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://github.com/crono628/react-to-do-list"
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </Button>
            <Button
              href="https://www.jennaslist.app/#/login"
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={boxStyles}>
        <Card sx={{ m: 1 }}>
          <CardContent>
            <Typography sx={fontStyles}>Shopping Cart</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://github.com/crono628/cart"
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </Button>
            <Button
              href="https://crono628.github.io/cart/"
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Projects;
