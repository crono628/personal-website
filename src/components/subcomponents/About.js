import { Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        reprehenderit nesciunt ut laudantium assumenda modi harum vero laborum
        ipsum? Expedita corporis ex laborum incidunt architecto, vero maiores
        unde nemo soluta.
      </CardContent>
      <CardContent>
        Repellat tenetur neque voluptatibus nobis quae ea blanditiis iusto,
        distinctio, reprehenderit unde ratione quod voluptates quaerat
        repudiandae aspernatur nihil? Delectus officiis rem molestiae maiores
        voluptatum illo error nihil odio. Voluptatem?
      </CardContent>
      <CardContent>
        Ducimus, doloribus corrupti culpa tenetur quidem, rerum fuga blanditiis
        ab reprehenderit provident explicabo aut amet, illo minima dolorum eum!
        Nemo dolor quaerat fuga quam fugit exercitationem accusamus deleniti,
        illo autem?
      </CardContent>
      <CardContent>
        Eius explicabo impedit earum rerum voluptatem repudiandae alias illum
        blanditiis eligendi animi officia eos, error distinctio magnam dolorum,
        qui tempora minus quod dolore minima maxime! Modi eveniet sint nostrum
        unde?
      </CardContent>
    </Card>
  );
});

export default About;
