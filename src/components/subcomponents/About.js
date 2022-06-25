import { Card, CardContent, Typography } from '@mui/material';
import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <Card
      sx={{
        backgroundColor: '#4f83cc',
        width: '75vw',
        maxWidth: '650px',
        display: 'flex',
        flexDirection: 'column',
        mt: 2,
      }}
      {...props}
      ref={ref}
    >
      <CardContent>
        <Typography>
          Eloquent solutions to unique problems fuel my interest to learn more.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          Leveling up my knowledge in web development gives me an enormous sense
          of fulfillment and pride. It's the keyboard and me, just a few
          keystrokes away from a solution.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          Getting to intimately know every inch of a subject is my superpower;
          whether it be coding, cooking, coffee, shaving, health, hiking, video
          games or anything else I invest myself in, I always value an
          opportunity to get closer to achieving mastery.
        </Typography>
      </CardContent>
    </Card>
  );
});

export default About;
