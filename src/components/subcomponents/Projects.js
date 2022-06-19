import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from '@mui/material';
import React, { useEffect, useReducer } from 'react';
import { projectReducer, projectState } from '../../helpers/helpers';
import CircularProgress from '@mui/material/CircularProgress';

const Projects = () => {
  const [state, dispatch] = useReducer(projectReducer, projectState);
  const fontStyles = { color: '#002f6c' };
  const cardStyles = {
    width: '75vw',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#4f83cc',
    m: 2,
  };

  useEffect(() => {}, [state]);

  console.log(state);

  return (
    <Box>
      <Card sx={cardStyles}>
        <Card sx={{ m: 1 }}>
          <CardMedia
            onLoad={() => dispatch({ type: 'waldo' })}
            component="img"
            image={require('../../img/waldo.gif')}
          />
          {!state.waldo ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : null}
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
      </Card>
      <Card sx={cardStyles}>
        <Card sx={{ m: 1 }}>
          <CardMedia
            onLoad={() => dispatch({ type: 'weather' })}
            component="img"
            image={require('../../img/weather.gif')}
          />
          {!state.weather ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : null}
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
      </Card>
      <Card sx={cardStyles}>
        <Card sx={{ m: 1 }}>
          <CardMedia
            onLoad={() => dispatch({ type: 'todo' })}
            component="img"
            image={require('../../img/jennaslist.gif')}
          />
          {!state.todo ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : null}
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
      </Card>
      <Card sx={cardStyles}>
        <Card sx={{ m: 1 }}>
          <CardMedia
            onLoad={() => dispatch({ type: 'cart' })}
            component="img"
            image={require('../../img/thewiz.gif')}
          />
          {!state.cart ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : null}
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
      </Card>
    </Box>
  );
};

export default Projects;
