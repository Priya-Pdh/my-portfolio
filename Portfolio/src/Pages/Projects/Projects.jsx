import React, { useState, useEffect } from 'react';
import { Box, Typography, CardContent, CardMedia, Button, Paper, Grid, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from '../../data.json';
import { getImagePath } from '../../assets/getImagePath';

function Project() {
  const { projects } = data;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = projects.map(({ image }) => {
      const img = new Image();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.src = getImagePath(image);
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [projects]);

  return (
    <Box my={4}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        Projects 👩🏻‍💻
      </Typography>
      {imagesLoaded ? (
        projects.map(({ name, image, description, link, repository }, index) => (
          <Paper key={index} sx={{ margin: '0 auto 40px', width: '90%', padding: '20px' }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              {/* Project Image in the Center (xs) */}
              <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  alt={name}
                  height="auto"
                  width="100%"
                  image={getImagePath(image)}
                  sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                />
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
                    sx={{ marginBottom: '8px' }}
                  >
                    Click to view the project
                  </Button>
                  <Button
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{ marginLeft: '8px' }}
                  >
                    Source Code
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Paper>
        ))
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export default Project;
