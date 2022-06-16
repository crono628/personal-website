import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const Projects = () => {
  const fontStyles = { color: '#002f6c' };
  const boxStyles = {
    width: '45vw',
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
          <CardMedia component="img" image={require('../../img/waldo.gif')} />
          <CardContent>
            <Typography gutterBottom variant="h5" sx={fontStyles}>
              Where's Waldo?
            </Typography>
            <Typography variant="body2" sx={fontStyles}>
              Classic Waldo search built with React, styled with MUI, and served
              from Firebase. Each game has optional 'best time' records stored
              on Firebase and a timer that can be paused. Adjusting a reusable
              algorithm that could be used for any picture was a challenge but
              ultimately provided me with a deeper understanding of event
              targeting.
            </Typography>
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
          <CardMedia component="img" image={require('../../img/weather.gif')} />
          <CardContent>
            <Typography gutterBottom variant="h5" sx={fontStyles}>
              Weather Forecast
            </Typography>
            <Typography variant="body2" sx={fontStyles}>
              This weather app is built with React, styled with MUI, and relies
              on an API from OpenWeatherMap. Prioritizing reusable components in
              this app produces consistently reliable and symetric results.
            </Typography>
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
          <CardMedia
            component="img"
            image={require('../../img/jennaslist.gif')}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" sx={fontStyles}>
              Jenna's List
            </Typography>
            <Typography variant="body2" sx={fontStyles}>
              My wife described what her dream to-do list would look like, so I
              built it for her. User authorization and the backend database took
              the lead on this Firebase served app. React Router is utilized for
              signing up and logging in.
            </Typography>
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
          <CardMedia component="img" image={require('../../img/thewiz.gif')} />

          <CardContent>
            <Typography gutterBottom variant="h5" sx={fontStyles}>
              Shopping Cart
            </Typography>
            <Typography variant="body2" sx={fontStyles}>
              Time travel to when nobody beat The Wiz. This simple app showcases
              reusable components and a persistent shopping cart for the user to
              manipulate.
            </Typography>
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
