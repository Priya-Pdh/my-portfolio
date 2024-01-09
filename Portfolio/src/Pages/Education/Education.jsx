import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Link, CircularProgress } from '@mui/material';
import data from '../../data.json';
import { getImagePath } from '../../assets/getImagePath';

function Education() {
  const { education } = data;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = education.map((edu) => {
      const img = new Image();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.src = getImagePath(edu.logo);
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [education]);

  return (
    <Box my={4}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        Education 🎓
      </Typography>
      {imagesLoaded ? (
        education.map((edu, index) => (
          <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
            <Box display="flex" alignItems="center">
              <img src={getImagePath(edu.logo)} alt={edu.name} style={{ marginRight: '16px', width: '120px', height: '90px' }} />
              <Box>
                <Typography variant="h6" gutterBottom>
                  {edu.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {edu.subject}
                </Typography>
              </Box>
            </Box>
            <Link href={edu.website} target="_blank" rel="noopener noreferrer" color="primary" underline="hover">
              Visit {edu.name}
            </Link>
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

export default Education;
