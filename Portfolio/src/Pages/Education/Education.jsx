import React from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';
import data from '../../data.json';

function Education() {
  const { education } = data;

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      {education.map((edu, index) => (
        <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
          <Box display="flex" alignItems="center">
            <img src={edu.logo} alt={edu.name} style={{ marginRight: '16px', width: '120px', height: '90px' }} />
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
      ))}
    </Box>
  );
}

export default Education;
