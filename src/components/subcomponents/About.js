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
          Leveling up my knowledge in web development consistently gives me an
          enormous sense of fulfillment and pride. It's the keyboard and me,
          just a few keystrokes away from a solution.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          Ducimus, doloribus corrupti culpa tenetur quidem, rerum fuga
          blanditiis ab reprehenderit provident explicabo aut amet, illo minima
          dolorum eum! Nemo dolor quaerat fuga quam fugit exercitationem
          accusamus deleniti, illo autem?
        </Typography>
      </CardContent>
    </Card>
  );
});

export default About;
