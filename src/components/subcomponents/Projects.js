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
import React, { useState } from 'react';
import { projectCollection } from '../../helpers/projectData';

const Projects = () => {
  const [projectLoad, setProjectLoad] = useState({
    waldo: false,
    weather: false,
    todo: false,
    cart: false,
  });
  const fontStyles = { color: '#002f6c' };
  const cardStyles = {
    width: '75vw',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#4f83cc',
    m: 2,
  };

  const handleOnLoad = (item) => {
    let copy = { ...projectLoad };
    copy[item] = true;
    setProjectLoad(copy);
  };

  return (
    <Box>
      {projectCollection.map((project) => {
        return (
          <Card sx={cardStyles} key={project.name}>
            <Card sx={{ m: 1 }}>
              <CardMedia
                onLoad={() => handleOnLoad(project.onLoad)}
                component="img"
                image={project.image}
              />
              {!projectLoad[project.onLoad] ? (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
              ) : null}
              <CardContent>
                <Typography gutterBottom variant="h5" sx={fontStyles}>
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={fontStyles}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={project.repo}
                  size="small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </Button>
                <Button
                  href={project.live}
                  size="small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </Button>
              </CardActions>
            </Card>
          </Card>
        );
      })}
    </Box>
  );
};

export default Projects;
