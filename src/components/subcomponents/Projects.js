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
import { projectCollection } from '../../helpers/projectData';

const Projects = () => {
  const fontStyles = { color: '#002f6c' };
  const cardStyles = {
    width: '75vw',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#4f83cc',
    m: 2,
  };

  return (
    <Box>
      {projectCollection.map((project) => {
        return (
          <Card sx={cardStyles} key={project.name}>
            <Card sx={{ m: 1 }}>
              <CardMedia component="img" image={project.animation} />
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
