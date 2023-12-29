import { Box, Typography, CardContent, CardMedia, Button, Paper, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from '../../data.json';

function Project() {
  const { projects } = data;

  return (
    <Box my={4}>
       <Typography variant="h4"  sx= {{ textAlign: 'center'}}>
        Projects 👩🏻‍💻
      </Typography>
      {projects.map(({ name, image, description, link }, index) => (
        <Paper key={index} sx={{ margin: '0 auto 40px', maxWidth: '90%', padding: '20px' }}>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            {/* Project Image in the Center (xs) */}
            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
              <CardMedia component="img" alt={name} height="auto" maxWidth="100%" image={image} sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} />
            </Grid>

            {/* Project Description and Button in the Center (xs, md) */}
            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {description}
                </Typography>
                <Button
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                >
                  Click to view the project
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
}

export default Project;