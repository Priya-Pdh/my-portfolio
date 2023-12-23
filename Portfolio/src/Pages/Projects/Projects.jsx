import { Box, Typography, Card, CardContent, CardMedia, Button, Paper, Grid } from '@mui/material';
import data from '../../data.json';

function Project() {
  const { projects } = data;

  return (
    <Box my={4}>
      {projects.map((project, index) => (
        <Paper key={index} sx={{ margin: '0 auto 20px', maxWidth: 800 }}>
          <Grid container spacing={2}>
  
              <CardMedia component="img" alt={project.name} height="auto" image={project.image} />
          
          
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
           
          </Grid>
        </Paper>
      ))}
    </Box>
  );
}

export default Project;
