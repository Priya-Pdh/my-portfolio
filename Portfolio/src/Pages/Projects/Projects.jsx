import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import data from '../../data.json';

function Project() {
  const { projects } = data;

  return (
    <Box my={4}>
      {projects.map((project, index) => (
        <Card key={index} sx={{ maxWidth: 500, margin: '0 auto 20px' }}>
          <CardMedia
            component="img"
            alt={project.name}
            height="auto"
            image={project.image}
          />
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {project.description}
            </Typography>
            <Button
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
            >
              Click to view the project
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Project;
